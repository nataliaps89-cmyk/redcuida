/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS } from '../data';
import { QuizResult } from '../types';
import { 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  ArrowRight, 
  Award, 
  TrendingUp, 
  AlertCircle,
  Sparkles,
  Download
} from 'lucide-react';

interface ProtectiveFactorsQuizProps {
  onOpenLeadMagnet: (quizResult?: QuizResult) => void;
}

export default function ProtectiveFactorsQuiz({ onOpenLeadMagnet }: ProtectiveFactorsQuizProps) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIdx];
  const isAnswered = answers[currentQuestion.id] !== undefined;
  const progressPercent = Math.round(((currentQuestionIdx) / QUIZ_QUESTIONS.length) * 100);

  const handleSelectOption = (value: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (currentQuestionIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx(prev => prev - 1);
    }
  };

  const calculateResult = (): QuizResult => {
    const totalScore = (Object.values(answers) as number[]).reduce((sum: number, val: number) => sum + val, 0);
    const maxScore = QUIZ_QUESTIONS.length * 5;

    if (totalScore >= 20) {
      return {
        score: totalScore,
        maxScore,
        level: 'Fortalecido',
        feedback: '¡Excelente trabajo! Tu entorno familiar o educativo cuenta con sólidos factores protectores. Existe una base fuerte de comunicación, límites y apoyo emocional. Aun así, la adolescencia es dinámica; la guía te ayudará a mantener y potenciar estas fortalezas frente a los nuevos desafíos.',
        colorClass: 'text-brand-green bg-brand-green-soft border-brand-green-light',
        bgClass: 'from-brand-green-soft to-white'
      };
    } else if (totalScore >= 12) {
      return {
        score: totalScore,
        maxScore,
        level: 'En Crecimiento',
        feedback: 'Tus factores protectores están bien encaminados, pero existen áreas con margen de mejora importante (como la negociación de límites, el bienestar digital o la expresión emocional). Pequeñas acciones y pautas basadas en evidencia marcarán un gran cambio para prevenir riesgos futuros.',
        colorClass: 'text-brand-orange bg-brand-sand border-brand-orange/20',
        bgClass: 'from-brand-sand to-white'
      };
    } else {
      return {
        score: totalScore,
        maxScore,
        level: 'Requiere Atención',
        feedback: 'Los factores protectores actuales se encuentran debilitados, lo que aumenta la vulnerabilidad frente a riesgos típicos de la adolescencia. No te alarmes: este resultado es una oportunidad para actuar de forma preventiva y proactiva. La salud se aprende y podemos construir un plan para fortalecer estos pilares.',
        colorClass: 'text-red-600 bg-red-50 border-red-100',
        bgClass: 'from-red-50 to-white'
      };
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentQuestionIdx(0);
    setShowResult(false);
  };

  const result = showResult ? calculateResult() : null;

  return (
    <div id="quiz-assessment" className="w-full max-w-3xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
      {/* Header of the Quiz block - LIGHT THEME */}
      <div className="bg-brand-green-light px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-brand-green/10">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-green/15 text-brand-green border border-brand-green/20 mb-2">
            <ShieldCheck className="w-3.5 h-3.5" /> Autoevaluación Gratuita
          </span>
          <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900">
            Evaluador de Factores Protectores
          </h3>
          <p className="text-slate-600 text-sm mt-1">
            Detecta en 5 preguntas el nivel de resiliencia de tu adolescente o entorno.
          </p>
        </div>
        {!showResult && (
          <div className="flex items-center gap-2 bg-white border border-brand-green/20 px-3 py-1.5 rounded-xl self-start md:self-auto shadow-sm">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Progreso</span>
            <span className="text-sm font-bold text-brand-green font-mono">
              {currentQuestionIdx + 1} / {QUIZ_QUESTIONS.length}
            </span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {!showResult && (
        <div className="h-1.5 w-full bg-slate-100">
          <motion.div 
            className="h-full bg-brand-green"
            initial={{ width: '0%' }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col min-h-[300px]"
            >
              {/* Question Metadata */}
              <div className="mb-4">
                <span className="text-xs font-semibold text-brand-green uppercase tracking-wider bg-brand-green-light px-2.5 py-1 rounded-lg">
                  Factor: {currentQuestion.factor}
                </span>
              </div>

              {/* Question Text */}
              <h4 className="text-lg md:text-xl font-bold font-display text-slate-900 mb-2 leading-snug">
                {currentQuestion.question}
              </h4>
              <p className="text-sm text-slate-500 mb-6">
                {currentQuestion.description}
              </p>

              {/* Options */}
              <div className="space-y-3 my-auto">
                {currentQuestion.options.map((option) => {
                  const isSelected = answers[currentQuestion.id] === option.value;
                  return (
                    <button
                      key={option.value}
                      id={`quiz-q-${currentQuestion.id}-opt-${option.value}`}
                      onClick={() => handleSelectOption(option.value)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 focus:outline-none focus:ring-2 focus:ring-brand-green/20 ${
                        isSelected 
                          ? 'border-brand-green bg-brand-green-light/40 shadow-sm' 
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        isSelected 
                          ? 'border-brand-green bg-brand-green text-white' 
                          : 'border-slate-300 bg-white'
                      }`}>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </span>
                      <span className={`text-sm md:text-base transition-colors ${
                        isSelected ? 'font-semibold text-slate-950' : 'text-slate-700'
                      }`}>
                        {option.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
                <button
                  id="quiz-btn-prev"
                  onClick={handlePrev}
                  disabled={currentQuestionIdx === 0}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-colors focus:outline-none ${
                    currentQuestionIdx === 0 
                      ? 'text-slate-300 cursor-not-allowed' 
                      : 'text-slate-600 hover:bg-slate-50 cursor-pointer'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" /> Anterior
                </button>

                <button
                  id="quiz-btn-next"
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className={`flex items-center gap-1.5 px-5 py-2.5 rounded-[12px] text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-brand-green/20 ${
                    isAnswered 
                      ? 'bg-brand-green text-white hover:bg-brand-green-hover cursor-pointer shadow-sm' 
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {currentQuestionIdx === QUIZ_QUESTIONS.length - 1 ? (
                    <>Ver Resultados <Sparkles className="w-4 h-4 ml-0.5" /></>
                  ) : (
                    <>Siguiente <ChevronRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </motion.div>
          ) : (
            /* Results Presentation */
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Score visual ring */}
              <div className="inline-flex relative items-center justify-center mb-6">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="54"
                    stroke="#f1f5f9"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="54"
                    stroke={
                      result?.level === 'Fortalecido' ? '#43A047' : 
                      result?.level === 'En Crecimiento' ? '#F28C28' : '#e53935'
                    }
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 54}
                    initial={{ strokeDashoffset: 2 * Math.PI * 54 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 54 * (1 - (result?.score || 0) / 25) }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-3xl font-extrabold font-mono text-slate-900">
                    {result?.score}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    de 25 pts
                  </span>
                </div>
              </div>

              {/* Diagnosis Badge */}
              <div className="mb-4">
                <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold border ${result?.colorClass}`}>
                  {result?.level === 'Fortalecido' && <Award className="w-4 h-4" />}
                  {result?.level === 'En Crecimiento' && <TrendingUp className="w-4 h-4" />}
                  {result?.level === 'Requiere Atención' && <AlertCircle className="w-4 h-4" />}
                  Nivel de Factores: {result?.level}
                </span>
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 max-w-xl mx-auto">
                {result?.level === 'Fortalecido' && "¡Sólido sistema de resiliencia y bienestar!"}
                {result?.level === 'En Crecimiento' && "Buen camino con oportunidades clave para mejorar"}
                {result?.level === 'Requiere Atención' && "Alerta preventiva: es momento de fortalecer la base"}
              </h4>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8 bg-slate-50 p-4 md:p-6 rounded-2xl border border-slate-100">
                {result?.feedback}
              </p>

              {/* Conversion Box */}
              <div className="p-6 md:p-8 rounded-2xl bg-brand-green-light border border-brand-green/15 text-left mb-6 max-w-2xl mx-auto">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-brand-green text-white shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-base md:text-lg mb-1">
                      ¿Cómo pasar de la puntuación a la acción?
                    </h5>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Tu autoevaluación inicial muestra factores que requieren atención inmediata. Hemos reservado para ti el <strong>checklist práctico</strong> y la <strong>guía gratuita de 10 acciones basadas en evidencia</strong> para elevar vuestro nivel protector hoy mismo.
                    </p>
                    <button
                      id="quiz-btn-convert"
                      onClick={() => onOpenLeadMagnet(result || undefined)}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-brand-green hover:bg-brand-green-hover active:bg-brand-green-hover/90 text-white rounded-[12px] text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    >
                      <Download className="w-4 h-4" /> Descargar Guía + Tu Evaluación Completa (PDF)
                    </button>
                  </div>
                </div>
              </div>

              {/* Re-do button */}
              <button
                id="quiz-btn-reset"
                onClick={resetQuiz}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors focus:outline-none uppercase tracking-wider py-2 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Repetir Autoevaluación
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
