/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, Testimonial, BenefitItem, QuizQuestion } from './types';

export const PROBLEMS = [
  {
    id: "prob1",
    quote: "«En nuestro colegio vemos que los estudiantes descuidan el sueño, abusan de las pantallas y carecen de hábitos de autocuidado, pero no encontramos talleres prácticos que logren conectar con ellos de forma real».",
    source: "Director de Establecimiento Educacional"
  },
  {
    id: "prob2",
    quote: "«Quiero que mi hijo/a aprenda a alimentarse bien, regule su tiempo de juego online y sepa cuidar su salud mental, pero cada vez que intento hablar de hábitos saludables terminamos discutiendo».",
    source: "Madre de un adolescente de 13 años"
  },
  {
    id: "prob3",
    quote: "«Como docentes nos faltan herramientas pedagógicas y respaldo técnico para abordar la salud sexual, la prevención de conductas de riesgo y la convivencia escolar en el aula según las normativas vigentes».",
    source: "Profesora y Jefa de UTP"
  }
];

export const SERVICE_STEPS = [
  {
    step: "01",
    title: "Evaluación Diagnóstica Inicial",
    description: "Analizamos de forma sistemática los hábitos de vida, factores protectores y necesidades específicas del adolescente, grupo o comunidad escolar antes de iniciar."
  },
  {
    step: "02",
    title: "Planificación del Paquete Educativo",
    description: "Diseñamos un ciclo de talleres o cursos estructurado en paquetes dinámicos, adaptado perfectamente al público objetivo (adolescentes, padres o docentes)."
  },
  {
    step: "03",
    title: "Talleres Basados en Evidencia",
    description: "Ejecutamos sesiones teórico-prácticas centradas en hábitos saludables para el adolescente, facilitando el aprendizaje activo y la construcción de bienestar."
  }
];

// Focus topics based on pediatric and adolescent health guidelines
export const MINSAL_TOPICS = [
  {
    id: "topic1",
    title: "Alimentación Saludable y Actividad Física",
    description: "Fomento de la nutrición equilibrada y el movimiento activo frente a las altas tasas de sedentarismo escolar.",
    highlights: ["Hábitos alimenticios conscientes", "Prevención de malnutrición", "Pautas de actividad diaria"]
  },
  {
    id: "topic2",
    title: "Sueño, Descanso y Ritmos Circadianos",
    description: "Higiene de sueño para contrarrestar el cansancio acumulado, mejorando la concentración académica y el ánimo.",
    highlights: ["Rutinas de desconexión", "Neurobiología del descanso adolescente", "Ambiente idóneo de sueño"]
  },
  {
    id: "topic3",
    title: "Salud Mental, Autoestima y Afectividad",
    description: "Regulación emocional, prevención de la ansiedad, fortalecimiento de la autoestima y autoimagen positiva.",
    highlights: ["Gestión emocional", "Prevención del estrés escolar", "Acompañamiento en crisis de desarrollo"]
  },
  {
    id: "topic4",
    title: "Bienestar Digital y Uso de Pantallas",
    description: "Estrategias para un uso seguro, consciente y balanceado de redes sociales, videojuegos y smartphones.",
    highlights: ["Límites saludables de tiempo", "Prevención de ciberacoso", "Fomento del ocio sin pantallas"]
  },
  {
    id: "topic5",
    title: "Prevención de Conductas de Riesgo",
    description: "Educación preventiva y toma de decisiones frente al consumo precoz de alcohol, tabaco, vapeo y otras sustancias.",
    highlights: ["Factores de protección", "Habilidades de asertividad", "Resolución de presión de grupo"]
  },
  {
    id: "topic6",
    title: "Convivencia Escolar y Relaciones Sanas",
    description: "Promoción de relaciones afectivas protectoras, comunicación asertiva y resolución pacífica de conflictos.",
    highlights: ["Prevención de bullying y violencia", "Estilos de comunicación sanos", "Vínculos interpersonales seguros"]
  }
];

