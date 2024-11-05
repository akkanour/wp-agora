// @pages/Consulting.tsx
'use client';

import { FaSearch } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';
import { RiMapPinLine } from 'react-icons/ri';
import { HiOutlineDocumentReport } from 'react-icons/hi';

const Consulting: React.FC = () => {
  return (
    <>
      <div className="py-16 bg-blue-50">
        <div className="px-6 md:px-16 lg:px-32 xl:px-44 mx-auto">
          {/* Section de texte à gauche */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Consulting</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                Du fait qu’aujourd’hui l’informatique est devenue le moteur de communication
                dans votre entreprise, AGORA TECHNOLOGY a mis à vos services des consultants
                prêts à intervenir et à vous accompagner afin de résoudre les problèmes liés
                aux services suivants :
              </p>
            </div>

            {/* Grille des cartes de services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:w-1/2">
              
              {/* Carte 1 */}
              <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center">
                <div className="h-24 w-24 md:h-32 md:w-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                  <FaSearch className="text-blue-900 text-4xl md:text-5xl" />
                </div>
                <h3 className="text-md md:text-lg font-semibold text-blue-900">Étude des expressions des besoins</h3>
              </div>

              {/* Carte 2 */}
              <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center">
                <div className="h-24 w-24 md:h-32 md:w-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                  <GiNetworkBars className="text-blue-900 text-4xl md:text-5xl" />
                </div>
                <h3 className="text-md md:text-lg font-semibold text-blue-900">Étude et intégration des Solutions Stratégiques</h3>
              </div>

              {/* Carte 3 */}
              <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center">
                <div className="h-24 w-24 md:h-32 md:w-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                  <RiMapPinLine className="text-blue-900 text-4xl md:text-5xl" />
                </div>
                <h3 className="text-md md:text-lg font-semibold text-blue-900">Définir le périmètre des Prestations</h3>
              </div>

              {/* Carte 4 */}
              <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center">
                <div className="h-24 w-24 md:h-32 md:w-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                  <HiOutlineDocumentReport className="text-blue-900 text-4xl md:text-5xl" />
                </div>
                <h3 className="text-md md:text-lg font-semibold text-blue-900">Rapports et Livrables</h3>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consulting;
