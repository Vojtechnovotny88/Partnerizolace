
import React from 'react';
import { Eye, PhoneCall, Banknote } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Eye,
      title: "1. Uvidíte příležitost",
      description: "Při své práci (např. oprava střechy, rozvody elektřiny) si všimnete, že by klientovi pomohlo zateplení. Zmíníte se o nás."
    },
    {
      icon: PhoneCall,
      title: "2. Zavoláte nám",
      description: "Pokud má klient zájem, vytočíte naši infolinku a předáte základní informace. My připravíme smlouvu a zajistíme realizaci."
    },
    {
      icon: Banknote,
      title: "3. Inkasujete provizi",
      description: "Jakmile je hotovo a zaplaceno, posíláme vám 10 % z ceny zakázky na účet. Žádné papírování navíc."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Jak to funguje?
          </h2>
          <p className="text-xl text-slate-600">
            Vydělávat s námi je snadné. Vy jen doporučíte, my pracujeme.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl bg-slate-50 border-2 border-slate-100 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-brand-orange group-hover:shadow-lg group-hover:shadow-brand-orange/10 bg-white relative">
                 <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-sm shadow-sm">
                   {index + 1}
                 </div>
                 <step.icon size={40} className="text-slate-600 group-hover:text-brand-orange transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
