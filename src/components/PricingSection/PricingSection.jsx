import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Mensal",
      monthlyPrice: 200,
      annualPrice: 2400,
      features: ["Acesso ao System - Lab", "Treinamento", "", ""],
      color: "blue"
    },
    {
      name: "Semestral",
      monthlyPrice: 230,
      annualPrice: 2760,
      features: ["Acesso ao System - Lab", "Treinamento", "Suporte", ""],
      color: "purple"
    },
    {
      name: "Anual",
      monthlyPrice: 250,
      annualPrice: 3000,
      features: ["Acesso ao System - Lab", "Treinamento", "Suporte", "Atualizações"],
      color: "pink"
    }
  ];

  return (
    <section id="planos" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Escolha o seu plano</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`bg-gray-800 border-gray-700 hover:border-${plan.color}-500 transition duration-300`}>
              <CardHeader>
                <CardTitle className={`text-2xl text-${plan.color}-400`}>{plan.name}</CardTitle>
                <CardDescription className="text-gray-300">
                  <span className={`text-3xl font-bold text-${plan.color}-400`}>$ {plan.monthlyPrice}</span> / Mês
                  <br />
                  <span className="text-sm">ou $ {plan.annualPrice} / Ano</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-300">
                      <Check className={`h-5 w-5 text-${plan.color}-400 mr-2`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full bg-${plan.color}-600 hover:bg-${plan.color}-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-neon-${plan.color} transition duration-300`}>
                Escolher {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;