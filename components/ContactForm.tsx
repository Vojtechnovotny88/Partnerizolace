
import React from 'react';
import { Phone } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-orange">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden md:flex min-h-[650px]">
          
          {/* CTA Side */}
          <div className="bg-slate-900 text-white p-8 md:p-12 md:w-4/12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Získejte nový zdroj příjmu</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Vyplňte formulář vpravo a my se vám ozveme. Probereme detaily spolupráce a domluvíme termín krátkého zaškolení.
              </p>
            </div>
            
            <div className="mt-8 md:mt-0">
               <p className="text-sm text-slate-400 mb-2">Nebo raději voláte?</p>
               <a href="tel:+420608297469" className="flex items-center gap-3 text-xl font-bold hover:text-brand-orange transition-colors">
                 <Phone size={24} className="text-brand-orange" />
                 +420 608 297 469
               </a>
            </div>
          </div>

          {/* Form Side - JotForm Embed */}
          <div className="md:w-8/12 bg-white relative">
            <iframe
              id="JotFormIFrame-253281861020348"
              title="Partner Program Form"
              src="https://form.jotform.com/253281861020348"
              allowTransparency={true}
              allow="geolocation; microphone; camera"
              className="w-full h-full border-none min-h-[650px]"
              scrolling="yes"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
