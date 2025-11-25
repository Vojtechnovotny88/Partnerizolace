
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-bold text-white text-lg">Partner<span className="text-brand-orange">Izolace</span></span>
          <p className="text-sm mt-1">Váš spolehlivý partner v zateplování.</p>
        </div>
        
        <div className="text-sm">
          © {year} Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
