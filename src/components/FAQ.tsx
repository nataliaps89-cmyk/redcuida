/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq1");

  const handleToggle = (id: string) => {
    setOpenId(prev => prev === id ? null : id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {FAQS.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen 
                ? 'bg-white border-brand-green/30 shadow-md' 
                : 'bg-white border-slate-200/60 hover:border-slate-300'
            }`}
          >
            <button
              id={`faq-btn-${faq.id}`}
              onClick={() => handleToggle(faq.id)}
              aria-expanded={isOpen}
              className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-green/20"
            >
              <div className="flex gap-3 items-start">
                <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${
                  isOpen ? 'text-brand-green' : 'text-slate-400'
                }`} />
                <span className={`text-base md:text-lg font-bold font-display tracking-tight leading-snug ${
                  isOpen ? 'text-slate-950' : 'text-slate-800'
                }`}>
                  {faq.question}
                </span>
              </div>
              <span className={`p-1 rounded-lg shrink-0 transition-transform duration-300 bg-slate-50 text-slate-500 ${
                isOpen ? 'rotate-180 bg-brand-green-light text-brand-green' : ''
              }`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-5 pb-6 md:px-6 md:pb-6 pt-0 border-t border-slate-100/60 mt-1">
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
