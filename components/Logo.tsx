import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img
      src="https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/main/img/logo/logo-ecos-color-1.png"
      alt="Logo de ECOS del HIELO"
      className={className}
    />
  );
};

export default Logo;