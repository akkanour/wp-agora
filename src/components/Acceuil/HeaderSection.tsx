import React, { useState, useEffect } from 'react';

const HeaderSection: React.FC = () => {
  const images = ['/bg-1.png', '/gs.jpg']; // Liste des images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Changer d'image toutes les 5 secondes
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Nettoyage de l'intervalle au démontage du composant
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative flex flex-col w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ 
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'  // Applique 'fixed' seulement sur les écrans larges
      }}
    >
      {/* Overlay sombre pour un meilleur contraste du texte */}
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      
      {/* Section de contenu */}
      <div className="relative z-10 flex flex-col items-start justify-center w-full h-full text-white px-4 pt-12 sm:px-6 md:px-12 lg:px-24">
        <header className="space-y-2">
          {currentImageIndex === 0 ? (
            <>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                AGORA TECHNOLOGY protect <br /> your business
              </h1>
              <p className="mt-4 text-lg md:text-2xl leading-relaxed">
                Nous veillons sur vos données sensibles
              </p>
            </>
          ) : (
            <>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                Managed IT Security Services
              </h1>
              <p className="mt-4 text-lg md:text-2xl leading-relaxed">
                Protect your business with Total Secure Technology's managed IT security services
              </p>
            </>
          )}
        </header>

        {/* Boutons d'action */}
        <div className="mt-6 flex flex-wrap gap-4">
          <a 
            href="/en-savoir-plus" 
            className="bg-[#024CAA] hover:bg-[#1089FF] text-black font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out"
          >
            En savoir +
          </a>
          <a 
            href="/demander-devis" 
            className="bg-white text-black hover:bg-green-800 font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
