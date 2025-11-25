
import React from 'react';
import { BadgePercent, CheckCircle2 } from 'lucide-react';

const Calculator: React.FC = () => {
  return (
    <section id="calculator" className="py-20 bg-brand-dark text-white relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
       <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
            <BadgePercent size={32} className="text-brand-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Kolik si reálně vyděláte?
          </h2>
          <p className="text-xl text-slate-300">
            Naše provize je fixních <span className="text-brand-orange font-bold">10 %</span> z každé realizované zakázky.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
             
             <div className="flex flex-col md:flex-row items-center gap-8 justify-between relative z-10">
                <div className="text-center md:text-left space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Příklad: Standardní půda (cca 100 m²)
                  </h3>
                  <div className="flex items-start gap-3 text-slate-300 justify-center md:justify-start">
                    <CheckCircle2 className="shrink-0 text-brand-orange mt-1" />
                    <p className="text-lg">
                      Ve většině případů tuto cenu klientovi <strong>pokrývá státní dotace</strong>.
                    </p>
                  </div>
                </div>

                <div className="bg-white text-slate-900 rounded-2xl p-6 min-w-[280px] text-center shadow-lg transform md:rotate-2">
                   <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold mb-2">Vaše provize</p>
                   <p className="text-5xl font-extrabold text-brand-orange">7 000 Kč</p>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Calculator;
