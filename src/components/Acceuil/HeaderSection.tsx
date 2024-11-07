// @components/Acceuil_components/HeaderSection.tsx
import React from 'react';

const HeaderSection: React.FC = () => {
  return (
    <div className="flex flex-col py-24 px-6 relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/gs.jpg')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      
      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-white px-6 pt-20 md:px-12 lg:px-24">
        <header className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            AGORA TECHNOLOGY protect <br /> your business
          </h1>
          <p className="mt-4 text-lg md:text-2xl leading-relaxed">
            Nous veillons sur vos données sensibles
          </p>
        </header>

        {/* Buttons Section */}
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
