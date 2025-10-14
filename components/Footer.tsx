
import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from './icons/InstagramIcon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whiteLogoUrl = "https://github.com/ecosdelhielo/ecosdelhielo/blob/main/img/logo/logo-ecos-blanco-1.png?raw=true";
  const instagramUrl = "https://www.instagram.com/ecosdelhielo/";

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center">
            {/* Logo */}
            <Link to="/" className="mb-6">
                <img 
                  src={whiteLogoUrl} 
                  alt="ECOS del HIELO Logo en blanco" 
                  className="h-16 w-auto" 
                  loading="lazy"
                  decoding="async"
                />
            </Link>

            {/* Navigation Links */}
            <nav className="flex justify-center space-x-6 mb-6">
               <Link to="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link>
               <Link to="/excursiones" className="text-gray-300 hover:text-white transition-colors">Excursiones</Link>
               <Link to="/nosotros" className="text-gray-300 hover:text-white transition-colors">Nosotros</Link>
               <Link to="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</Link>
            </nav>

            {/* Social Media Links */}
            <div className="flex justify-center mb-6">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguinos en Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <InstagramIcon className="h-7 w-7" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400 text-sm">
              <p>&copy; {currentYear} ECOS del HIELO. Todos los derechos reservados.</p>
              <p className="mt-1">Argentina.</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
