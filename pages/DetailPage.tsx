
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { excursions } from '../data/excursions';
import DifficultyChip from '../components/DifficultyChip';
import PriceCalculator from '../components/PriceCalculator';
import ExcursionCard from '../components/ExcursionCard';
import ClockIcon from '../components/icons/ClockIcon';
import CalendarIcon from '../components/icons/CalendarIcon';
import CheckIcon from '../components/icons/CheckIcon';
import ShoppingBagIcon from '../components/icons/ShoppingBagIcon';
import ParkFeesModal from '../components/ParkFeesModal';
import InformationCircleIcon from '../components/icons/InformationCircleIcon';
import RestrictionsModal from '../components/RestrictionsModal';
import ExclamationTriangleIcon from '../components/icons/ExclamationTriangleIcon';
import MenuModal from '../components/MenuModal';
import Modal from '../components/Modal';
import { SpegazziniMenu, CaptainsClubDetails, BoxLunchDetails, SalaPremiumDetails, PasarelasDescensoDetails } from '../types';
import SpegazziniMenuDisplay from '../components/SpegazziniMenuDisplay';
import CaptainsClubMenuDisplay from '../components/CaptainsClubMenuDisplay';
import BoxLunchMenuDisplay from '../components/BoxLunchMenuDisplay';
import SalaPremiumMenuDisplay from '../components/SalaPremiumMenuDisplay';
import PasarelasDescensoDisplay from '../components/PasarelasDescensoDisplay';
import DocumentTextIcon from '../components/icons/DocumentTextIcon';
import DocumentationRequirementsModal from '../components/DocumentationRequirementsModal';
import ChevronLeftIcon from '../components/icons/ChevronLeftIcon';
import ChevronRightIcon from '../components/icons/ChevronRightIcon';
import Lightbox from '../components/Lightbox';
import MagnifyingGlassPlusIcon from '../components/icons/MagnifyingGlassPlusIcon';


