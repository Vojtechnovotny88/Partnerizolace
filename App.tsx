import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import Calculator from './components/Calculator';
import TargetAudience from './components/TargetAudience';
import BenefitsRequirements from './components/BenefitsRequirements';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyUs />
        <Calculator />
        <TargetAudience />
        <BenefitsRequirements />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;