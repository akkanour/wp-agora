import React from 'react';

const HeaderSection: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full h-screen bg-gradient-to-b "
    style={{ backgroundImage: "url('./bg-texture.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-start justify-center w-full h-full px-8 py-20 max-w-5xl mx-auto">
        <div className="highlight-container text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl  text-[#2D2927]">
            Innovation et{' '}
            <span className="highlight text-secondary-white">protection</span>{' '}
            <span className="highlight text-[#0135C6]">de données</span>{' '}
            critiques
          </h1>
          <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl font-medium text-[#2D2927]">
            avec{' '}
            <span className="highlight-yellow font-bold text-[#FFD45C]">
              AGORA TECHNOLOGY
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#2D2927]">
            Propulsez votre entreprise grâce à des solutions adaptées à vos
            besoins spécifiques en infrastructure et cybersécurité.
          </p>
          <div className="button-container mt-8 flex gap-4">
            <a
              href="/en-savoir-plus"
              className="button py-3 px-6 text-white font-semibold rounded-md transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: '#0135C6',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              En savoir plus
            </a>
            <a
              href="/contactez-nous"
              className="button py-3 px-6 font-semibold rounded-md transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: '#FFD45C',
                color: '#2D2927',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeaderSection;
