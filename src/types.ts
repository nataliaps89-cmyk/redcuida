/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  relation: string; // e.g. "Madre de Sofía (15 años)" o "Director de Colegio"
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  factor: string; // e.g., "Comunicación Familiar", "Límites de Pantalla", etc.
  description: string;
  options: {
    value: number;
    text: string;
  }[];
}

export interface QuizResult {
  score: number;
  maxScore: number;
  level: 'Fortalecido' | 'En Crecimiento' | 'Requiere Atención';
  feedback: string;
  colorClass: string;
  bgClass: string;
}