// Educational Packages offered
export const EDUCATIONAL_PACKAGES = [
  {
    id: "pkg-individual",
    title: "Paquete de Acompañamiento Individual / Familiar",
    target: "Adolescentes y sus padres o cuidadores principales",
    description: "Mentoría y educación personalizada de hábitos. Ideal para familias que requieren un abordaje a medida frente a desórdenes de sueño, alimentación, comunicación o exceso de pantallas.",
    includes: [
      "Evaluación Diagnóstica Inicial personalizada",
      "4 Sesiones individuales teórico-prácticas (online o presencial)",
      "Pautas escritas de hábitos y guías de salud del adolescente",
      "Canal de resolución de dudas semanales"
    ],
    cta: "Consultar Paquete Familiar"
  },
  {
    id: "pkg-grupal",
    title: "Paquete de Talleres Grupales para Adolescentes",
    target: "Cursos, grupos juveniles, academias o talleres extracurriculares",
    description: "Ciclos de talleres lúdicos y participativos adaptados a la edad. Fomentan el aprendizaje mutuo, el autocuidado y la construcción de hábitos saludables en comunidad.",
    includes: [
      "Evaluación diagnóstica grupal de necesidades",
      "Talleres interactivos sobre bienestar digital, sueño y alimentación",
      "Dinámicas grupales y material pedagógico de apoyo",
      "Informe final de participación y factores de protección"
    ],
    cta: "Cotizar Talleres Grupales"
  },
  {
    id: "pkg-escolar",
    title: "Paquete para Comunidades Educativas y Organizaciones",
    target: "Establecimientos escolares, docentes, asistentes de la educación y centros de padres",
    description: "Programa institucional integral de capacitación y educación en salud escolar. Entrega herramientas de intervención, prevención y promoción basadas en la normativa vigente.",
    includes: [
      "Evaluación y diagnóstico del clima y hábitos del establecimiento",
      "Cursos de capacitación certificados para docentes y asistentes de la educación",
      "Charlas formativas y de sensibilización para padres y apoderados",
      "Manual de implementación de guías de hábitos para el colegio"
    ],
    cta: "Solicitar Propuesta Institucional"
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: "ben1",
    title: "Hábitos Saludables Sostenibles en el Tiempo",
    description: "Tus adolescentes aprenderán a autogestionar su alimentación, optimizar su sueño y regular el uso de pantallas de manera consciente, no por obligación.",
    badge: "Estilo de Vida"
  },
  {
    id: "ben2",
    title: "Cumplimiento y Alineación Curricular",
    description: "Los colegios integran programas con validez técnica oficial, cumpliendo con los estándares de promoción de salud y los objetivos de aprendizaje transversal del Ministerio de Educación.",
    badge: "Validez Técnica"
  },
  {
    id: "ben3",
    title: "Capacitación Docente y de Asistentes",
    description: "El equipo escolar adquiere competencias clave para detectar riesgos de salud mental, mediar conflictos y promover la convivencia escolar con seguridad clínica.",
    badge: "Fortalecimiento Docente"
  },
  {
    id: "ben4",
    title: "Prevención Proactiva de Crisis Familiares",
    description: "Los padres y cuidadores aprenden a anticiparse a los cambios de la adolescencia, sustituyendo los gritos por pautas de comunicación que fortalecen el vínculo.",
    badge: "Paz Familiar"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test1",
    name: "Carolina Aguilera",
    role: "Madre de Matías (15 años)",
    relation: "Paquete Individual Familiar",
    text: "«Matías pasaba toda la noche jugando y sus hábitos alimenticios estaban muy desordenados. Con los talleres de Natalia aprendió sobre sus ritmos de sueño y nutrición desde un punto de vista científico y cercano. Nos ayudó muchísimo la evaluación diagnóstica inicial para entender dónde estábamos fallando».",
    rating: 5
  },
  {
    id: "test2",
    name: "Héctor Valenzuela",
    role: "Director de Colegio Técnico",
    relation: "Paquete para Comunidad Educativa",
    text: "«Contratamos el paquete institucional para capacitar a nuestros docentes en hábitos saludables y realizar talleres grupales de bienestar digital con los alumnos de enseñanza media. El impacto en la convivencia escolar y la participación de los apoderados superó con creces nuestras expectativas».",
    rating: 5
  }
];

