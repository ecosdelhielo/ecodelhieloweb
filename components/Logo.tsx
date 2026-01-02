import React from "react";

type Props = {
  className?: string;
};

export default function Logo({ className = "" }: Props) {
  return (
    <img
      src="/logoecos1.png"
      alt="Logo de ECOS del HIELO"
      className={className}
    />
  );
}

export default Logo;
