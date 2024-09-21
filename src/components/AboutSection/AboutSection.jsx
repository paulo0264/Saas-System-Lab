import React from 'react';
import { Button } from "@/components/ui/button";

const AboutSection = () => (
  <section id="sobre" className="bg-gray-800 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">Sobre o System - Lab</h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/images/lab.png" alt="About System_Lab" className="rounded-lg shadow-2xl w-full" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-lg md:text-xl text-gray-300 mb-6">System - Lab é uma empresa pioneira de SaaS dedicada a revolucionar as operações de negócios por meio de soluções tecnológicas inovadoras. Nossa equipe de especialistas está comprometida em fornecer ferramentas de ponta que capacitem as organizações a prosperar na era digital.</p>
          <Button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-neon-pink transition duration-300">
          + Saber mais
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;