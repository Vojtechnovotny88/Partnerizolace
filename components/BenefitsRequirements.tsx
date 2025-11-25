
import React from 'react';
import { Check, Dot } from 'lucide-react';

const BenefitsRequirements: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
          Jasná pravidla hry
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Benefits */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-green-500">✅</span> Co vám to přinese?
            </h3>
            <ul className="space-y-4">
              {[
                "Neměníte svoji práci, jen ji zhodnotíte",
                "Provize v řádech tisíců za jednoduché doporučení",
                "Jednoduché a rychlé zaškolení",
                "Transparentní systém odměn",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                    <Check size={16} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
             <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-blue-500">🔹</span> Co požadujeme my?
            </h3>
            <ul className="space-y-4">
              {[
                "Základní technické povědomí",
                "Schopnost vysvětlit výhodu služby",
                "Spolehlivost a férové jednání",
                "Chuť přivydělat si bez byrokracie",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                   <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-600 shrink-0">
                    <Dot size={16} strokeWidth={6} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
               <li className="flex items-start gap-3 pt-2 mt-2 border-t border-slate-100">
                  <div className="mt-1 bg-red-100 p-1 rounded-full text-red-600 shrink-0">
                    <span className="block w-4 h-4 font-bold text-xs leading-4 text-center">✖</span>
                  </div>
                  <span className="text-slate-900 font-bold">Není potřeba žádný kapitál ani nářadí</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsRequirements;
