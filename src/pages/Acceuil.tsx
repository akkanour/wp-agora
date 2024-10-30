// @pages/Acceuil.tsx
import React from 'react';

const Acceuil: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-[url('/gs.jpg')] md:bg-[url('/gs.jpg')]">
      <div className="absolute inset-0 bg-black opacity-80"></div> {/* Overlay plus sombre */}

      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left text-white px-6 pt-20 md:px-12 lg:px-24">
        <header className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            AGORA TECHNOLOGY protect <br /> your business
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Nous veillons sur vos données sensibles
          </p>
        </header>

        {/* Boutons d'action */}
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="/en-savoir-plus" className="bg-[#FFD45C] hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out">
            En savoir +
          </a>
          <a href="/demander-devis" className="bg-white text-black hover:bg-[#B6F1FF] font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out">
            Demander un devis
          </a>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
