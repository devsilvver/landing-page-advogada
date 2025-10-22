import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800">Dra. Juliana Costa</h3>
            <p className="text-sm text-gray-500">Advocacia & Consultoria Jurídica</p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">LinkedIn</a>
            <a href="mailto:contato@jcosta.adv.br" className="text-gray-500 hover:text-amber-600 transition-colors">Email</a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Juliana Costa Advocacia. Todos os direitos reservados.</p>
          <p className="mt-1">OAB/SP 123.456</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;