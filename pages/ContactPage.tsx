import React, { useState } from 'react';
import { WHATSAPP_BUSINESS_LINK } from '../constants';
import MailIcon from '../components/icons/MailIcon';
import PhoneIcon from '../components/icons/PhoneIcon';
import InstagramIcon from '../components/icons/InstagramIcon';

const ContactPage: React.FC = () => {
  const mailToLink = "mailto:info@ecosdelhielo.com?subject=Consulta sobre excursiones";
  const formspreeEndpoint = 'https://formspree.io/f/mgvnnbjp';
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        form.reset();
        setStatus('success');
      } else {
        throw new Error('Error al enviar');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: '#1D2D56' }}>
          Contactanos
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          ¿Tenés alguna duda o querés armar un viaje a tu medida? ¡Estamos para ayudarte! Envianos tu consulta y te responderemos a la brevedad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* FORMULARIO */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 order-2 md:order-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Envianos un mensaje</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre y Apellido</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">Whatsapp (Opcional)</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full font-bold py-3 px-6 rounded-lg transition-colors duration-200 
                  ${status === 'sending' ? 'bg-gray-400' : 'bg-slate-800 hover:bg-slate-900 text-white'}`}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </div>

            {/* Mensajes de estado */}
            {status === 'success' && (
              <p className="text-green-600 text-center font-medium mt-3">
                ✅ Tu mensaje fue enviado correctamente.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center font-medium mt-3">
                ❌ Ocurrió un error. Por favor, intentá nuevamente.
              </p>
            )}
          </form>
        </div>

        {/* BOTONES E INFO */}
        <div className="space-y-10 order-1 md:order-2">
            <div className="space-y-4 max-w-sm mx-auto md:mx-0">
                <h3 className="text-xl font-bold text-gray-800 text-center">Nuestro contacto:</h3>
                <a
                    href={WHATSAPP_BUSINESS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-green-500 text-white font-bold py-4 px-6 rounded-lg hover:bg-green-600 transition-colors duration-200 text-xl shadow-md"
                >
                    Contactar por WhatsApp
                </a>
            </div>
            
            <div className="space-y-6 max-w-sm mx-auto md:mx-0">
                <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800">Nuestra Información de Contacto</h3>
                </div>
                <div className="space-y-4 bg-gray-50 p-6 rounded-lg border">
                    <div className="flex items-start space-x-4">
                        <MailIcon className="h-6 w-6 text-gray-500 flex-shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold text-gray-800">Información General</p>
                            <a href="mailto:info@ecosdelhielo.com" className="block text-blue-600 hover:underline">info@ecosdelhielo.com</a>
                        </div>
                    </div>
                     <div className="flex items-start space-x-4">
                        <MailIcon className="h-6 w-6 text-gray-500 flex-shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold text-gray-800">Reservas</p>
                            <a href="mailto:reservas@ecosdelhielo.com" className="block text-blue-600 hover:underline">reservas@ecosdelhielo.com</a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <PhoneIcon className="h-6 w-6 text-gray-500 flex-shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold text-gray-800">Teléfono</p>
                            <a href="tel:+5493416528410" className="block text-blue-600 hover:underline">+54 9 3416528410</a>
                        </div>
                    </div>
                </div>
                <a 
                    href="https://www.instagram.com/ecosdelhielo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold py-4 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200 text-xl shadow-md"
                >
                    <InstagramIcon className="h-6 w-6 mr-3" />
                    Seguinos en Instagram
                </a>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;