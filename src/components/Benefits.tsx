/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BENEFITS } from '../data';
import { 
  Heart, 
  Smile, 
  BookOpen, 
  Users, 
  Sparkles,
  CheckCircle
} from 'lucide-react';

export default function Benefits() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'ben1':
        return <Heart className="w-6 h-6" />;
      case 'ben2':
        return <CheckCircle className="w-6 h-6" />;
      case 'ben3':
        return <BookOpen className="w-6 h-6" />;
      case 'ben4':
        return <Users className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {BENEFITS.map((benefit) => (
        <div 
          key={benefit.id}
          className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 hover:border-brand-green/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-5"
        >
          {/* Icon Container */}
          <div className="p-3 rounded-xl bg-brand-green-light text-brand-green shrink-0 self-start">
            {getIcon(benefit.id)}
          </div>

          {/* Content */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-green font-mono bg-brand-green-light px-2.5 py-0.5 rounded-md">
                {benefit.badge}
              </span>
            </div>
            <h4 className="text-lg font-bold font-display text-slate-900 leading-tight">
              {benefit.title}
            </h4>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
