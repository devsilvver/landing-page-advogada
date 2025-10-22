import React from 'react';
import { FamilyLawIcon } from './icons/FamilyLawIcon';
import { BusinessLawIcon } from './icons/BusinessLawIcon';
import { RealEstateIcon } from './icons/RealEstateIcon';
import { CriminalLawIcon } from './icons/CriminalLawIcon';

const services = [
  {
    icon: <FamilyLawIcon className="h-10 w-10 text-amber-600 mb-4" />,
    title: 'Direito de Família',
    description: 'Atuação em casos de divórcio, guarda de filhos, pensão alimentícia e inventários, buscando sempre a solução mais harmoniosa.',
  },
  {
    icon: <BusinessLawIcon className="h-10 w-10 text-amber-600 mb-4" />,
    title: 'Direito Empresarial',
    description: 'Assessoria jurídica para empresas, incluindo contratos, questões societárias e conformidade legal para o seu negócio.',
  },
  {
    icon: <RealEstateIcon className="h-10 w-10 text-amber-600 mb-4" />,
    title: 'Direito Imobiliário',
    description: 'Consultoria completa em transações imobiliárias, como compra, venda, aluguel e regularização de imóveis.',
  },
  {
    icon: <CriminalLawIcon className="h-10 w-10 text-amber-600 mb-4" />,
    title: 'Direito Criminal',
    description: 'Defesa em processos criminais, garantindo um julgamento justo e a proteção de seus direitos fundamentais.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Áreas de Atuação</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Oferecendo assessoria jurídica especializada para proteger seus interesses.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;