import React, { useState } from "react";

const InterventionSurIncident: React.FC = () => {
  return (
    <div className="px-8  mt-20 min-h-screen grid justify-center items-center">
      {/* Conteneur de texte et services placé strictement à gauche */}
      <div className="text-left max-w-xl">
        <h1 className="text-5xl font-extrabold text-[#2129] ">Nos Services</h1>
        <p className="text-lg text-gray-300 mb-8">
          Nous Offrons une Large Variété de Services Informatiques
        </p>
        
        {/* Liste des services alignée strictement à gauche */}
        <div className="space-y-4">
          <ServiceAccordion
            icon="/icons/administration.png"
            title="Déploiement et Administration"
            description="Installer, configurer et maintenir les systèmes logiciels et l'infrastructure."
          />
          <ServiceAccordion
            icon="/icons/installation.png"
            title="Reconfiguration ou Réinstallation"
            description="Études de faisabilité, des conseils, des mises à niveau logicielles, des installations, des tests et des formations."
          />
          <ServiceAccordion
            icon="/icons/réseau.png"
            title="Interconnexion de votre réseau"
            description="Configuration de routeurs et de pare-feu, mise en place de certificats SSL, publication de services tels que le courrier électronique."
          />
          <ServiceAccordion
            icon="/icons/sécurité-donnée.png"
            title="Sécurisation des données stockées et transmises"
            description="Cryptographie, authentification, intégrité des données, sauvegarde et récupération de données."
          />
          <ServiceAccordion
            icon="/icons/intervention.png"
            title="Intervention au cas de problème"
            description="Surveillance, détection d'incidents, analyse des causes, résolution et coordination en cas de sinistre."
          />
          <ServiceAccordion
            icon="/icons/service-web.png"
            title="Publication des services Web, Messagerie"
            description="Configuration de serveurs proxy, de serveurs DNS, et publication des services."
          />
        </div>
      </div>

      {/* Espace à droite pour un futur motif */}
      <div className="flex-grow">
        
      </div>
    </div>
  );
};

interface ServiceAccordionProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceAccordion: React.FC<ServiceAccordionProps> = ({ icon, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleOpen}
      className={`cursor-pointer p-4 rounded-lg shadow-lg transition-all duration-300 bg-white max-w-md w-full ${
        isOpen ? "border-l-4 border-[#1089FF]" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={icon} alt={title} className="w-10 h-10 mr-4" />
          <h3 className="text-lg font-semibold text-[#23374D]">{title}</h3>
        </div>
        <span className={`transform ${isOpen ? "rotate-180" : "rotate-0"} text-[#23374D]`}>
          {isOpen ? "▲" : "▼"}
        </span>
      </div>
      {isOpen && (
        <p className="text-sm text-gray-600 mt-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default InterventionSurIncident;
