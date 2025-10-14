

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('https://raw.githubusercontent.com/juliperruchoud/ecosdelhielo/cerro_huiliche/img/excursiones/ea25demayo/estancia_25demayo%20(4).jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Sobre ECOS del HIELO
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Tu conexión con la aventura patagónica.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{color: '#1D2D56'}}>
              Tu Viaje a la Patagonia, Simplificado
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                En Ecos del Hielo somos agentes locales que colaboran con todas las agencias y prestadores de El Calafate para ofrecerte la mejor excursión disponible, al mejor precio y con disponibilidad real.
              </p>
              <p className="mb-4">
                No somos una agencia más: somos tu aliado en la Patagonia, buscando la experiencia perfecta según tus tiempos, intereses y presupuesto.
              </p>
              <p className="mb-4">
                En Ecos del Hielo reunimos la oferta de prestadores habilitados de El Calafate y la ponemos al alcance de un clic.
              </p>
              <p className="mb-4">
                Cada excursión incluye “Calculá tu tarifa”: elegís fecha, cargás edades, sumás opcionales y obtenés el total estimado al instante. Trabajamos con precios y políticas visibles, soporte por WhatsApp y coordinación completa con operadores verificados.
              </p>
            </div>
          </div>
          
           <div className="max-w-5xl mx-auto">
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold" style={{color: '#1D2D56'}}>
                  Nuestros Diferenciales
                </h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                 <div className="bg-blue-50 p-6 rounded-lg flex flex-col">
                     <h3 className="text-xl font-bold text-blue-800 mb-2">Prestadores Habilitados</h3>
                     <p className="text-blue-900 whitespace-pre-line text-left flex-grow">
                        Red de operadores locales habilitados, con seguros y permisos al día.
                        Solo trabajamos con empresas verificadas.
                     </p>
                 </div>
                 <div className="bg-green-50 p-6 rounded-lg flex flex-col">
                     <h3 className="text-xl font-bold text-green-800 mb-2">Precios al Detalle</h3>
                     <p className="text-green-900 whitespace-pre-line text-left flex-grow">
                        Calculamos el valor exacto según fecha, edad, y tipo de excursión.
                        Sin sorpresas ni cargos ocultos.
                     </p>
                 </div>
                 <div className="bg-yellow-50 p-6 rounded-lg flex flex-col">
                     <h3 className="text-xl font-bold text-yellow-800 mb-2">Políticas Claras</h3>
                     <p className="text-yellow-900 whitespace-pre-line text-left flex-grow">
                        Información transparente antes de reservar.
                        Condiciones, cambios y cancelaciones siempre visibles.
                     </p>
                 </div>
                 <div className="bg-red-50 p-6 rounded-lg flex flex-col">
                     <h3 className="text-xl font-bold text-red-800 mb-2">Asesoramiento Personalizado</h3>
                     <p className="text-red-900 whitespace-pre-line text-left flex-grow">
                        Te ayudamos a elegir la mejor excursión para vos.
                        Recomendaciones reales, basadas en experiencia local.
                     </p>
                 </div>
             </div>
           </div>

        </div>
      </div>
    </>
  );
};

export default AboutPage;
