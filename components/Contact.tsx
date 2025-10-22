import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Entre em Contato</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Pronto para dar o próximo passo? Envie sua mensagem para agendar uma consulta inicial.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-lg border border-gray-200 shadow-sm">
          <form>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Nome Completo</label>
              <input type="text" id="name" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 placeholder-gray-400" placeholder="Seu nome" required />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">E-mail para Contato</label>
              <input type="email" id="email" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 placeholder-gray-400" placeholder="seu@email.com" required />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600">Descreva seu caso</label>
              <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-amber-500 focus:border-amber-500 placeholder-gray-400" placeholder="Gostaria de agendar uma consulta para discutir..."></textarea>
            </div>
            <button type="submit" className="w-full text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-300 font-semibold rounded-lg text-sm px-5 py-3 text-center transition-all duration-300">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;