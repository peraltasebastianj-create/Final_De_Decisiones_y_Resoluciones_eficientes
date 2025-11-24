// script.js

let currentModule = null;
let timer;
let timeLeft = 3600; // 60 minutos en segundos
let isPaused = false;
let attempts = loadAttempts(); // Carga intentos guardados

// --- Funciones de Pestañas y Visibilidad ---
function showSection(sectionId) {
    // Oculta todas las secciones principales
    document.getElementById('exam-section').style.display = 'none';
    document.getElementById('repaso-section').style.display = 'none';

    // Manejo del estado "active" de los botones de pestaña
    document.querySelectorAll('.tabs-nav .tab-button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Muestra la sección solicitada y activa el botón correspondiente
    document.getElementById(sectionId).style.display = 'block';
    
    // Encuentra el botón correcto para activar
    if (sectionId === 'repaso-section') {
        document.querySelector('.tabs-nav button:nth-child(2)').classList.add('active');
    } else {
        document.querySelector('.tabs-nav button:nth-child(1)').classList.add('active');
        
        // Al volver a la sección de examen, nos aseguramos de mostrar la pantalla inicial
        document.getElementById('exam-container').style.display = 'none';
        document.getElementById('results-container').style.display = 'none';
        document.getElementById('attempt-info').style.display = 'block';
        
        // Detener y resetear el temporizador si estaba corriendo
        clearInterval(timer); 
        isPaused = false;
    }
}

// --- Funciones de Gestión de Intentos y Estado ---
function loadAttempts() {
    const savedAttempts = localStorage.getItem('examAttempts');
    return savedAttempts ? JSON.parse(savedAttempts) : {};
}

function saveAttempts() {
    localStorage.setItem('examAttempts', JSON.stringify(attempts));
}

function getModuleName(key) {
    const names = {
        "modulo1": "Módulo 1: Toma de Decisiones Estratégicas",
        "modulo2": "Módulo 2: Resolución de Problemas",
        "modulo3": "Módulo 3: Proceso de Toma de Decisiones Racional",
        "modulo4": "Módulo 4: Sostenibilidad y Liderazgo"
    };
    return names[key] || key;
}

function updateAttemptHistoryDisplay() {
    const attemptsList = document.getElementById('attempts-list');
    const noAttemptsMsg = document.getElementById('no-attempts-msg');
    attemptsList.innerHTML = '';

    const attemptKeys = Object.keys(attempts).sort((a, b) => {
        // Ordena por timestamp para mostrar el más reciente al final
        return parseInt(a.split('_')[1]) - parseInt(b.split('_')[1]); 
    });

    if (attemptKeys.length === 0) {
        noAttemptsMsg.style.display = 'block';
    } else {
        noAttemptsMsg.style.display = 'none';
        
        attemptKeys.forEach((key, index) => {
            const attempt = attempts[key];
            const listItem = document.createElement('li');
            const moduleNameDisplay = getModuleName(attempt.module);

            listItem.innerHTML = `
                <strong>Intento ${index + 1} del ${moduleNameDisplay}:</strong> 
                Puntaje: ${attempt.score} / 100. 
                Fecha: ${attempt.timestamp}.
            `;

            // Hace el elemento clicable y llama a la nueva función
            listItem.setAttribute('onclick', `viewAttemptResults('${key}')`);
            listItem.style.cursor = 'pointer';

            // Estilos basados en el puntaje
            if (attempt.score < 60) {
                listItem.style.color = '#dc3545'; // Rojo si es bajo
            } else {
                listItem.style.color = '#28a745'; // Verde si es bueno
            }

            attemptsList.appendChild(listItem);
        });
    }
}

function startExam() {
    const selector = document.getElementById('module-selector');
    currentModule = selector.value;
    
    showSection('exam-section');

    if (!currentModule) { 
        alert("Por favor, selecciona un módulo para comenzar el examen.");
        return;
    }

    const questions = examQuestions[currentModule];
    if (!questions || questions.length === 0) {
        alert(`Error: El ${getModuleName(currentModule)} no tiene preguntas cargadas.`);
        return;
    }

    document.getElementById('attempt-info').style.display = 'none';
    document.getElementById('exam-container').style.display = 'block';
    
    document.getElementById('module-title').textContent = 
        getModuleName(currentModule);

    timeLeft = 3600; // 60 minutos
    isPaused = false;
    renderQuestions(currentModule);
    startTimer();
}

// --- Funciones del Temporizador ---
function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;

            document.getElementById('timer').textContent = `Tiempo Restante: 
                ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            if (timeLeft <= 0) {
                clearInterval(timer);
                alert("¡El tiempo ha finalizado! El examen se corregirá automáticamente.");
                submitExam(true); // Finaliza por tiempo
            }
        }
    }, 1000);
}

function pauseTimer() {
    isPaused = !isPaused;
    document.getElementById('pause-btn').textContent = isPaused ? 'Reanudar' : 'Pausar';
    if (isPaused) {
        clearInterval(timer);
    } else {
        startTimer();
    }
}

function confirmRestart() {
    if (confirm("¿Estás seguro de que deseas reiniciar el examen? Perderás todo el progreso actual.")) {
        clearInterval(timer);
        startExam();
    }
}

function confirmFinish() {
    if (confirm("¿Estás seguro de que deseas finalizar el examen y corregir?")) {
        clearInterval(timer);
        submitExam(false); 
    }
}

// --- Renderización de Preguntas ---
function renderQuestions(moduleKey) {
    const form = document.getElementById('quiz-form');
    form.innerHTML = '';
    const questions = examQuestions[moduleKey];

    questions.forEach((q, index) => {
        const block = document.createElement('div');
        block.className = 'question-block';
        
        block.innerHTML = `<p>Pregunta ${index + 1}: ${q.question}</p>`;

        const options = q.options.slice(); 
        options.sort(() => Math.random() - 0.5); // Mezclar opciones

        options.forEach(option => {
            const label = document.createElement('label');
            label.className = 'option-label';
            label.innerHTML = `
                <input type="radio" name="q${q.id}" value="${option}">
                ${option}
            `;
            block.appendChild(label);
        });

        form.appendChild(block);
    });
}

// --- Lógica de Corrección ---
function submitExam(timeExpired = false) {
    if (!currentModule) return; 

    clearInterval(timer);
    const form = document.getElementById('quiz-form');
    const questions = examQuestions[currentModule];
    let correctCount = 0;
    const detailedResults = document.getElementById('detailed-results');
    detailedResults.innerHTML = '';
    
    // Objeto para guardar las respuestas del usuario
    const userAnswers = {};

    questions.forEach((q, index) => {
        const selectedOption = form.elements[`q${q.id}`] ? form.elements[`q${q.id}`].value : null;
        
        // Guardar la respuesta seleccionada para el historial
        userAnswers[`q${q.id}`] = selectedOption;
        
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';

        let isCorrect = (selectedOption === q.answer);

        if (isCorrect) {
            correctCount++;
            resultItem.classList.add('correct-answer');
            resultItem.innerHTML = `
                <p><strong>Pregunta ${index + 1} (Correcta):</strong> ${q.question}</p>
                <p>Respuesta Seleccionada: <strong>${q.answer}</strong></p>
            `;
        } else {
            resultItem.classList.add('incorrect-answer');
            const justificationText = q.justification || "No hay justificación específica en los datos proporcionados.";
            resultItem.innerHTML = `
                <p><strong>Pregunta ${index + 1} (Incorrecta):</strong> ${q.question}</p>
                ${selectedOption ?
                    `<p>Tu Respuesta: <mark>${selectedOption}</mark></p>` : 
                    '<p>No Respondiste.</p>'}
                <p>Respuesta Correcta: <mark>${q.answer}</mark></p>
                <div class="justification-text">
                    <p><strong>Justificación:</strong> ${justificationText}</p>
                </div>
            `;
        }

        detailedResults.appendChild(resultItem);
    });

    const finalScore = Math.round((correctCount / questions.length) * 100);
    document.getElementById('result-score').textContent = `Puntaje Final: ${finalScore} de 100 (${correctCount} de ${questions.length} correctas)`;

    // Guardar el intento incluyendo las respuestas
    const attemptKey = `${currentModule}_${Date.now()}`;
    attempts[attemptKey] = { 
        module: currentModule, 
        score: finalScore, 
        timestamp: new Date().toLocaleString(), 
        timeExpired: timeExpired,
        answers: userAnswers // <--- ¡Guardamos las respuestas!
    };
    saveAttempts();
    updateAttemptHistoryDisplay(); // Actualiza el historial en la vista

    document.getElementById('exam-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
}

/**
 * Muestra los resultados detallados de un intento guardado.
 * @param {string} attemptKey - La clave del intento guardado en 'attempts'.
 */
function viewAttemptResults(attemptKey) {
    const attempt = attempts[attemptKey];
    if (!attempt || !attempt.answers || !examQuestions[attempt.module]) {
        alert("No se pudo cargar la información detallada de este intento. Faltan datos.");
        return;
    }

    const questions = examQuestions[attempt.module];
    const userAnswers = attempt.answers;
    let correctCount = 0;
    const detailedResults = document.getElementById('detailed-results');
    detailedResults.innerHTML = '';

    // Ocultar selección/examen y mostrar resultados
    document.getElementById('attempt-info').style.display = 'none';
    document.getElementById('exam-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';

    // Rerenderizar la lógica de corrección basada en las respuestas guardadas
    questions.forEach((q, index) => {
        const selectedOption = userAnswers[`q${q.id}`];
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';

        let isCorrect = (selectedOption === q.answer);

        if (isCorrect) {
            correctCount++;
            resultItem.classList.add('correct-answer');
            resultItem.innerHTML = `
                <p><strong>Pregunta ${index + 1} (Correcta):</strong> ${q.question}</p>
                <p>Respuesta Seleccionada: <strong>${q.answer}</strong></p>
            `;
        } else {
            resultItem.classList.add('incorrect-answer');
            const justificationText = q.justification || "No hay justificación específica en los datos proporcionados.";
            resultItem.innerHTML = `
                <p><strong>Pregunta ${index + 1} (Incorrecta):</strong> ${q.question}</p>
                ${selectedOption ?
                    `<p>Tu Respuesta: <mark>${selectedOption}</mark></p>` : 
                    '<p>No Respondiste.</p>'}
                <p>Respuesta Correcta: <mark>${q.answer}</mark></p>
                <div class="justification-text">
                    <p><strong>Justificación:</strong> ${justificationText}</p>
                </div>
            `;
        }

        detailedResults.appendChild(resultItem);
    });

    // Actualizar el marcador del intento
    document.getElementById('result-score').textContent = 
        `Puntaje Final del Intento Guardado (${attempt.timestamp}): ${attempt.score} de 100 (${correctCount} de ${questions.length} correctas)`;
    
    // Ocultamos el título del módulo en el examen si es necesario
    document.getElementById('module-title').textContent = '';
    
    // Aseguramos que el botón de reinicio regrese a la pantalla principal de selección
    const restartButton = document.querySelector('#results-container button');
    restartButton.textContent = "Volver a la Selección de Módulo";
    restartButton.onclick = restartAttempts;
}


function restartAttempts() {
    document.getElementById('results-container').style.display = 'none';
    document.getElementById('attempt-info').style.display = 'block';
    
    // Restablece el botón de la pantalla de resultados a su texto original
    const restartButton = document.querySelector('#results-container button');
    restartButton.textContent = "Probar Más Intentos";
    restartButton.onclick = restartAttempts;
}

// Inicializa la vista mostrando la información de intentos al cargar
document.addEventListener('DOMContentLoaded', () => {
    updateAttemptHistoryDisplay();
    // Muestra la sección de examen por defecto
    showSection('exam-section'); 
});