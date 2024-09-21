import React from 'react';
import { Building, Phone } from "lucide-react";
import ContactCard from '../ContactCard/ContactCard';

const ContactSection = () => (
  <section id="contato" className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Entre em contato</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactCard icon={<Building className="h-12 w-12 text-yellow-400 mb-4" />} title="Visite-nos" description={<>Rua Tecnológica, Cidadela <br />Cachoeira Paulista</>} color="yellow" />
        <ContactCard icon={<Phone className="h-12 w-12 text-orange-400 mb-4" />} title="Contate-nos" description={<>Telefone: (84) 90000-0000<br />Email: info@systemlab.com</>} color="orange" />
      </div>
    </div>
  </section>
);

export default ContactSection;

