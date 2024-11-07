// @pages/IntegrationERP.tsx
import React, { useState } from "react";

const IntegrationERP: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="p-8 bg-[#F8FAFC] h-screen flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#23374D] mb-4">Nos Services</h1>
        <p className="text-lg text-[#5A6978] max-w-2xl mx-auto">
          Du fait qu’aujourd’hui l’informatique est devenue le moteur de communication dans votre entreprise, 
          AGORA TECHNOLOGY a mis à vos services des consultants prêts à intervenir et à vous accompagner afin de 
          résoudre les problèmes liés aux services suivants :
        </p>
      </div>

      {/* Circular Trigger Button */}
      <div 
        onClick={toggleModal}
        className="flex items-center justify-center w-32 h-32 bg-[#23374D] text-white rounded-full shadow-lg text-center cursor-pointer transition-transform transform hover:scale-110"
      >
        <span className="text-xl font-semibold">Voir Services</span>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 mt-24 scroll-hidden">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6 relative">
            <button 
              onClick={toggleModal} 
              className="absolute top-3 right-3 text-gray-600 text-2xl font-bold focus:outline-none"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-[#23374D] mb-4">Nos Services</h2>
            <ul className="space-y-4">
              <ServiceItem title="Intervention Sur Incident" />
              <ServiceItem title="Contrat De Support Et Maintenance" />
              <ServiceItem title="Infogérance Globale Ou Partielle"  />
              <ServiceItem title="Ressource En Régie"/>
              <ServiceItem title="Intégration ERP " />
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

interface ServiceItemProps {
  title: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title }) => {
  return (
    <li className={`p-4 rounded-lg shadow-md`}>
      <h3 className="text-lg font-semibold text-[#23374D]">{title}</h3>
    </li>
  );
};

export default IntegrationERP;