export const EXPERT_CREDENTIALS = {
  name: "Natalia P.",
  title: "Enfermera Docente Universitaria • Especialista en Salud Mental Infantojuvenil",
  specialties: [
    "Experta en Promoción de la Salud, Educación Escolar y Hábitos Saludables del Adolescente",
    "Docente de Educación Superior con amplia experiencia en capacitación de comunidades educativas",
    "Diseñadora de Programas Educativos Grupales e Individuales basados en Evidencia Científica"
  ],
  bio: "Como enfermera especialista en salud mental infantojuvenil y docente universitaria, asumo la educación para la salud como la herramienta de transformación más potente. Trabajo acompañando a adolescentes, familias y comunidades educativas a construir hábitos saludables en el día a día. Mi enfoque se basa en guías y pautas de salud integrales, traduciendo la evidencia clínica en acciones sencillas, dinámicas y profundamente humanas."
};

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "¿En qué consisten exactamente los talleres y guías de salud del adolescente?",
    answer: "Son pautas de prevención desarrolladas por especialistas de salud para acompañar el desarrollo sano de personas entre 10 y 19 años. Contemplan temas críticos de educación para la salud como alimentación, actividad física, higiene de sueño, salud bucal, prevención de consumo de sustancias, bienestar digital, salud sexual y afectividad. Nuestros programas cubren todos estos temas con un enfoque pedagógico adaptado a la realidad de las familias y establecimientos."
  },
  {
    id: "faq2",
    question: "¿Cómo se realiza la Evaluación Diagnóstica Inicial?",
    answer: "Es un proceso amigable e interactivo de recolección de información. Para familias individuales, consiste en una pauta de hábitos diarios y factores protectores. Para colegios o grupos, diseñamos un cuestionario digital confidencial para el curso o nivel. Esto nos permite identificar de inmediato qué áreas (como el sueño, la alimentación o las pantallas) requieren priorización en el paquete de talleres."
  },
  {
    id: "faq3",
    question: "¿A quiénes están dirigidos los talleres y cursos de hábitos saludables?",
    answer: "Nuestros programas están estructurados de forma modular para tres públicos clave: 1) Adolescentes (en sesiones individuales o talleres grupales/cursos de aula); 2) Padres, madres o cuidadores principales (orientados a pautas de crianza respetuosa, límites y comunicación); y 3) Comunidades escolares (docentes, asistentes de la educación y profesionales de apoyo escolar que requieren capacitación técnica)."
  },
  {
    id: "faq4",
    question: "¿Ofrecen modalidades online y presenciales?",
    answer: "Sí. Ofrecemos cobertura online para todo el país (ideal para paquetes familiares individuales y mentorías grupales). Las actividades presenciales y capacitaciones intensivas a colegios u organizaciones de la comunidad escolar están sujetas a disponibilidad geográfica y coordinación previa."
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cómo es el hábito de alimentación y actividad física diaria?",
    factor: "Alimentación y Ejercicio",
    description: "Evaluación sobre el consumo diario de agua, frutas/verduras y la realización de actividad física moderada.",
    options: [
      { value: 1, text: "Sedentarismo alto, consumo frecuente de ultraprocesados y bebidas azucaradas." },
      { value: 3, text: "Hábitos irregulares, realiza ejercicio solo en clases de educación física y come sano a veces." },
      { value: 5, text: "Alimentación equilibrada diaria y realiza al menos 60 minutos de movimiento activo regular." }
    ]
  },
  {
    id: 2,
    question: "¿Cómo calificarías la calidad del sueño y descanso del adolescente?",
    factor: "Higiene del Sueño",
    description: "Horas de sueño recomendadas (8-10 horas en adolescentes) y presencia de insomnio por pantallas.",
    options: [
      { value: 1, text: "Duerme menos de 6 horas, despierta muy cansado y se queda con el celular en la cama." },
      { value: 3, text: "Duerme entre 7 y 8 horas pero con interrupciones constantes y le cuesta levantarse." },
      { value: 5, text: "Duerme de 8 a 10 horas estables, con rutina de apagado de pantallas previa y descanso reparador." }
    ]
  },
  {
    id: 3,
    question: "¿Cómo se regula el tiempo de uso de pantallas, redes sociales o videojuegos?",
    factor: "Bienestar Digital",
    description: "Uso consciente de la tecnología evitando la interferencia en las tareas escolares y familiares.",
    options: [
      { value: 1, text: "Conexión ilimitada, se aísla de las comidas familiares o descuida deberes por estar conectado." },
      { value: 3, text: "Pasa muchas horas conectado pero respeta de mala gana cuando se le exige apagar el dispositivo." },
      { value: 5, text: "Utiliza las pantallas con límites acordados, priorizando el ocio activo y el diálogo familiar." }
    ]
  },
  {
    id: 4,
    question: "¿Existe una base de confianza para conversar sobre afectividad, emociones y conductas de riesgo?",
    factor: "Afectividad y Prevención",
    description: "Acompañamiento seguro en la prevención de consumo de sustancias y el desarrollo de la salud sexual.",
    options: [
      { value: 1, text: "No se habla de estos temas; hay evitación mutua, tabúes o respuestas agresivas." },
      { value: 3, text: "Hablamos superficialmente o solo cuando ocurre algún incidente en el colegio." },
      { value: 5, text: "Conversaciones fluidas, honestas y sin prejuicios, basadas en información científica y de apoyo." }
    ]
  },
  {
    id: 5,
    question: "¿Cómo se abordan los conflictos interpersonales y la convivencia con sus pares?",
    factor: "Convivencia y Relaciones",
    description: "Capacidad para resolver discrepancias de forma asertiva y establecer relaciones sanas y libres de violencia.",
    options: [
      { value: 1, text: "Respuestas violentas, acoso, aislamiento social persistente o relaciones de dependencia dañinas." },
      { value: 3, text: "Le cuesta expresar lo que siente, se calla los problemas o recurre a gritos esporádicos." },
      { value: 5, text: "Resuelve conflictos dialogando, establece límites personales y mantiene vínculos sanos y protectores." }
    ]
  }
];
