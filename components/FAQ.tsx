
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-slate-900">{question}</span>
        {isOpen ? <ChevronUp className="text-brand-orange" /> : <ChevronDown className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-600 leading-relaxed animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Musím něco platit nebo investovat?",
      answer: "Ne. Spolupráce je zcela bez poplatků a bez závazků. Vy pouze doporučujete, my platíme vám. Nepotřebujete žádné vlastní nářadí ani materiál."
    },
    {
      question: "Je školení povinné?",
      answer: "Ano, krátké osobní nebo online školení je nutné. Chceme, abyste rozuměli tomu, co nabízíte, a dokázali klientovi správně vysvětlit výhody foukané izolace. Díky tomu uzavřete více obchodů a budete působit profesionálně."
    },
    {
      question: "Kolik si mohu vydělat?",
      answer: "Průměrná provize je okolo 7 000 Kč za jednu zakázku (cca 100 m² půdy). Horní limit neexistuje – čím více doporučení, tím vyšší výdělek. U velkých objektů může být provize i v desítkách tisíc."
    },
    {
      question: "Co když klient nakonec zateplení nebude chtít?",
      answer: "Nic se neděje, klient má standardně dobu na odstoupení od smlouvy, případně jsme vždy otevření podmínky upravit."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Často kladené otázky
        </h2>
        <div className="bg-white">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
