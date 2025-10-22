import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Áreas de Atuação' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Juliana Costa</a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
             <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={`${isScrolled ? 'text-gray-600' : 'text-gray-200'} hover:text-amber-600 transition-colors duration-300`}>{link.label}</a>
          ))}
        </nav>
        
        <button className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;