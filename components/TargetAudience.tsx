import React from 'react';
import { Wrench, Briefcase, Building2, Users } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const audiences = [
    {
      icon: Wrench,
      title: "Řemeslníci",
      description: "Topenáři, elektrikáři, sádrokartonáři, truhláři, pokrývači... Pokud vidíte stropy a půdy, vidíte peníze.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Briefcase,
      title: "Obchodní zástupci",
      description: "Finanční poradci a realitní makléři. Nabídněte klientům přidanou hodnotu – úsporu energií.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Building2,
      title: "Stavební firmy",
      description: "Menší firmy, které chtějí rozšířit portfolio bez nákupu drahých technologií.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Users,
      title: "Správci & Kontakty",
      description: "Správci nemovitostí, předsedové SVJ a lidé s širokou sítí kontaktů v okolí.",
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Pro koho je spolupráce ideální?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tato spolupráce je vhodná pro každého, kdo je spolehlivý, komunikativní a pohybuje se mezi lidmi, kteří bydlí v rodinných domech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-brand-orange/30 hover:shadow-lg transition-all duration-300">
              <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-brand-orange/10 rounded-lg p-4 max-w-2xl mx-auto text-slate-800 font-medium">
          💡 Nevadí, pokud neznáte detaily o izolaci – vše vás naučíme na krátkém školení.
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;