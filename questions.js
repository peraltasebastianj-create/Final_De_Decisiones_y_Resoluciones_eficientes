const examQuestions = {
    "modulo1": [
        // Preguntas del Módulo 1 (Toma de Decisiones Estratégicas)
        {
            id: 1,
            question: "¿Cuándo se puede decir que se es eficaz en una toma de decisiones?",
            options: ["Tiene más costo y, por ende, más beneficios.", "Logra resolver la situación problemática.", "Logra utilizar todos los recursos.", "Logra anticiparse al problema."],
            answer: "Logra resolver la situación problemática.",
            justification: "Serás eficaz en la toma de decisiones cuando hayas resuelto la situación problemática o hayas logrado cumplir con tus expectativas [1-3]. La eficacia hace foco en los fines [4, 5]."
        },
        {
            id: 2,
            question: "La toma de decisiones reactiva brinda un mayor éxito en la solución, ya que permitirá tomar una decisión basándose en hechos que ya ocurrieron.",
            options: ["Verdadero.", "Falso."],
            answer: "Falso.",
            justification: "La toma de decisiones reactiva genera un mayor compromiso y una mayor presión sobre aquel que debe tomar la decisión, fundamentalmente por la caducidad de la urgencia de su resolución [6, 7]. Lo ideal es trabajar en el ámbito de la proactividad [8]."
        },
        {
            id: 3,
            question: "José debe decidir el lanzamiento de un nuevo producto para el año próximo en una firma financiera. ¿Qué tipo de decisión está afrontando?",
            options: ["Operativa.", "Funcional.", "Estructural.", "Estratégica."],
            answer: "Estratégica.",
            justification: "José se encuentra ante una decisión estratégica, ya que busca lograr los objetivos organizacionales en términos de mediano y largo plazo [9-12]. Las decisiones estratégicas tienen elevado impacto [13]."
        },
        {
            id: 4,
            question: "La decisión de Débora de organizar su espacio de estudio para un doctorado, optimizando su tiempo, se encuentra en el Cuadrante 2 de la matriz de Covey.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "El Cuadrante 2 se refiere a lo importante y no urgente, lo cual permite tomar decisiones con tiempo a través de una debida planificación de las decisiones futuras [14-16]."
        },
        {
            id: 5,
            question: "El costo de oportunidad mide el costo asociado a no elegir un camino alternativo al seleccionado.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "El costo de oportunidad intenta medir el costo asociado a no elegir un camino alternativo al que ya seleccionamos, permitiendo balances entre costos y beneficios [17, 18]."
        },
        {
            id: 6,
            question: "Roberto, jefe de producción, debe decidir a quién poner en reemplazo de un operario ausente. Esta es una decisión:",
            options: ["Estratégica.", "Táctica.", "Funcional.", "Operativa."],
            answer: "Operativa.",
            justification: "Se trata de una decisión que se toma con mayor frecuencia referida a la actividad normal y habitual de la gestión diaria [19-22]."
        },
        {
            id: 7,
            question: "Una persona que toma sus decisiones sin planificar oportunamente estará fomentando el paradigma de:",
            options: ["Eficiencia.", "Costo de Oportunidad.", "Urgencia.", "Importancia."],
            answer: "Urgencia.",
            justification: "Una persona que prefiere tomar decisiones de manera reactiva estará fomentando las situaciones urgentes [23-25]."
        },
        {
            id: 8,
            question: "Al incluir al equipo de trabajo en la decisión de modificar una operativa, Luis obtendrá un beneficio secundario clave: la facilidad de Implementación.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "Hacer parte al equipo implementador facilita la implementación de los cambios definidos, logrando que el equipo asuma el desafío como propio [26-29]."
        },
        {
            id: 9,
            question: "El cuadrante 3 de la matriz de Covey (Urgente/No Importante) incluye tareas que deberían ser:",
            options: ["Planificadas.", "Ejecutadas ya.", "Eliminadas.", "Delegadas."],
            answer: "Delegadas.",
            justification: "Las tareas en el C3 son urgentes pero no importantes, y generalmente se pueden delegar, como el pago de un impuesto que vence mañana [16, 30-32]."
        },
        {
            id: 10,
            question: "Serás productivo si logras el máximo rendimiento de los recursos utilizados, haciendo foco en los medios.",
            options: ["Verdadero.", "Falso."],
            answer: "Falso.",
            justification: "La productividad se logra con el óptimo equilibrio costo-beneficio [33, 34]. La definición provista (máximo rendimiento de los recursos, foco en los medios) corresponde a la eficiencia [4, 5]."
        }
        // ... (Faltan 20 preguntas adicionales del Módulo 1 en el PDF)
    ],
    "modulo2": [
        // Preguntas del Módulo 2 (Resolución de Problemas)
        {
            id: 11,
            question: "Resolver problemas busca retomar el camino del cumplimiento de objetivos.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "La resolución de problemas intenta ajustar la brecha entre lo que se espera (objetivo) y lo que realmente sucede por debajo de lo esperado, es decir, situaciones que dificultan el cumplimiento normal de los objetivos [35-37]."
        },
        {
            id: 12,
            question: "Según la analogía del iceberg, el porcentaje de las causas de un problema que suelen estar ocultas es:",
            options: ["10%", "20%", "50%", "90%."],
            answer: "90%.",
            justification: "Solo se ve el 10% de la totalidad de un problema, mientras que el 90% de las causas suelen estar ocultas [38-40]."
        },
        {
            id: 13,
            question: "Una encargada de administración no logra que los empleados ingresen en horario ya que hace años lo hacen con demoras. ¿Qué tipo de problema tiene?",
            options: ["Laboral de planificación.", "Laboral de estructura.", "Laboral de cultura.", "Laboral de asignación de recursos."],
            answer: "Laboral de cultura.",
            justification: "Los usos y costumbres arraigados que se ven como naturales, como ingresar con demoras por años, constituyen un problema de cultura organizacional [41- 43]."
        },
        {
            id: 14,
            question: "Paula debe monitorear y controlar la correcta ejecución de una solución para evitar que los conflictos reaparezcan. ¿Qué etapa del ciclo de vida aplica?",
            options: ["Análisis de información.", "Identificación de un problema.", "Recolección de información.", "Control de la solución."],
            answer: "Control de la solución.",
            justification: "Paula debe monitorear y controlar la correcta ejecución de la solución para evaluar la integridad del proceso y evitar que los problemas reaparezcan, que es la etapa de Control de la solución [44-47]."
        },
        {
            id: 15,
            question: "Los elementos de un problema incluyen personas, contexto, incógnitas, datos, restricciones, hipótesis, opciones y soluciones.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "Estos son todos los elementos que componen un problema, incluyendo personas, contexto, incógnitas, datos o hechos, restricciones, hipótesis, opciones o cursos de acción posibles, y soluciones [48-50]."
        },
        {
            id: 16,
            question: "¿Cuáles son las 3 (tres) primeras etapas del ciclo de vida de resolución de un problema?",
            options: ["Identificación, análisis y ejecución.", "Identificación, recolección y control.", "Identificación, recolección y análisis.", "Análisis, elección y control."],
            answer: "Identificación, recolección y análisis.",
            justification: "Las tres primeras etapas del ciclo de vida de resolución de un problema son: identificación, recolección de información y análisis del problema [51-54]."
        },
        {
            id: 17,
            question: "Para iniciar la resolución de una situación, es suficiente con recolectar datos aislados de diferentes evaluaciones.",
            options: ["Verdadero.", "Falso."],
            answer: "Falso.",
            justification: "La información se trata de un conjunto de datos ordenados y/o combinados. La sola utilización de datos aislados (datos primitivos) es insuficiente y podría llevar a conclusiones incorrectas [55-57]."
        },
        {
            id: 18,
            question: "La certidumbre es una condición ideal que surge cuando se tiene total control y certeza respecto de los resultados de cada curso de acción.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "La certidumbre es una condición ideal que surge cuando una persona se encuentra plenamente informada, simplificando y facilitando el proceso de toma de decisiones [58-60]."
        },
        {
            id: 19,
            question: "La metodología de las 5S (Clasificar, Organizar, Limpiar, Mantener y Respetar) es una técnica de gestión de calidad para evitar la mayor cantidad de problemas posibles.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "Las 5S buscan mantener un mejor entorno de trabajo a través de ambientes más organizados, seguros y limpios [61-63]."
        },
        {
            id: 20,
            question: "Si ya se detectó la causa principal de un problema (ej. dedicar poco tiempo a la lectura), la etapa del ciclo de vida a aplicar es la Ejecución de la solución.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "Al tener la causa presente, se debe poner en práctica la solución, que corresponde a la etapa de Ejecución de la solución [35, 46]."
        }
        // ... (Faltan 20 preguntas adicionales del Módulo 2 en el PDF)
    ],
    "modulo3": [
        // Preguntas del Módulo 3 (Proceso de Toma de Decisiones Racional)
        {
            id: 21,
            question: "Para validar las hipótesis planteadas durante el análisis de la información, se debe recurrir principalmente a información cualitativa.",
            options: ["Verdadero.", "Falso."],
            answer: "Falso.",
            justification: "Para validar las hipótesis debés apoyarte en información **cuantitativa** (cierta, medible y trazable) [64-69]. La información cualitativa resulta subjetiva y depende de las opiniones [70]."
        },
        {
            id: 22,
            question: "La matriz de priorización de soluciones es una herramienta adecuada para la etapa de recolección de información.",
            options: ["Verdadero.", "Falso."],
            answer: "Falso.",
            justification: "La matriz de priorización de soluciones es adecuada para la etapa de **selección de alternativas** de solución [71-75]."
        },
        {
            id: 23,
            question: "Una de las tres metodologías sugeridas para la recolección de información de manera colaborativa es la entrevista.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "La entrevista es una de las tres metodologías sugeridas para la recolección de información, junto con el método de los 5 porqués y el diagrama de Ishikawa [66, 76-78]."
        },
        {
            id: 24,
            question: "La técnica Brainwriting (6-3-5) permite a 6 personas aportar 3 ideas cada 5 minutos, generando aproximadamente 108 ideas en 30 minutos.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "El Brainwriting o Técnica 6-3-5 consiste en la generación masiva de ideas (aproximadamente 108) con la participación de 6 personas que aportan 3 ideas cada 5 minutos [79-81]."
        },
        {
            id: 25,
            question: "El Diagrama de Ishikawa (Espina de Pescado) se utiliza para planificar tareas en la etapa de ejecución.",
            options: ["Verdadero.", "Falso."],
            answer: "Falso.",
            justification: "El Diagrama de Ishikawa se utiliza en la etapa de **recolección/análisis** para detallar el problema (efecto) y agrupar sus causas en categorías [82-84]. El Diagrama de Gantt se utiliza para la planificación en la ejecución [85]."
        },
        {
            id: 26,
            question: "Si se necesita comunicar claramente las expectativas de un proyecto y erradicar dudas al inicio de la implementación, se aconseja implementar un Kick off.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "Una reunión de lanzamiento (Kick off) es oportuna para que todos los involucrados comprendan el proceso y erradiquen dudas antes de la ejecución [86, 87]."
        },
        {
            id: 27,
            question: "El gráfico de líneas de tendencias debe utilizarse si se necesita analizar la participación relativa de las variables.",
            options: ["Verdadero.", "Falso."],
            answer: "Falso.",
            justification: "El gráfico de líneas de tendencias se utiliza para el análisis de la **evolución de las variables en el tiempo** [67, 88-90]. El gráfico circular evalúa la participación relativa de las variables [90, 91]."
        },
        {
            id: 28,
            question: "La asignación de responsables por áreas o entregables es fundamental en la etapa de Ejecución de la decisión.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "Designar responsables es crucial para que todos asuman la implementación como propia y para gestionar grandes implementaciones [92-94]."
        },
        {
            id: 29,
            question: "Los criterios a considerar para la evaluación de alternativas deben ser ponderados, asignando un mayor factor a lo más relevante para el contexto dado (ej. la inversión en crisis económica).",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "Es importante asignar pesos relativos (ponderación) a los criterios, partiendo del 100% para el criterio más importante en el contexto de situación dado, como el costo de la inversión [95-97]."
        },
        {
            id: 30,
            question: "Para lograr objetivos que sean medibles y realistas se deben definir como Objetivos SMART.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "Los objetivos SMART son: Specific (específico), Measurable (medibles), Attainable (alcanzables), Realistic (realistas) y Time (tiempo) [98]."
        }
    ],
    "modulo4": [
        // Preguntas del Módulo 4 (Sostenibilidad y Liderazgo)
        {
            id: 31,
            question: "La 'Zona de Peligro' del ciclo emocional del cambio corresponde a la fase de Negación (Optimismo Desinformado).",
            options: ["Verdadero.", "Falso."],
            answer: "Falso.",
            justification: "La 'Zona de Peligro' (donde el 90% de los proyectos de cambio finaliza) corresponde a la fase 2: Malestar y Resistencia, caracterizada por la Pérdida o Duda [99]."
        },
        {
            id: 32,
            question: "La metodología 10-10-10 propone analizar el impacto de una decisión en 10 días, 10 semanas y 10 meses.",
            options: ["Verdadero.", "Falso."],
            answer: "Falso.",
            justification: "La regla 10-10-10 analiza el impacto en los próximos **diez minutos, los siguientes diez meses y los futuros diez años** [100, 101]."
        },
        {
            id: 33,
            question: "El Design Thinking es una metodología adecuada para generar ideas de negocio centradas en el usuario (cliente).",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "El Design Thinking tiene como objetivo generar ideas innovadoras a partir de los usuarios y sus inquietudes, trabajando en soluciones orientadas a una necesidad a través de las etapas: Empatizá, Definí, Ideá, Prototipá, Testeá [102-104]."
        },
        {
            id: 34,
            question: "La matriz FODA permite analizar los factores externos (Oportunidades y Amenazas) y los internos (Fortalezas y Debilidades) de la organización.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "La matriz FODA (Fortalezas, Oportunidades, Debilidades, Amenazas) obliga a pensar en aspectos positivos y negativos, tanto internos como externos [105- 108]."
        },
        {
            id: 35,
            question: "En la resolución de problemas, un líder debe concentrarse en distinguir las emociones de los hechos observables.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "Una de las actitudes de liderazgo es Distinguir las emociones de las opiniones justificadas a través de hechos observables, para no desanimarse [109, 110]."
        },
        {
            id: 36,
            question: "El Mapa de Actores es la herramienta más oportuna para un líder que necesita una adecuada lectura de los involucrados en una causa de gran trascendencia pública.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "El Mapa de Actores permite analizar quién o quiénes se encuentran involucrados e interesados en el proceso, siendo fundamental para una adecuada lectura [105, 108, 111, 112]."
        },
        {
            id: 37,
            question: "Una de las 8 Disciplinas (8D) para la resolución de problemas es Cerrar el problema y reconocer a quienes colaboraron en el proceso.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "Cerrar el problema y reconocer a quienes colaboraron es la octava disciplina de la metodología 8D, que busca soluciones permanentes [113-115]."
        },
        {
            id: 38,
            question: "Las 5S de calidad (Clasificar, Organizar, Limpiar, Mantener y Respetar) ayudan a evitar que los problemas vuelvan a aparecer (recurrencias) a través de mejores ambientes de trabajo.",
            options: ["Verdadero.", "Falso."],
            answer: "Verdadero.",
            justification: "Apoyarse en las 5S colaborará con la prevención de recurrencias de problemas, ya que buscan soluciones sostenibles [61, 63, 116]."
        },
        {
            id: 39,
            question: "El sombrero BLANCO en la técnica de los Seis Sombreros se relaciona con la creatividad y la imaginación.",
            options: ["Verdadero.", "Falso."],
            answer: "Falso.",
            justification: "El sombrero **Verde** es el de la creatividad [117]. El sombrero **Blanco** es el de lo concreto: cada pensamiento debe ser fundamentado y validado con datos reales y hechos observables [117, 118]."
        },
        {
            id: 40,
            question: "Para lograr una cultura colaborativa, es fundamental que el líder evite delegar y se ensimisme en la resolución, para que el equipo vea su fortaleza.",
            options: ["Verdadero.", "Falso."],
            answer: "Falso.",
            justification: "Una cultura colaborativa incrementa la confianza y la motivación [119]. El líder debe **escuchar, no ensimismarse**, y buscar la participación de los equipos [29, 110, 120]."
        }
        // ... (Faltan 20 preguntas adicionales del Módulo 4 en el PDF)
    ]
};