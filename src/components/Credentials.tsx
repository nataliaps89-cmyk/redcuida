/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { EXPERT_CREDENTIALS, TESTIMONIALS } from '../data';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Heart, 
  Star, 
  Check, 
  Quote, 
  ShieldCheck
} from 'lucide-react';

export default function Credentials() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
      {/* LEFT COLUMN: Natalia's Profile & Credentials */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Profile Intro Header with Photo on the Right */}
        <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
          <div className="space-y-4 flex-1 text-left">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-brand-green-light text-brand-green rounded-xl">
                <Heart className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green">
                Respaldo Clínico y Docente
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                  Tu guía: Natalia Prado
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase bg-brand-sand text-brand-orange border border-brand-orange/20">
                  Directora de Red Cuida
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase bg-brand-blue-light text-brand-blue border border-brand-blue/10">
                  Liderado por Equipo de Enfermería
                </span>
              </div>

              <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
                {EXPERT_CREDENTIALS.title}
              </p>
            </div>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {EXPERT_CREDENTIALS.bio}
            </p>
          </div>

          {/* Photo on the right side */}
          <div className="shrink-0 self-start md:self-center">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl overflow-hidden border-4 border-white shadow-xl relative bg-slate-100 ring-1 ring-slate-200">
              <img 
                src="https://lh3.googleusercontent.com/d/1Kjm8bhiCWdPk3U7bhbj2b_lhhj4Wx_F6" 
                referrerPolicy="no-referrer"
                alt="Natalia Prado" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.fallback-credentials-img')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-credentials-img w-full h-full flex items-center justify-center bg-brand-green text-white font-bold text-xl';
                    fallback.innerText = 'NP';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Credentials Badges */}
        <div className="space-y-3 pt-2">
          {EXPERT_CREDENTIALS.specialties.map((spec, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
              <span className="p-1.5 bg-brand-green-light text-brand-green rounded-lg shrink-0 mt-0.5">
                {index === 0 && <Award className="w-4 h-4" />}
                {index === 1 && <GraduationCap className="w-4 h-4" />}
                {index === 2 && <BookOpen className="w-4 h-4" />}
              </span>
              <span className="text-xs md:text-sm font-semibold text-slate-800 leading-normal">
                {spec}
              </span>
            </div>
          ))}
        </div>

        {/* Scientific Evidence disclaimer - LIGHT BACKGROUND AS PER BRAND RULE */}
        <div className="flex items-center gap-3 p-4 rounded-xl bg-brand-green-light/80 border border-brand-green/10 text-slate-700 text-xs font-medium">
          <ShieldCheck className="w-5 h-5 text-brand-green shrink-0" />
          <span>
            Todas las pautas, mentorías y programas escolares están alineados con los estándares de la promoción de la salud mental de la OMS y evidencia científica actualizada.
          </span>
        </div>
      </div>

      {/* RIGHT COLUMN: Real Testimonials from Parents & Educators */}
      <div className="lg:col-span-5 space-y-6">
        <div className="flex items-center gap-2 lg:justify-end">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Testimonios Reales
          </span>
        </div>

        <div className="space-y-5">
          {TESTIMONIALS.map((test) => (
            <div 
              key={test.id} 
              className="p-6 bg-white border border-slate-100 rounded-2xl shadow-md relative hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-brand-green/5 pointer-events-none" />
              
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-3.5">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4 italic">
                {test.text}
              </p>

              {/* Author Footer */}
              <div className="border-t border-slate-50 pt-3 flex flex-col">
                <span className="text-sm font-bold text-slate-900">
                  {test.name}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {test.role}
                </span>
                <span className="inline-block self-start mt-1.5 text-[10px] font-bold text-brand-green bg-brand-green-light px-2 py-0.5 rounded-md">
                  {test.relation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
