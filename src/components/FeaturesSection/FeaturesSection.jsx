import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Shield, BarChart } from "lucide-react";

const FeaturesSection = () => (
  <section id="servicos" className="container mx-auto px-4 py-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Por que escolher System - Lab?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard icon={<Zap className="h-12 w-12 text-blue-400 mb-4" />} title="Praticidade" description="Verifique os resultados dos seus Exames Online." color="blue" />
      <FeatureCard icon={<Shield className="h-12 w-12 text-green-400 mb-4" />} title="Coleta Domiciliar" description="Agende sua coleta segura através do atendimento via Watssap" color="green" />
      <FeatureCard icon={<BarChart className="h-12 w-12 text-purple-400 mb-4" />} title="Para sua comodidade" description="Oferecemos alguns serviços online, mais praticidade e agilidade no seu atendimento." color="purple" />
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description, color }) => (
  <Card className={`bg-gray-800 border-gray-700 hover:border-${color}-500 transition duration-300`}>
    <CardHeader>
      {icon}
      <CardTitle className={`text-xl md:text-2xl text-${color}-400`}>{title}</CardTitle>
      <CardDescription className="text-gray-300">{description}</CardDescription>
    </CardHeader>
  </Card>
);

export default FeaturesSection;