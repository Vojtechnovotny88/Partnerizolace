import React from 'react';
import { ArrowRight, Wallet, Handshake, TrendingUp, BrainCircuit, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Construction background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-sm font-semibold tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              Nová příležitost pro řemeslníky
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Získejte další <span className="text-brand-orange">zdroj příjmů</span> ke své současné práci
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Nepotřebujete měnit profesi ani hledat nové klienty. Stačí, když se při svých zakázkách zmíníte o zateplení. My zajistíme realizaci i papírování – 
              <span className="font-bold text-white bg-brand-orange/20 px-1 ml-1 rounded">vy získáte provizi 10 %.</span>
            </p>

            {/* Benefits Icons - Mobile Optimized */}
            <div className="grid grid-cols-2 gap-4 pt-4">
               {[
                 { icon: Wallet, text: "Vedlejší příjem bez závazků" },
                 { icon: Handshake, text: "Férová spolupráce" },
                 { icon: TrendingUp, text: "Žádaný produkt" },
                 { icon: BrainCircuit, text: "Stačí základní přehled" }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3 text-slate-300">
                   <div className="p-2 bg-slate-800 rounded-lg text-brand-orange shrink-0">
                     <item.icon size={20} />
                   </div>
                   <span className="text-sm font-medium">{item.text}</span>
                 </div>
               ))}
            </div>

            <div className="pt-6">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-white transition-all bg-brand-orange rounded-lg hover:bg-orange-600 hover:scale-105 shadow-lg shadow-brand-orange/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange focus:ring-offset-slate-900"
              >
                Chci více informací a provizi
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Visualization Box */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-amber-600 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <Wallet size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Příklad z praxe</h3>
                  <p className="text-slate-400 text-sm">Jak snadno to funguje?</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-slate-500 mt-1 shrink-0" />
                  <p className="text-slate-300">Zmíníte se u klienta o zateplení</p>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-slate-500 mt-1 shrink-0" />
                  <p className="text-slate-300">My zateplíme <strong className="text-white">100 m²</strong> půdy</p>
                </div>
                
                <div className="mt-6 p-6 bg-slate-900/50 rounded-xl border border-slate-700 text-center">
                   <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">Vaše provize</p>
                   <p className="text-4xl font-extrabold text-brand-orange">7 000 Kč</p>
                   <p className="text-xs text-slate-500 mt-2">za jedno doporučení</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;