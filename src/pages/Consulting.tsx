// @pages/Consulting.tsx
'use client';

import { FaSearch } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';
import { RiMapPinLine } from 'react-icons/ri';
import { HiOutlineDocumentReport } from 'react-icons/hi';

const Consulting: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto px-6 md:px-16 lg:px-32 xl:px-44">
        
        {/* Header Section */}
        <div className="text-justify mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
            Consulting
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
            Du fait qu’aujourd’hui l’informatique est devenue le moteur de communication
            dans votre entreprise, AGORA TECHNOLOGY a mis à vos services des consultants
            prêts à intervenir et à vous accompagner afin de résoudre les problèmes liés
            aux services suivants :
          </p>
        </div>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1 */}
          <ServiceCard
            icon={<FaSearch className="text-blue-900 text-4xl md:text-5xl" />}
            title="Étude des expressions des besoins"
          />

          {/* Card 2 */}
          <ServiceCard
            icon={<GiNetworkBars className="text-blue-900 text-4xl md:text-5xl" />}
            title="Étude et intégration des Solutions Stratégiques"
          />

          {/* Card 3 */}
          <ServiceCard
            icon={<RiMapPinLine className="text-blue-900 text-4xl md:text-5xl" />}
            title="Définir le périmètre des Prestations"
          />

          {/* Card 4 */}
          <ServiceCard
            icon={<HiOutlineDocumentReport className="text-blue-900 text-4xl md:text-5xl" />}
            title="Rapports et Livrables"
          />
          
        </div>
      </div>
    </section>
  );
};

// ServiceCard Component
const ServiceCard: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="bg-white shadow-lg p-8 rounded-xl flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
    <div className="h-24 w-24 md:h-32 md:w-32 bg-gray-100 rounded-full mb-6 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-lg md:text-xl font-semibold text-blue-900">
      {title}
    </h3>
  </div>
);

export default Consulting;
