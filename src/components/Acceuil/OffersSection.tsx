import React, { useState } from 'react';

const OffersSection: React.FC = () => {
  return (
    <div
      className="px-6 md:px-12 lg:px-24 min-h-screen flex flex-col md:flex-row bg-center bg-no-repeat bg-auto"
      style={{
        background: 'linear-gradient(270deg, #eeeeee, #e5e5e5, #1089ff, #23374d)',
      }}
    >
      {/* Conteneur de texte et services placé strictement à gauche */}
      <div className="text-left md:m-12 max-w-lg w-full p-6 rounded-lg">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 md:mb-6">Nos Services</h1>
        <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-10">
          Nous Offrons une Large Variété de Services Informatiques
        </p>

        {/* Liste des services alignée strictement à gauche */}
        <div className="space-y-4 md:space-y-6">
          <ServiceAccordion
            title="Déploiement et Administration"
            description="Installer, configurer et maintenir les systèmes logiciels et l'infrastructure."
          />
          <ServiceAccordion
            title="Reconfiguration ou Réinstallation"
            description="Études de faisabilité, des conseils, des mises à niveau logicielles, des installations, des tests et des formations."
          />
          <ServiceAccordion
            title="Interconnexion de votre réseau"
            description="Configuration de routeurs et de pare-feu, mise en place de certificats SSL, publication de services tels que le courrier électronique."
          />
          <ServiceAccordion
            title="Sécurisation des données stockées et transmises"
            description="Cryptographie, authentification, intégrité des données, sauvegarde et récupération de données."
          />
          <ServiceAccordion
            title="Intervention au cas de problème"
            description="Surveillance, détection d'incidents, analyse des causes, résolution et coordination en cas de sinistre."
          />
          <ServiceAccordion
            title="Publication des services Web, Messagerie"
            description="Configuration de serveurs proxy, de serveurs DNS, et publication des services."
          />
        </div>
      </div>

      {/* Espace à droite pour un futur motif, masqué en mode mobile */}
      <div className="hidden md:flex flex-grow"></div>
    </div>
  );
};

interface ServiceAccordionProps {
  title: string;
  description: string;
}

const ServiceAccordion: React.FC<ServiceAccordionProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleOpen}
      className={`cursor-pointer p-4 md:p-5 rounded-lg shadow-lg transition-all duration-300 bg-white max-w-md w-full ${
        isOpen ? 'border-l-4 border-[#1089FF]' : ''
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-md md:text-lg font-semibold text-[#23374D]">{title}</h3>
        <span className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} text-[#23374D]`}>
          {isOpen ? '▲' : '▼'}
        </span>
      </div>
      {isOpen && (
        <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default OffersSection;
