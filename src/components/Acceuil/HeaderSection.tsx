import React, { useState, useEffect } from 'react';

const HeaderSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Détecter si l'utilisateur est sur un appareil mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex flex-col w-full h-screen">
      {/* Vidéo en arrière-plan avec z-0 */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={isMobile ? './videos/vid-bg-mobile.mp4' : './videos/vid-bg-4k.mp4'}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Contenu principal */}
      <div className="relative flex flex-col justify-center w-full h-full px-4 sm:px-6 lg:px-0 mx-auto max-w-7xl z-20">
    <div className={`${isMobile ? 'w-full' : 'max-w-[50%]'} transition-all duration-300`}>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
        Innovation et protection de données critiques
      </h1>
      <p className="mt-6 text-base sm:text-lg lg:text-xl text-white">
        Propulsez votre entreprise grâce à des solutions adaptées...
      </p>
      <div className="button-container mt-8 flex gap-4">
        <a href="/en-savoir-plus" className="button py-3 px-6 rounded-[4px] text-white" style={{ backgroundColor: '#0135C6' }}>
          En savoir plus
        </a>
      </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
