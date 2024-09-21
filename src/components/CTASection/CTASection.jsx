import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pronto para transformar seu negócio?</h2>
      <p className="text-lg md:text-xl text-gray-200 mb-8">Junte-se a milhares de clientes satisfeitos e leve suas operações para o próximo nível</p>
      <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-neon-white transition duration-300">
        Comece agora
      </Button>
    </div>
  </section>
);

export default CTASection;