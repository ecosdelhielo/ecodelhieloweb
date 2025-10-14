import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const activeLinkStyle = {
    color: '#3B82F6', // blue-500
    fontWeight: '600'
  };

  // Cierra el menú cuando cambia la ruta
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const MobileNavLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => (
    <NavLink
      to={to}
      className="text-3xl font-bold text-white hover:text-blue-300 transition-colors"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </NavLink>
  );

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex-shrink-0" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
              <Logo className="h-16 w-auto" />
            </Link>
            
            {/* Navegación de Escritorio */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-8">
                <NavLink
                  to="/"
                  className="text-lg font-medium text-gray-600 hover:text-blue-500 transition-colors duration-200"
                  style={({ isActive }) => isActive ? activeLinkStyle : {}}
                >
                  Inicio
                </NavLink>
                <NavLink
                  to="/excursiones"
                  className="text-lg font-medium text-gray-600 hover:text-blue-500 transition-colors duration-200"
                  style={({ isActive }) => isActive ? activeLinkStyle : {}}
                >
                  Excursiones
                </NavLink>
                <NavLink
                  to="/nosotros"
                  className="text-lg font-medium text-gray-600 hover:text-blue-500 transition-colors duration-200"
                  style={({ isActive }) => isActive ? activeLinkStyle : {}}
                >
                  Nosotros
                </NavLink>
                <NavLink
                  to="/contacto"
                  className="text-lg font-medium text-gray-600 hover:text-blue-500 transition-colors duration-200"
                  style={({ isActive }) => isActive ? activeLinkStyle : {}}
                >
                  Contacto
                </NavLink>
              </nav>
            </div>
            
            {/* Botón del Menú Móvil */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <div className="relative h-7 w-7">
                  <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out left-1/2 -translate-x-1/2 ${isMenuOpen ? 'rotate-45 top-3' : 'top-2'}`}></span>
                  <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out left-1/2 -translate-x-1/2 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Panel del Menú Móvil */}
      <div className={`fixed inset-0 z-20 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <MobileNavLink to="/">Inicio</MobileNavLink>
        <MobileNavLink to="/excursiones">Excursiones</MobileNavLink>
        <MobileNavLink to="/nosotros">Nosotros</MobileNavLink>
        <MobileNavLink to="/contacto">Contacto</MobileNavLink>
      </div>
    </>
  );
};

export default Header;