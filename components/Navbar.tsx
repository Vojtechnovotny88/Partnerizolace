
import React, { useState, useEffect } from 'react';
import { Hammer } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-brand-orange text-white' : 'bg-white text-brand-orange'}`}>
              <Hammer size={24} />
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Partner<span className="text-brand-orange">Izolace</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
