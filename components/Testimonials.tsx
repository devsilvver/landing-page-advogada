import React from 'react';

const testimonials = [
  {
    quote: "A Dra. Juliana foi fundamental na resolução do nosso caso. Sua competência e dedicação nos trouxeram a tranquilidade que precisávamos. Profissional exemplar!",
    name: 'Carlos Almeida',
    company: 'Cliente de Direito de Família',
  },
  {
    quote: "Recebemos uma assessoria jurídica completa para nossa empresa. A Dra. Juliana demonstrou profundo conhecimento e nos guiou com segurança em todas as etapas.",
    name: 'Beatriz Martins',
    company: 'CEO, InovaTech',
  },
  {
    quote: "O profissionalismo e a transparência no processo de compra do meu imóvel foram impecáveis. Recomendo fortemente os serviços da Dra. Juliana.",
    name: 'Fernando Guimarães',
    company: 'Cliente de Direito Imobiliário',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Depoimentos</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A confiança e a satisfação dos meus clientes são meu maior incentivo.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-200 flex flex-col">
              <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;