/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QuizResult } from '../types';
import { 
  X, 
  Mail, 
  User, 
  Download, 
  CheckCircle2, 
  Lock, 
  BookOpen, 
  FileCheck2, 
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  quizResult?: QuizResult | null;
}

export default function LeadMagnetModal({ isOpen, onClose, quizResult }: LeadMagnetModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'padre_madre',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Interactive Checklist elements to show upon successful registration
  const [checklistItems, setChecklistItems] = useState([
    { id: 1, text: "Establecer una rutina de apagado de dispositivos 1 hora antes de dormir.", checked: false },
    { id: 2, text: "Validar las emociones intensas diciendo: 'Entiendo que te sientas así, estoy aquí para escucharte'.", checked: false },
    { id: 3, text: "Compartir al menos una comida al día sin pantallas sobre la mesa.", checked: false },
    { id: 4, text: "Planificar un micro-momento semanal a solas con el adolescente, sin hablar de deberes escolares.", checked: false },
  ]);

  const handleToggleCheck = (id: number) => {
    setChecklistItems(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.consent) return;

    setIsSubmitting(true);
    // Simulate API registration call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-blue/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Close button */}
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green/20 z-20 cursor-pointer"
              aria-label="Cerrar formulario"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable content wrapper */}
            <div className="overflow-y-auto flex-1">
              {!isSuccess ? (
                /* STEP 1: Registration Form */
                <div className="p-6 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 items-start mb-8 border-b border-slate-100 pb-6">
                    <div className="p-3.5 bg-brand-green-light text-brand-green rounded-2xl shrink-0">
                      <BookOpen className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-green uppercase tracking-widest bg-brand-green-light/70 px-2.5 py-1 rounded-md mb-2 inline-block">
                        Recurso Gratuito • Red Cuida
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 leading-tight">
                        La salud se aprende. El bienestar se construye.
                      </h3>
                      <p className="text-sm text-slate-500 mt-1.5">
                        Registra tus datos y recibe inmediatamente la Guía de 10 Acciones para el bienestar de tu adolescente, junto al Checklist y la plantilla de factores protectores.
                      </p>
                    </div>
                  </div>

                  {/* Show quiz result preview if exists */}
                  {quizResult && (
                    <div className="mb-6 p-4 rounded-xl bg-brand-green-light/40 border border-brand-green/10 flex items-center justify-between gap-3 text-left">
                      <div>
                        <span className="text-xs text-slate-500 font-medium block">Puntuación autoevaluación:</span>
                        <p className="text-sm font-bold text-slate-800">
                          {quizResult.score} / {quizResult.maxScore} puntos — Nivel {quizResult.level}
                        </p>
                      </div>
                      <span className="text-xs bg-white text-brand-green px-2.5 py-1 rounded-md border border-brand-green/20 font-bold shrink-0">
                        Resultado Adjunto
                      </span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Input: Name */}
                    <div>
                      <label htmlFor="user-name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Tu nombre de pila o completo *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          id="user-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ej. María Teresa o Carlos"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Input: Email */}
                    <div>
                      <label htmlFor="user-email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Tu correo electrónico principal *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          type="email"
                          id="user-email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Ej. maria@ejemplo.com"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green focus:bg-white transition-all"
                        />
                      </div>
                      <span className="text-[11px] text-slate-400 mt-1 block">
                        Nunca compartiremos tu email. Enviamos 1 correo semanal con consejos de salud mental escolar.
                      </span>
                    </div>

                    {/* Input: Role Select */}
                    <div>
                      <label htmlFor="user-role" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        ¿Cuál es tu rol principal?
                      </label>
                      <select
                        id="user-role"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3.5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green focus:bg-white transition-all"
                      >
                        <option value="padre_madre">Padre, Madre o Tutor Legal</option>
                        <option value="docente">Docente / Profesional de la Educación</option>
                        <option value="salud">Profesional de la Salud (Enfermero/a, Psicólogo/a)</option>
                        <option value="otro">Otro rol interesado</option>
                      </select>
                    </div>

                    {/* Input: GDPR Consent Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          required
                          id="user-consent"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                          className="mt-0.5 rounded border-slate-300 text-brand-green focus:ring-brand-green focus:ring-2 cursor-pointer w-4 h-4"
                        />
                        <span className="text-xs text-slate-500 leading-normal">
                          Acepto el tratamiento de mis datos para descargar la guía y unirme a la comunidad. Entiendo que recibiré información preventiva, recursos científicos y novedades de Red Cuida. Podré darme de baja en cualquier momento.
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 bg-brand-green hover:bg-brand-green-hover active:bg-brand-green-hover/90 text-white rounded-[12px] text-sm font-bold shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-brand-green/20 flex items-center justify-center gap-2 cursor-pointer mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Generando tu acceso seguro...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" /> Registrarme y Descargar Guía Gratuita
                        </>
                      )}
                    </button>
                  </form>

                  {/* Trust Footer */}
                  <div className="flex items-center justify-center gap-6 text-slate-400 text-xs mt-6 pt-5 border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5" /> Encriptación SSL 256 bits
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Cumplimiento LOPD
                    </span>
                  </div>
                </div>
              ) : (
                /* STEP 2: SUCCESS & INTERACTIVE CHECKLIST PREVIEW */
                <div className="p-6 md:p-10 text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="inline-flex items-center justify-center p-4 bg-emerald-50 text-emerald-600 rounded-full mb-6"
                  >
                    <CheckCircle2 className="w-12 h-12" />
                  </motion.div>

                  <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
                    ¡Registro completado con éxito, {formData.name}!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-lg mx-auto mb-6">
                    Hemos enviado la guía digital <span className="font-semibold text-slate-800">10 acciones para fortalecer el bienestar</span> directamente a tu correo <strong className="text-brand-green">{formData.email}</strong>. 
                  </p>

                  {/* Simulated automatic download notification */}
                  <div className="max-w-md mx-auto mb-8 p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-left">
                    <div className="flex items-center gap-2">
                      <FileCheck2 className="w-5 h-5 text-brand-green shrink-0" />
                      <div>
                        <span className="text-xs text-slate-500 font-medium block">Documento generado:</span>
                        <p className="text-xs font-bold text-slate-800">Guia_10_Acciones_RedCuida.pdf (3.4 MB)</p>
                      </div>
                    </div>
                    <button
                      onClick={() => alert("Simulación de descarga de PDF exitosa. En un entorno real, el navegador descargaría el archivo en este instante.")}
                      className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-50 cursor-pointer"
                    >
                      Descargar ahora
                    </button>
                  </div>

                  {/* Interactive Checklist Preview */}
                  <div className="max-w-lg mx-auto bg-slate-50/50 rounded-2xl border border-slate-100 p-5 text-left mb-6">
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block mb-1">
                      Primer paso práctico
                    </span>
                    <h4 className="font-bold font-display text-slate-900 text-base mb-3">
                      Checklist de Inicio Rápido: Primeras Acciones Preventivas
                    </h4>
                    <p className="text-xs text-slate-500 mb-4 leading-normal">
                      Mientras esperas que llegue el correo, puedes pulsar sobre estas 4 acciones piloto para comenzar a registrar tu progreso de forma interactiva:
                    </p>

                    <div className="space-y-2.5">
                      {checklistItems.map(item => (
                        <div
                          key={item.id}
                          onClick={() => handleToggleCheck(item.id)}
                          className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                            item.checked 
                              ? 'bg-white border-brand-green/20 text-slate-500' 
                              : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                            item.checked 
                              ? 'border-brand-green bg-brand-green text-white' 
                              : 'border-slate-300 bg-white'
                          }`}>
                            {item.checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </span>
                          <span className={`text-xs leading-normal ${item.checked ? 'line-through text-slate-400' : 'font-medium'}`}>
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-200/50 pt-3">
                      <span>Acciones marcadas: {checklistItems.filter(i => i.checked).length} de 4</span>
                      <span>Basado en el Modelo de Resiliencia Escolar</span>
                    </div>
                  </div>

                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold rounded-[12px] text-sm transition-all shadow-sm cursor-pointer inline-flex items-center gap-1.5 focus:outline-none"
                  >
                    Entendido, cerrar <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
