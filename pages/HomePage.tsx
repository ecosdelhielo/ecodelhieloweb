
import React from 'react';
import { Link } from 'react-router-dom';
import { excursions } from '../data/excursions';
import ExcursionCard from '../components/ExcursionCard';
import ReviewsSection from '../components/ReviewsSection';

const HomePage: React.FC = () => {
  
  const featuredExcursionIds = [
    "pasarelas-perito-moreno",
    "minitrekking",
    "mayo-spirit-trek",
    "nativos-experience",
    "todo-glaciares",
    "estancia-25-de-mayo"
  ];

  const featuredExcursions = featuredExcursionIds
    .map(id => excursions.find(ex => ex.id === id))
    .filter(excursion => excursion !== undefined);

  const activityMessages = [
    "Popular esta semana",
    "Consultado hace 5 minutos",
    "Alta demanda",
    "Visto hace 8 minutos",
    "3 personas viendo ahora",
    "Reservado hace 1 hora"
  ];

  return (
    <>
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/pasarelas-glaciar-perito-moreno/glaciar-3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Viví la Magia de la Patagonia
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Aventuras inolvidables en el corazón de los glaciares.
          </p>
          <Link
            to="/excursiones"
            className="mt-8 inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-all duration-300 text-lg shadow-lg transform hover:scale-105"
          >
            Explorá las Excursiones
          </Link>
        </div>
      </div>

      {/* Featured Excursions Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{color: '#1D2D56'}}>
            Nuestras Aventuras Destacadas
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Una selección de las excursiones más elegidas para vivir El Calafate al máximo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExcursions.map((excursion, index) => (
            excursion && <ExcursionCard 
                            key={excursion.id} 
                            excursion={excursion} 
                            activityText={activityMessages[index % activityMessages.length]}
                         />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link 
              to="/excursiones" 
              className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg shadow-md hover:shadow-lg"
          >
              Ver Todas las Excursiones
          </Link>
        </div>
      </div>
      
      {/* Reviews Section */}
      <ReviewsSection />
    </>
  );
};

export default HomePage;