const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isParkFeeModalOpen, setParkFeeModalOpen] = useState(false);
  const [isRestrictionsModalOpen, setRestrictionsModalOpen] = useState(false);
  const [isMenuModalOpen, setMenuModalOpen] = useState(false);
  const [isDocReqModalOpen, setDocReqModalOpen] = useState(false);
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxStartIndex, setLightboxStartIndex] = useState(0);
  const excursion = excursions.find(e => e.id === id);

  const otherExcursions = useMemo(() => {
    return excursions.filter(e => e.id !== id).slice(0, 3);
  }, [id]);

  const isGourmetOrTodoGlaciares = useMemo(() => 
    excursion?.id === 'todo-glaciares' || excursion?.id === 'glaciares-gourmet',
  [excursion?.id]);

  const handleOpenLightbox = (index: number) => {
    setLightboxStartIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    if (excursion) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === excursion.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (excursion) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? excursion.images.length - 1 : prevIndex - 1
      );
    }
  };

  if (!excursion) {
    return (
        <div className="text-center py-20">
            <h2 className="text-2xl font-bold">Excursión no encontrada</h2>
            <Link to="/" className="mt-4 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600">Volver al Inicio</Link>
        </div>
    );
  }
  
  const hasMenu = excursion.menuDetails;
  const hasDetailedOptionals = excursion.optionalActivities?.some(opt => opt.detailedDescription);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Details & Gallery */}
        <div className="lg:col-span-7">
          <div className="mb-4">
            <Link to="/excursiones" className="text-blue-600 hover:underline">&larr; Volver a todas las excursiones</Link>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6" style={{color: '#1D2D56'}}>{excursion.title}</h1>
          
          {/* Mobile Carousel */}
          <div className="sm:hidden relative mb-8 h-80 rounded-lg overflow-hidden shadow-md">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {excursion.images.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`${excursion.title} - imagen ${index + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              ))}
            </div>

            {excursion.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {excursion.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-colors ${
                        currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`Ir a la imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          
          {/* Desktop Grid */}
           <div className="hidden sm:grid grid-cols-6 grid-rows-2 gap-2 mb-8 h-96">
            {excursion.images.length > 0 && (
                <button onClick={() => handleOpenLightbox(0)} className="col-span-6 row-span-2 sm:col-span-4 rounded-lg overflow-hidden relative group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <img src={excursion.images[0]} alt={`${excursion.title} - imagen 1`} className="object-cover w-full h-full shadow-md transition-transform duration-300 group-hover:scale-105" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <MagnifyingGlassPlusIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </button>
            )}
            {excursion.images.length > 1 && (
                <button onClick={() => handleOpenLightbox(1)} className="hidden sm:block col-span-2 rounded-lg overflow-hidden relative group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <img src={excursion.images[1]} alt={`${excursion.title} - imagen 2`} className="object-cover w-full h-full shadow-md transition-transform duration-300 group-hover:scale-105" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <MagnifyingGlassPlusIcon className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </button>
            )}
            {excursion.images.length > 2 && (
                <button onClick={() => handleOpenLightbox(2)} className="hidden sm:block col-span-2 rounded-lg overflow-hidden relative group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <img src={excursion.images[2]} alt={`${excursion.title} - imagen 3`} className="object-cover w-full h-full shadow-md transition-transform duration-300 group-hover:scale-105" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <MagnifyingGlassPlusIcon className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 my-8">
            <DifficultyChip difficulty={excursion.difficulty} large />
            <div className="flex items-center gap-2 bg-gray-100 text-gray-700 rounded-full px-5 py-2 text-base font-semibold">
                <ClockIcon className="h-5 w-5"/>
                <span>{excursion.duration}</span>
            </div>
             <div className="flex items-center gap-2 bg-gray-100 text-gray-700 rounded-full px-5 py-2 text-base font-semibold">
                <CalendarIcon className="h-5 w-5"/>
                <span>{excursion.schedule}</span>
            </div>
          </div>
          
          <div className="my-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Descripción de la Aventura</h2>
              <div className="text-gray-700 text-lg leading-relaxed prose max-w-none" dangerouslySetInnerHTML={{ __html: excursion.longDescription }} />
          </div>
          
          {hasDetailedOptionals && (
            <div className="my-10">
              <h2 className={`${isGourmetOrTodoGlaciares ? 'text-2xl' : 'text-3xl'} font-bold mb-4 text-gray-800`}>Servicios Opcionales</h2>
              <div className={isGourmetOrTodoGlaciares ? "space-y-4" : "space-y-6"}>
                {excursion.optionalActivities?.map(opt => {
                  if (!opt.detailedDescription) return null;
                  return (
                    <div 
                      key={opt.id} 
                      className={isGourmetOrTodoGlaciares ? "bg-gray-50 p-4 rounded-lg border border-gray-200" : "bg-white p-6 rounded-lg shadow-sm border"}
                    >
                      <h3 
                        className={`${isGourmetOrTodoGlaciares ? 'text-xl' : 'text-2xl'} font-bold mb-2 text-gray-800`}
                      >
                        {opt.name}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{opt.detailedDescription}</p>
                      {opt.modalContent && (
                        <button
                          onClick={() => setOpenModalId(opt.id)}
                          className="font-bold text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          {opt.id.includes('almuerzo') || opt.id.includes('box-lunch') || opt.id.includes('sala-vip') ? 'Ver menú y detalles' : 'Ver más detalles'}
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {excursion.restrictions && (
            <div className="my-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                <ExclamationTriangleIcon className="h-8 w-8 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                    <p className="font-semibold text-red-800">
                        Restricciones importantes antes de comprar.
                    </p>
                    <p className="text-red-700 text-sm">
                        Debido al grado de esfuerzo y dificultad que esta actividad presenta, no podrán participar ciertas personas.
                        <button 
                            onClick={() => setRestrictionsModalOpen(true)}
                            className="font-bold underline hover:text-red-800 focus:outline-none ml-1"
                        >
                            Ver detalle.
                        </button>
                    </p>
                </div>
            </div>
          )}

          {excursion.id === 'torres-del-paine' && (
            <div className="my-8 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start space-x-3">
                <DocumentTextIcon className="h-8 w-8 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                    <p className="font-semibold text-blue-800">
                        ¡Atención! Requisitos para cruzar la frontera a Chile.
                    </p>
                    <p className="text-blue-700 text-sm">
                        Esta excursión requiere documentación específica y trámites anticipados. Es tu responsabilidad cumplir con todos los requisitos.
                        <button 
                            onClick={() => setDocReqModalOpen(true)}
                            className="font-bold underline hover:text-blue-800 focus:outline-none ml-1"
                        >
                            Ver detalle completo.
                        </button>
                    </p>
                </div>
            </div>
          )}

          {excursion.requiresParkEntry && (
            <div className="my-8 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start space-x-3">
                <InformationCircleIcon className="h-7 w-7 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                    <p className="font-semibold text-blue-800">
                        La entrada al Parque Nacional Los Glaciares no está incluida.
                    </p>
                    <p className="text-blue-700 text-sm">
                        Deberás abonarla al ingresar. Podés{' '}
                        <button 
                            onClick={() => setParkFeeModalOpen(true)}
                            className="font-bold underline hover:text-blue-800 focus:outline-none"
                        >
                            consultar las tarifas vigentes aquí.
                        </button>
                    </p>
                </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                    <CheckIcon className="h-7 w-7 mr-3 text-green-500"/>
                    Qué incluye
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-2">
                    {excursion.includes.map(item => (
                      <li key={item}>
                        {item}
                        {hasMenu && (item.toLowerCase().includes('almuerzo') || item.toLowerCase().includes('cena') || item.toLowerCase().includes('comida') || item.toLowerCase().includes('merienda') || item.toLowerCase().includes('vianda')) && (
                          <button
                            onClick={() => setMenuModalOpen(true)}
                            className="ml-2 text-sm text-blue-600 font-semibold hover:underline focus:outline-none"
                            aria-label="Ver menú"
                          >
                            (ver menú)
                          </button>
                        )}
                      </li>
                    ))}
                </ul>
             </div>
             <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                    <ShoppingBagIcon className="h-7 w-7 mr-3 text-blue-500"/>
                    Qué llevar
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-2">
                    {excursion.whatToBring.map(item => <li key={item}>{item}</li>)}
                </ul>
             </div>
          </div>
        </div>
        
        {/* Right Column: Calculator */}
        <div className="lg:col-span-5 mt-10 lg:mt-0">
          <PriceCalculator excursion={excursion} />
        </div>
      </div>

      {/* Other Excursions */}
      <div className="mt-20 pt-10 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-8">Otras excursiones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherExcursions.map(ex => <ExcursionCard key={ex.id} excursion={ex} />)}
        </div>
      </div>
      <ParkFeesModal isOpen={isParkFeeModalOpen} onClose={() => setParkFeeModalOpen(false)} />
      <DocumentationRequirementsModal isOpen={isDocReqModalOpen} onClose={() => setDocReqModalOpen(false)} />
      {excursion.restrictions && (
        <RestrictionsModal
          isOpen={isRestrictionsModalOpen}
          onClose={() => setRestrictionsModalOpen(false)}
          restrictions={excursion.restrictions}
        />
      )}
      {hasMenu && (
        <MenuModal 
          isOpen={isMenuModalOpen} 
          onClose={() => setMenuModalOpen(false)} 
          menu={excursion.menuDetails}
        />
      )}
      
      {/* Lightbox */}
      {isLightboxOpen && (
        <Lightbox
          images={excursion.images}
          startIndex={lightboxStartIndex}
          onClose={() => setLightboxOpen(false)}
          altText={excursion.title}
        />
      )}
      
      {/* Modals for Optional Activities */}
      {excursion.optionalActivities?.map(opt => {
        if (!opt.modalContent || !opt.modalTitle) return null;

        const contentAsObject = opt.modalContent as any;

        if (typeof contentAsObject === 'string') {
          return (
            <Modal
              key={opt.id}
              isOpen={openModalId === opt.id}
              onClose={() => setOpenModalId(null)}
              title={opt.modalTitle}
            >
              <div className="text-gray-700 space-y-4">
                {contentAsObject.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Modal>
          );
        }
        
        if (Array.isArray(contentAsObject)) { // Assumes it's SpegazziniMenu[]
          const menuContent = contentAsObject as SpegazziniMenu[];
          return (
            <Modal
              key={opt.id}
              isOpen={openModalId === opt.id}
              onClose={() => setOpenModalId(null)}
              title={opt.modalTitle}
            >
              <SpegazziniMenuDisplay menus={menuContent} />
            </Modal>
          );
        }
        
        if (typeof contentAsObject === 'object' && !Array.isArray(contentAsObject)) {
           // Pasarelas Check
           if (contentAsObject.whatYouWillDo) {
              const details = opt.modalContent as PasarelasDescensoDetails;
              return (
                <Modal key={opt.id} isOpen={openModalId === opt.id} onClose={() => setOpenModalId(null)} title={opt.modalTitle} >
                  <PasarelasDescensoDisplay details={details} />
                </Modal>
              );
           }
           // Box Lunch Check
           if (contentAsObject.options) {
              const details = opt.modalContent as BoxLunchDetails;
              return (
                <Modal key={opt.id} isOpen={openModalId === opt.id} onClose={() => setOpenModalId(null)} title={opt.modalTitle} >
                  <BoxLunchMenuDisplay details={details} />
                </Modal>
              );
           }
           // Sala Premium vs Captain's Club Check
           if (contentAsObject.menu && Array.isArray(contentAsObject.menu) && contentAsObject.menu.length > 0) {
              // Sala Premium Check (menu items have 'category' and 'item')
              if (contentAsObject.menu[0].item) {
                 const details = opt.modalContent as SalaPremiumDetails;
                 return (
                   <Modal key={opt.id} isOpen={openModalId === opt.id} onClose={() => setOpenModalId(null)} title={opt.modalTitle} >
                     <SalaPremiumMenuDisplay details={details} />
                   </Modal>
                 );
              }
              // Captain's Club Check (menu items have 'title' and 'items')
              if (contentAsObject.menu[0].items) {
                 const details = opt.modalContent as CaptainsClubDetails;
                 return (
                   <Modal key={opt.id} isOpen={openModalId === opt.id} onClose={() => setOpenModalId(null)} title={opt.modalTitle} >
                     <CaptainsClubMenuDisplay details={details} />
                   </Modal>
                 );
              }
           }
        }

        return null;
      })}

    </div>
  );
};

export default DetailPage;
