import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}>
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white">Dra. Juliana Costa</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200">Advocacia com excelência e dedicação. Defendendo seus direitos e interesses.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#servicos" onClick={(e) => handleNavClick(e, '#servicos')} className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Áreas de Atuação
            </a>
            <a href="#contato" onClick={(e) => handleNavClick(e, '#contato')} className="border border-gray-300 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-700 transition-all duration-300 w-full sm:w-auto">
              Agende uma Consulta
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;