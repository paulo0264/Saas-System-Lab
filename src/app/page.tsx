import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Header from '../components/Header/Header';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import AboutSection from '../components/AboutSection/AboutSection';
import PricingSection from '../components/PricingSection/PricingSection';
import ContactSection from '../components/ContactSection/ContactSection';
import CTASection from '../components/CTASection/CTASection';
import Footer from '../components/Footer/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <PricingSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

const HeroSection = () => (
  <section id="home" className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
    Bem-vindo ao System_Lab</h1>
    <p className="text-lg md:text-xl text-gray-300 mb-8">No System - Lab você pode escolher entre fazer exames sem filas em nossas unidades ou então no conforto de sua casa ou escritório, solictando a coleta domiciliar.</p>
    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-neon-blue transition duration-300">
      Entrar em Contato <ChevronRight className="ml-2 h-5 w-5" />
    </Button>
  </section>
);

export default Index;
