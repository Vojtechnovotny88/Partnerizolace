
import React from 'react';
import { HardHat, FileText, Search } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Proč spolupracovat právě s námi?
            </h2>
            <div className="space-y-6 text-slate-600 text-lg">
              <p>
                Foukaná izolace je trendem v zateplování domů a stropních konstrukcí. Poptávka roste, ale mnoho lidí stále neví, jak rychlé a efektivní toto řešení je.
              </p>
              <p>
                Pokud se pohybujete ve stavebnictví nebo máte síť kontaktů, máte v rukou příležitost. Vy máte důvěru klienta, my máme technologii.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <HardHat size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Odbornost na naší straně</h4>
                <p className="text-slate-600">Vysvětlení technologie a samotnou realizaci řešíme my. Vy se nemusíte učit složité postupy aplikace.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="p-3 bg-green-50 text-green-600 rounded-lg shrink-0">
                <FileText size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Nulová administrativa</h4>
                <p className="text-slate-600">Nemusíte nic sepisovat ani fakturovat klientovi. Všechno papírování je na nás.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-lg shrink-0">
                <Search size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Transparentnost</h4>
                <p className="text-slate-600">O každém kroku zakázky máte přehled. Víte přesně, v jaké fázi se zakázka nachází.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
