import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre Mim</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Dra. Juliana Costa" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Olá! Sou a Dra. Juliana Costa, uma advogada dedicada a oferecer soluções jurídicas personalizadas e eficientes. Minha missão é garantir que seus direitos sejam defendidos com a máxima competência, ética e transparência, buscando sempre o melhor resultado para cada caso.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Com sólida experiência em diversas áreas do direito, atuo com foco no cliente, construindo uma relação de confiança e oferecendo um atendimento claro e objetivo. Estou comprometida em guiar meus clientes através de processos legais complexos com segurança e tranquilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;