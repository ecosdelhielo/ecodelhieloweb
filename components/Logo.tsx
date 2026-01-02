import React from "react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logoecos1.png"
      alt="Logo de ECOS del HIELO"
      className={className}
    />
  );
}
