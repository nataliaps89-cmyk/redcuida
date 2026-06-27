/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  PROBLEMS, 
  SERVICE_STEPS, 
  EXPERT_CREDENTIALS,
  MINSAL_TOPICS,
  EDUCATIONAL_PACKAGES
} from './data';
import { QuizResult } from './types';

// Component imports
import ProtectiveFactorsQuiz from './components/ProtectiveFactorsQuiz';
import LeadMagnetModal from './components/LeadMagnetModal';
import Benefits from './components/Benefits';
import Credentials from './components/Credentials';
import FAQ from './components/FAQ';

// Icon imports
import { 
  Download, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  Check, 
  Activity, 
  Heart,
  Sparkles,
  AlertCircle,
  Users,
  User,
  GraduationCap,
  Apple,
  Moon,
  Smile,
  Smartphone,
  ShieldAlert,
  FileSpreadsheet,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeQuizResult, setActiveQuizResult] = useState<QuizResult | null>(null);

  const handleOpenModal = (quizResult?: QuizResult) => {
    if (quizResult) {
      setActiveQuizResult(quizResult);
    } else {
      setActiveQuizResult(null);
    }
    setIsModalOpen(true);
  };

  // Helper to map topic IDs to beautiful icons
  const getTopicIcon = (id: string) => {
    switch (id) {
      case 'topic1':
        return <Apple className="w-5 h-5 text-brand-green" />;
      case 'topic2':
        return <Moon className="w-5 h-5 text-brand-blue" />;
      case 'topic3':
        return <Smile className="w-5 h-5 text-brand-green" />;
      case 'topic4':
        return <Smartphone className="w-5 h-5 text-brand-green" />;
      case 'topic5':
        return <ShieldAlert className="w-5 h-5 text-brand-green" />;
      case 'topic6':
        return <Users className="w-5 h-5 text-brand-blue" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand-green" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-brand-green-light selection:text-slate-900">
      
      {/* 1. HEADER (STICKY - NO DISTRACTING NAVIGATION LINKS) */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 px-4 md:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-white overflow-hidden flex items-center justify-center shadow-sm border border-slate-100 relative">
              <img 
                src="https://lh3.googleusercontent.com/d/1vxjMrEHu8eMRmIvhXtYurvKkNA-DWk_a" 
                referrerPolicy="no-referrer" 
                alt="Red Cuida" 
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.fallback-r')) {
                    const fallback = document.createElement('span');
                    fallback.className = 'fallback-r text-brand-green font-display font-extrabold text-lg';
                    fallback.innerText = 'R';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-slate-900 text-lg tracking-tight leading-tight">
                Red Cuida
              </span>
              <span className="text-[10px] font-mono font-bold text-brand-green tracking-wider uppercase leading-none mt-0.5">
                Hábitos & Salud Escolar
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue bg-brand-blue-light px-2.5 py-1 rounded-lg border border-brand-blue/10">
              <Heart className="w-3.5 h-3.5 text-brand-blue fill-brand-blue/10" /> Liderado por Equipo de Enfermería
            </span>
            <button
              id="header-cta-btn"
              onClick={() => handleOpenModal()}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-green hover:bg-brand-green-hover active:bg-brand-green-hover/95 text-white font-bold rounded-[12px] text-xs md:text-sm shadow-sm transition-all hover:shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-green/30"
            >
              <Download className="w-3.5 h-3.5" /> Descargar Guía Gratis
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1">

        {/* 1. ABOVE THE FOLD (HERO TEXT) & 2. HERO SHOT */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 pt-12 pb-16 md:py-20 lg:py-24 px-4 md:px-8 border-b border-slate-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Heading and CTA */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-sand text-brand-orange border border-brand-orange/20">
                  <Sparkles className="w-3 h-3 text-brand-orange" /> Educación para la Salud Adolescente
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-green-soft text-brand-green border border-brand-green-light">
                  <Heart className="w-3 h-3 text-brand-green fill-brand-green/10" /> Liderado por Equipo de Enfermería
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.1]">
                La salud se aprende. <br />
                <span className="text-brand-green font-extrabold">El bienestar se construye.</span>
              </h1>
              
              <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
                Talleres, cursos y programas prácticos para promover <strong>hábitos de vida saludable</strong> en adolescentes, dirigidos a jóvenes, familias, establecimientos educacionales y comunidades juveniles. Basados en guías profesionales de salud y diseñados a la medida de cada comunidad.
              </p>

              {/* Major conversion callout & Above the fold CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-primary-cta"
                  onClick={() => handleOpenModal()}
                  className="px-8 py-4 bg-brand-green hover:bg-brand-green-hover active:bg-brand-green-hover/95 text-white font-extrabold rounded-[12px] text-base shadow-lg shadow-brand-green/10 hover:shadow-xl hover:shadow-brand-green/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-green/40"
                >
                  <Download className="w-5 h-5" /> Descargar Guía Gratuita
                </button>
                <a 
                  href="#assessment-section" 
                  className="px-6 py-4 bg-white hover:bg-brand-green-soft/30 border border-brand-green text-brand-green font-bold rounded-[12px] text-sm transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                >
                  Autoevaluación de Hábitos <ArrowRight className="w-4 h-4 text-brand-green" />
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-slate-400 text-xs font-medium pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <Check className="w-4.5 h-4.5 text-brand-green shrink-0" /> Guía de 10 Acciones + Checklist
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4.5 h-4.5 text-brand-green shrink-0" /> Diagnóstico Inicial Opcional
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4.5 h-4.5 text-brand-green shrink-0" /> Formatos Individuales y Grupales
                </span>
              </div>
            </div>

            {/* Right: Hero Shot Visual Banner holding the new main photo */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-brand-green-light rounded-3xl blur-2xl transform rotate-3 -z-10" />
              <div className="relative bg-white p-3 rounded-3xl border border-slate-100 shadow-xl overflow-hidden flex items-center justify-center">
                <img 
                  src="https://lh3.googleusercontent.com/d/16MTRnr1IFzXwH-4L8SW65h_6xwz0Qdfk" 
                  alt="Red Cuida - Natalia Prado" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-2xl max-h-[500px]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.fallback-hero-main')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'fallback-hero-main w-full h-[350px] flex items-center justify-center bg-brand-green/10 text-brand-green font-display font-extrabold text-2xl rounded-2xl';
                      fallback.innerText = 'Red Cuida';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              
              {/* Floating Approved stamp */}
              <div className="absolute -bottom-5 -left-5 bg-white border border-slate-100 rounded-2xl p-3.5 shadow-lg flex items-center gap-3 max-w-[240px] z-10">
                <div className="p-2.5 rounded-xl bg-brand-green-light text-brand-green shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Estándar de Promoción</span>
                  <p className="text-xs font-bold text-slate-800 leading-tight">Hábitos de Salud Escolar</p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* 3. PROBLEMA (DOLOR DEL BUYER PERSONA EN SUS PALABRAS) - LIGHT THEME */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-50/50 text-slate-800 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,139,91,0.04),transparent_50%)]" />
          <div className="max-w-5xl mx-auto relative space-y-12">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-green font-mono">
                Desafíos Cotidianos
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold font-display text-slate-900">
                Los retos de educar en hábitos saludables hoy en día
              </h2>
              <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
                Tanto familias como establecimientos educativos se enfrentan a un entorno que dificulta el autocuidado y la salud preventiva de los adolescentes:
              </p>
            </div>

            {/* Quote Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROBLEMS.map((prob) => (
                <div 
                  key={prob.id}
                  className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-brand-green/30 hover:shadow-md transition-all duration-300 group shadow-sm"
                >
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed italic mb-6">
                    {prob.quote}
                  </p>
                  <div className="flex items-center gap-2 border-t border-slate-100 pt-4">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse shrink-0" />
                    <span className="text-xs font-semibold text-slate-500 group-hover:text-brand-green transition-colors">
                      {prob.source}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Empathetic outcome bridge */}
            <p className="text-center text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed pt-4 font-light">
              «La salud no consiste solo en tratar la enfermedad, sino en aprender a vivir de forma saludable. Trabajar los hábitos de forma proactiva con los adolescentes fortalece sus factores protectores para toda la vida».
            </p>
          </div>
        </section>


        {/* THEMATIC AREAS (TEMÁTICAS DE EDUCACIÓN PARA LA SALUD) */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green-light px-3 py-1 rounded-full">
                Contenidos Curriculares y de Salud
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold font-display text-slate-900">
                Temáticas de Educación para la Salud del Adolescente
              </h2>
              <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
                Educamos bajo un marco de salud integral y preventiva, adaptando los contenidos según el grupo etario, necesidades y dinámicas del entorno.
              </p>
            </div>

            {/* Grid of Topics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {MINSAL_TOPICS.map((topic) => (
                <div 
                  key={topic.id}
                  className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 hover:bg-white hover:border-brand-green/35 hover:shadow-md transition-all duration-300 flex flex-col justify-between shadow-sm group"
                >
                  <div className="space-y-4">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white shadow-sm shrink-0 border border-slate-100">
                        {getTopicIcon(topic.id)}
                      </div>
                      <h3 className="font-bold font-display text-slate-900 text-base md:text-lg group-hover:text-brand-green transition-colors">
                        {topic.title}
                      </h3>
                    </div>
                    {/* Description */}
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {topic.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="mt-5 pt-4 border-t border-slate-200/40 space-y-2">
                    {topic.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* 4. SOLUCIÓN Y SERVICIO (CÓMO FUNCIONA EN 3 PASOS SIMPLES) */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
          <div className="max-w-5xl mx-auto space-y-12">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green-light px-3 py-1 rounded-full">
                Metodología Educativa
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold font-display text-slate-900">
                ¿Cómo implementamos los talleres y cursos?
              </h2>
              <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
                Un proceso riguroso, participativo y centrado en el desarrollo de competencias de autocuidado reales.
              </p>
            </div>

            {/* 3 Step columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative pt-4">
              {/* Background connecting line on desktop */}
              <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-[2px] bg-slate-200 -z-10" />

              {SERVICE_STEPS.map((step) => (
                <div key={step.step} className="text-center space-y-4 px-4 group">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-brand-green font-mono font-extrabold text-xl border border-slate-200/80 group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green group-hover:scale-105 transition-all duration-300 shadow-sm">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold font-display text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* EDUCATIONAL PACKAGES SECTION (PAQUETES EDUCATIVOS) */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green-light px-3 py-1 rounded-full">
                Nuestros Formatos de Servicio
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold font-display text-slate-900">
                Paquetes de Educación para la Salud según tu necesidad
              </h2>
              <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
                Ofrecemos programas estructurados tanto para acompañar de forma individual a una familia, como para capacitar a cursos enteros o comunidades escolares completas.
              </p>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
              {EDUCATIONAL_PACKAGES.map((pkg) => {
                const isFamily = pkg.id === 'pkg-individual';
                const isSchool = pkg.id === 'pkg-escolar';
                return (
                  <div 
                    key={pkg.id}
                    className={`rounded-3xl border p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${
                      isSchool 
                        ? 'bg-brand-green-light/90 border-brand-green/30 text-slate-800 shadow-xl relative overflow-hidden ring-2 ring-brand-green/15' 
                        : 'bg-white text-slate-800 border-slate-200/80 shadow-md hover:shadow-lg hover:border-brand-green/20'
                    }`}
                  >
                    {isSchool && (
                      <div className="absolute top-0 right-0 bg-brand-orange text-white font-bold font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-sm">
                        Recomendado Colegios
                      </div>
                    )}

                    <div className="space-y-6">
                      {/* Target badge */}
                      <div>
                        <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                          isSchool 
                            ? 'bg-brand-green text-white' 
                            : 'bg-brand-green-light text-brand-green border border-brand-green/20'
                        }`}>
                          Para: {pkg.target}
                        </span>
                        <h3 className="text-xl font-extrabold font-display mt-3 leading-snug text-slate-900">
                          {pkg.title}
                        </h3>
                      </div>

                      <p className="text-xs md:text-sm leading-relaxed text-slate-600">
                        {pkg.description}
                      </p>

                      {/* Diagnostic Evaluation Badge */}
                      <div className="p-3 rounded-xl flex items-center gap-2.5 bg-white border border-slate-100">
                        <FileSpreadsheet className="w-4 h-4 text-brand-green shrink-0" />
                        <span className="text-xs font-bold leading-tight text-slate-700">
                          {isFamily ? "Incluye Evaluación Diagnóstica Familiar" : "Incluye Diagnóstico Grupal de Hábitos"}
                        </span>
                      </div>

                      {/* Inclusion Checklist */}
                      <div className="space-y-3 pt-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider block text-slate-500">
                          ¿Qué incluye el paquete?
                        </span>
                        <div className="space-y-2.5">
                          {pkg.includes.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs">
                              <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                              <span className="text-slate-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="pt-8">
                      <button
                        onClick={() => handleOpenModal()}
                        className={`w-full py-3.5 px-4 rounded-[12px] text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer focus:outline-none ${
                          isSchool 
                            ? 'bg-brand-green text-white hover:bg-brand-green-hover active:bg-brand-green-hover/90 shadow-md shadow-brand-green/10' 
                            : 'bg-brand-blue text-white hover:bg-brand-blue-hover active:bg-brand-blue-hover/90 shadow-sm'
                        }`}
                      >
                        {pkg.cta}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* 5. BENEFICIOS (DESDE LO QUE GANA EL BUYER PERSONA) */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-green">
                Beneficios Reales
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold font-display text-slate-900">
                Lo que ganan los adolescentes, familias y educadores
              </h2>
              <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
                Trabajar la promoción de la salud con un enfoque científico y estructurado aporta valor inmediato en casa y en el aula.
              </p>
            </div>

            {/* Benefits list layout */}
            <Benefits />
          </div>
        </section>


        {/* INTERACTIVE COMPONENT: ADOLESCENT HABITS SELF-ASSESSMENT */}
        <section id="assessment-section" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-brand-green-light/30 border-b border-slate-100">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="text-center space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-green font-mono">
                Diagnóstico de Hábitos de Salud Escolar
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold font-display text-slate-900 leading-tight">
                Mide el nivel de hábitos saludables de tu adolescente
              </h2>
              <p className="text-slate-500 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
                Antes de descargar la guía completa, utiliza este breve cuestionario interactivo de 5 preguntas alineado con las temáticas oficiales de la salud y el bienestar adolescente. Descubre qué hábitos se deben fortalecer.
              </p>
            </div>

            {/* Render interactive self-assessment quiz */}
            <ProtectiveFactorsQuiz onOpenLeadMagnet={handleOpenModal} />
          </div>
        </section>


        {/* 6. PRUEBA SOCIAL Y CREDENCIALES */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <Credentials />
          </div>
        </section>


        {/* 7. OFERTA Y LEAD MAGNET (THE PUENTE TOWARDS CONVERSION) */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-brand-green-light/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,139,91,0.1),transparent_60%)]" />
          
          <div className="max-w-5xl mx-auto relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Resource Presentation */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white shadow-sm shadow-brand-orange/20">
                Liderado por Enfermería • Recurso Gratuito
              </span>
              
              <h2 className="text-2xl md:text-4xl font-extrabold font-display text-slate-900 leading-tight">
                Guía de 10 Acciones para el Bienestar del Adolescente
              </h2>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                Descarga de inmediato la guía teórica y el <strong>checklist práctico</strong> diseñado para auditar las rutinas diarias de alimentación, sueño, bienestar digital y autocuidado emocional de los adolescentes.
              </p>

              {/* Bullet list of what contains */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-2.5">
                  <span className="p-1 rounded-full bg-brand-green text-white shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-xs md:text-sm text-slate-700 font-medium leading-normal">
                    <strong>Pautas Basadas en Evidencia:</strong> Consejos validados para la transición de crecimiento de 10 a 19 años.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="p-1 rounded-full bg-brand-green text-white shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-xs md:text-sm text-slate-700 font-medium leading-normal">
                    <strong>Checklist de Rutinas Saludables:</strong> Evaluación de uso de pantallas, horas de descanso y ejercicio diario.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="p-1 rounded-full bg-brand-green text-white shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-xs md:text-sm text-slate-700 font-medium leading-normal">
                    <strong>Formularios de Factores Protectores:</strong> Plantilla interactiva lista para aplicar en casa o en el aula.
                  </span>
                </div>
              </div>

              {/* Middle CTA */}
              <div className="pt-3">
                <button
                  id="offer-section-cta"
                  onClick={() => handleOpenModal()}
                  className="px-6 py-3.5 bg-brand-green hover:bg-brand-green-hover active:bg-brand-green-hover/90 text-white font-extrabold rounded-[12px] text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                >
                  <Download className="w-4 h-4" /> Obtener Guía y Checklist Gratis
                </button>
              </div>
            </div>

            {/* Right: Mockup Graphic representation */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[340px] bg-slate-900 rounded-3xl p-6 text-white shadow-2xl border border-slate-800 transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Header graphic */}
                <div className="border-b border-slate-800 pb-4 mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-white overflow-hidden flex items-center justify-center border border-slate-800 relative">
                      <img 
                        src="https://lh3.googleusercontent.com/d/1vxjMrEHu8eMRmIvhXtYurvKkNA-DWk_a" 
                        referrerPolicy="no-referrer" 
                        alt="Red Cuida" 
                        className="w-full h-full object-contain p-0.5"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent && !parent.querySelector('.fallback-r')) {
                            const fallback = document.createElement('span');
                            fallback.className = 'fallback-r text-brand-green font-display font-extrabold text-[10px]';
                            fallback.innerText = 'R';
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Red Cuida</span>
                  </div>
                  <span className="text-[9px] font-mono bg-brand-orange/15 text-brand-orange px-2 py-0.5 rounded border border-brand-orange/30">DOCUMENTO PDF</span>
                </div>
                
                {/* Book cover look */}
                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-brand-orange tracking-widest uppercase block">EDUCACIÓN PARA LA SALUD</span>
                  <h4 className="text-lg md:text-xl font-bold font-display text-white leading-tight">
                    La salud se aprende. <br />
                    El bienestar se construye.
                  </h4>
                  
                  <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                    10 acciones y checklist práctico de hábitos de vida saludable para adolescentes.
                  </p>

                  {/* Checklist graphic items inside mockup */}
                  <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-800 space-y-2.5">
                    <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase block">TEMAS CLAVE</span>
                    <div className="flex items-center gap-2 text-[10px] text-slate-300">
                      <span className="w-3.5 h-3.5 rounded bg-brand-green/15 border border-brand-green/30 text-brand-green flex items-center justify-center font-bold text-[8px]">✓</span>
                      <span>Alimentación, Sueño y Pantallas</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-300">
                      <span className="w-3.5 h-3.5 rounded bg-brand-green/15 border border-brand-green/30 text-brand-green flex items-center justify-center font-bold text-[8px]">✓</span>
                      <span>Relaciones Sanas y Autocuidado</span>
                    </div>
                  </div>
                </div>

                {/* Footer of mockup */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[9px] text-slate-500 font-mono">
                  <span>Autor: Natalia P.</span>
                  <span>Enfermera Docente</span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* 8. PREGUNTAS FRECUENTES (RESOLVIENDO OB JECIONES) */}
        <section id="faq-section" className="py-16 md:py-24 px-4 md:px-8 bg-slate-50 border-t border-b border-slate-100">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                Preguntas Frecuentes
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold font-display text-slate-900">
                Dudas comunes sobre los talleres y metodologías
              </h2>
              <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
                Aclaramos tus dudas sobre las metodologías, las evaluaciones diagnósticas y las modalidades de trabajo.
              </p>
            </div>

            {/* Expandable FAQs Accordions */}
            <FAQ />
          </div>
        </section>


        {/* 9. CTA REPETIDO (FINAL ACCIÓN DE CONVERSIÓN UNIFICADA) */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-brand-green-light/70 text-slate-800 text-center relative overflow-hidden border-t border-b border-brand-green/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,139,91,0.08),transparent_70%)]" />
          
          <div className="max-w-3xl mx-auto relative space-y-8">
            <span className="p-3 bg-brand-green/15 text-brand-green rounded-2xl inline-block border border-brand-green/20">
              <Activity className="w-8 h-8" />
            </span>
            
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-slate-900 tracking-tight">
              Acompaña el desarrollo saludable de tus adolescentes hoy
            </h2>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto font-light">
              Únete a Red Cuida. Adquiere uno de nuestros paquetes de talleres y cursos, accede a evaluaciones diagnósticas iniciales de hábitos de vida y fortalece la salud de tu comunidad.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 pt-2 max-w-md mx-auto">
              <button
                id="footer-primary-cta"
                onClick={() => handleOpenModal()}
                className="px-8 py-4 bg-brand-green hover:bg-brand-green-hover active:bg-brand-green-hover/95 text-white font-extrabold rounded-[12px] text-base shadow-lg shadow-brand-green/15 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
              >
                <Download className="w-5 h-5" /> Descargar Guía Gratuita
              </button>
            </div>

            {/* Quick trust assurances */}
            <div className="flex items-center justify-center gap-5 text-slate-500 text-xs font-medium pt-4 border-t border-slate-200 max-w-md mx-auto">
              <span>PDF Digital Inmediato</span>
              <span>•</span>
              <span>Educación Basada en Evidencia</span>
              <span>•</span>
              <span>Baja con 1 Clic</span>
            </div>
          </div>
        </section>


        {/* 10. CIERRE (REFUERZO FINAL Y TRATAMIENTO DE DATOS) */}
        <footer className="bg-slate-900 text-slate-400 text-xs md:text-sm py-12 px-4 md:px-8 border-t border-slate-850">
          <div className="max-w-7xl mx-auto space-y-8">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-white overflow-hidden flex items-center justify-center border border-slate-800 relative">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1vxjMrEHu8eMRmIvhXtYurvKkNA-DWk_a" 
                    referrerPolicy="no-referrer" 
                    alt="Red Cuida" 
                    className="w-full h-full object-contain p-0.5"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent && !parent.querySelector('.fallback-r')) {
                        const fallback = document.createElement('span');
                        fallback.className = 'fallback-r text-brand-green font-display font-extrabold text-base';
                        fallback.innerText = 'R';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-slate-200 text-sm tracking-tight leading-none">
                    Red Cuida
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase mt-1 leading-none">
                    La salud se aprende. El bienestar se construye.
                  </span>
                </div>
              </div>

              <p className="text-left md:text-right text-slate-500 text-xs max-w-md leading-normal">
                Nota de salud preventiva: La información, pautas, talleres y recursos disponibles en este sitio tienen un carácter estrictamente educativo, pedagógico y de promoción de hábitos saludables. No reemplazan diagnósticos médicos clínicos, tratamientos terapéuticos de salud mental ni atención psiquiátrica especializada en casos de patología.
              </p>
            </div>

            {/* GDPR & Privacy statement block */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 border-t border-slate-800">
              <div className="md:col-span-8 text-left space-y-3">
                <p className="text-[11px] text-slate-500 leading-normal">
                  <strong>Información básica sobre Tratamiento de Datos Personales (Red Cuida - LOPD):</strong> <br />
                  <strong>Responsable:</strong> Natalia Prado (Directora de Red Cuida, enfermera especialista y docente). <br />
                  <strong>Finalidad:</strong> Envío de la guía gratuita solicitada, el checklist interactivo de hábitos, y nuestra newsletter semanal sobre salud escolar y bienestar adolescente. <br />
                  <strong>Legitimación:</strong> Tu consentimiento explícito al marcar la casilla de aceptación. <br />
                  <strong>Destinatarios:</strong> No se cederán datos a terceros, salvo obligación legal. <br />
                  <strong>Derechos:</strong> Tienes derecho a acceder, rectificar, limitar el tratamiento y eliminar tus datos de forma permanente enviando un correo con 1 solo clic o pulsando en el enlace de baja presente en el pie de cada correo electrónico que recibas.
                </p>
              </div>
              
              <div className="md:col-span-4 flex items-center justify-start md:justify-end">
                <div className="flex items-center gap-4 bg-slate-850 p-3 rounded-2xl border border-slate-800 w-full max-w-xs shadow-md">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-orange/40 shrink-0 bg-slate-800 relative">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1Kjm8bhiCWdPk3U7bhbj2b_lhhj4Wx_F6" 
                      referrerPolicy="no-referrer"
                      alt="Natalia Prado" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent && !parent.querySelector('.fallback-director')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-director w-full h-full flex items-center justify-center bg-slate-700 text-white font-bold text-xs';
                          fallback.innerText = 'NP';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-slate-200 font-bold text-sm leading-none">Natalia Prado</p>
                    <p className="text-brand-orange font-semibold text-[11px] mt-1.5 leading-none">Directora de Red Cuida</p>
                    <p className="text-slate-500 text-[10px] mt-1.5 leading-none">Enfermera Especialista</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lower copyrights bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 text-[11px] text-slate-650 font-medium">
              <span>
                © {new Date().getFullYear()} Red Cuida. Todos los derechos reservados.
              </span>
              <div className="flex gap-4">
                <a href="#assessment-section" className="hover:text-slate-200 transition-colors">Autoevaluación</a>
                <a href="#offer-section-cta" className="hover:text-slate-200 transition-colors">Descargar Guía</a>
                <a href="#faq-section" className="hover:text-slate-200 transition-colors">Preguntas Frecuentes</a>
              </div>
            </div>

          </div>
        </footer>

      </main>

      {/* LEAD MAGNET / REGISTRATION POPUP MODAL */}
      <LeadMagnetModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        quizResult={activeQuizResult}
      />

    </div>
  );
}
