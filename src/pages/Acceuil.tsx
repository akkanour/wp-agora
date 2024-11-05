
'use client';
import React, { useState } from 'react';
import { FaBriefcase, FaCalendarAlt, FaCheckCircle, FaUsers } from 'react-icons/fa';
const Acceuil: React.FC = () => {
  return (
    <div>
      {/* Section d'en-tête avec l'image de fond pleine page */}
      <div className="relative min-h-screen bg-cover bg-center bg-[url('/gs.jpg')]">
        <div className="absolute inset-0 bg-black opacity-80"></div> {/* Overlay sombre */}

        <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left text-white px-6 pt-20 md:px-12 lg:px-24">
          <header className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              AGORA TECHNOLOGY protect <br /> your business
            </h1>
            <p className="mt-4 text-lg md:text-2xl leading-relaxed">
              Nous veillons sur vos données sensibles
            </p>
          </header>

          {/* Boutons d'action */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="/en-savoir-plus" className="bg-[#024CAA] hover:bg-[#1089FF] text-black font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out">
              En savoir +
            </a>
            <a href="/demander-devis" className="bg-white text-black hover:bg-[#B6F1FF] font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out">
              Demander un devis
            </a>
          </div>
        </div>
      </div>
      {/* Section 1: À propos */}
      <section className="py-16 bg-white text-[#23374D] px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Texte "À propos de Agora Technolgy" */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4 text-[#024CAA]">À propos de Agora Technolgy</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Agora Technolgy est au service des entreprises soucieuses d’assurer la protection de leurs informations sensibles. La force de notre organisation repose sur l’expertise de nos consultants et sur un puissant réseau de partenaires internationaux.
            </p>
          </div>
          {/* Section de Faits saillants */}
          <section id="faits-saillants" className="my-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-[#024CAA]">Faits saillants</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center max-w-4xl mx-auto">

              {/* Depuis 2006 */}
              <div className="flex flex-col items-center p-6 bg-[#F5F7F8] rounded-lg shadow-lg h-full w-full max-w-xs mx-auto md:max-w-none min-h-[200px]">
                <FaCalendarAlt className="text-4xl text-[#024CAA]" />
                <p className="text-2xl font-semibold text-[#23374D] mt-4 text-center">Depuis 2006</p>
                <p className="text-sm text-[#23374D] text-justify">Au service des entreprises</p>
              </div>

              {/* +20 consultants */}
              <div className="flex flex-col items-center p-6 bg-[#F5F7F8] rounded-lg shadow-lg h-full w-full max-w-xs mx-auto md:max-w-none min-h-[200px]">
                <FaUsers className="text-4xl text-[#024CAA]" />
                <p className="text-2xl font-semibold text-[#23374D] mt-4 text-center">+20 consultants</p>
                <p className="text-sm text-[#23374D] text-justify">Experts en technologie</p>
              </div>

              {/* 25+ ans d'expérience */}
              <div className="flex flex-col items-center p-6 bg-[#F5F7F8] rounded-lg shadow-lg h-full w-full max-w-xs mx-auto md:max-w-none min-h-[200px]">
                <FaBriefcase className="text-4xl text-[#024CAA]" />
                <p className="text-2xl font-semibold text-[#23374D] mt-4 text-center">25+ ans d'expérience</p>
                <p className="text-sm text-[#23374D] text-justify">Capitalisée dans le secteur</p>
              </div>
            </div>
          </section>


        </div>

      </section>
      {/* Section 2: Cinq raisons de choisir Agora Technolgy */}
      <section className="py-16 bg-[#F5F7F8]  px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#024CAA]">Cinq bonnes raisons de choisir Agora Technolgy</h2>
          <p className="text-lg mt-4">
            Agora Technolgy prend en charge les besoins client d’un bout à l’autre de la chaîne. Notre entreprise articule analyse stratégique et compétences opérationnelles.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image à gauche */}
          <div className="h-auto bg-gray-200 rounded-lg flex items-center justify-center">
            <img src="com.png" alt="Image représentant l'équipe" className="h-full w-full object-cover rounded-lg" />
          </div>

          {/* Liste des raisons à droite */}
          <div className="space-y-4">
            <div className="flex items-center bg-white shadow-md p-6 rounded-lg text-[#23374D">
              <img className=" mr-4" src='friends.png' />
              <h3 className="text-lg font-bold">Une équipe multidisciplinaire d’experts pointus</h3>
            </div>
            <div className="flex items-center bg-white shadow-md p-6 rounded-lg">
              <img className=" mr-4" src='maple-leaf.png' />
              <h3 className="text-lg font-bold">Un écosystème de marques leaders & innovantes</h3>
            </div>
            <div className="flex items-center bg-white shadow-md p-6 rounded-lg">
              <img className=" mr-4" src='idea-bulb.png' />
              <h3 className="text-lg font-bold">Une approche créative & globale des solutions</h3>
            </div>
            <div className="flex items-center bg-white shadow-md p-6 rounded-lg">
              <img className=" mr-4" src='salary.png' />
              <h3 className="text-lg font-bold">Des investissements financiers durables</h3>
            </div>
            <div className="flex items-center bg-white shadow-md p-6 rounded-lg">
              <img className=" mr-4" src='excellence.png' />
              <h3 className="text-lg font-bold">L’excellence des résultats opérationnels</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3: Nos services */}
      <section className="py-16 bg-white px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#024CAA]">Nos services</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Nos services s’étendent de la sécurisation des architectures à la formation, en passant par l’audit des systèmes, les opérations de maintenance et de support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            image="maintenance.png"
            title="Prestation de service"
            description="AGORA TECHNOLOGY propose aux entreprises des prestations adaptées aux contextes spécifiques du Client. Nous définissons ainsi une mission tenant compte de vos attentes et vos objectifs."
          />
          <ServiceCard
            image="/audit.png"
            title="Prestation sur Incident"
            description="Disposant des compétences et des ressources nécessaires, AGORA TECHNOLOGY propose à ses Clients des prestations sur Incidents visant à aider d’urgence ses Clients devant une situation critique."
          />
          <ServiceCard
            image="architecture.png"
            title="Contrat de Support"
            description="Vu l’importance des systèmes d’informations dans les tâches de gestion, de communication, partage d’information et d’organisation dans la production des entreprises, AGORA TECHNOLOGY propose à ses clients des contrats de support adaptés à leurs environnements pour résoudre les incidents informatiques."
          />
        </div>
      </section>

      {/* Section 4: Offres */}
      <section className="py-16 bg-[#F5F7F8]  px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#024CAA] ">Découvrez les offres Agora Technology</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            L’étendue de la gamme des offres Agora Technology permet à notre entreprise de répondre aux besoins spécifiques du client avec des interventions sur mesure.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne gauche pour les offres */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#E5E5E5] p-4 rounded-lg shadow-md flex items-center">
              <FaCheckCircle className="text-[#1089FF] text-2xl mr-2" />
              <span className="font-semibold text-lg text-[#23374D]">Cybersécurité industrielle</span>
            </div>
            <div className="bg-[#E5E5E5] p-4 rounded-lg shadow-md flex items-center">
              <FaCheckCircle className="text-[#1089FF] text-2xl mr-2" />
              <span className="font-semibold text-lg text-[#23374D]">Identity & Access Management</span>
            </div>
            <div className="bg-[#E5E5E5] p-4 rounded-lg shadow-md flex items-center">
              <FaCheckCircle className="text-[#1089FF] text-2xl mr-2" />
              <span className="font-semibold text-lg text-[#23374D]">Sécurité applicative</span>
            </div>
            <div className="bg-[#E5E5E5] p-4 rounded-lg shadow-md flex items-center">
              <FaCheckCircle className="text-[#1089FF] text-2xl mr-2" />
              <span className="font-semibold text-lg text-[#23374D]">Sécurité du Cloud</span>
            </div>
            <div className="bg-[#E5E5E5] p-4 rounded-lg shadow-md flex items-center">
              <FaCheckCircle className="text-[#1089FF] text-2xl mr-2" />
              <span className="font-semibold text-lg text-[#23374D]">Data Protection</span>
            </div>
            <div className="bg-[#E5E5E5] p-4 rounded-lg shadow-md flex items-center">
              <FaCheckCircle className="text-[#1089FF] text-2xl mr-2" />
              <span className="font-semibold text-lg text-[#23374D]">Threat Intelligence</span>
            </div>
            <div className="bg-[#E5E5E5] p-4 rounded-lg shadow-md flex items-center">
              <FaCheckCircle className="text-[#1089FF] text-2xl mr-2" />
              <span className="font-semibold text-lg text-[#23374D]">Expertise SOC</span>
            </div>
            <div className="bg-[#E5E5E5] p-4 rounded-lg shadow-md flex items-center">
              <FaCheckCircle className="text-[#1089FF] text-2xl mr-2" />
              <span className="font-semibold text-lg text-[#23374D]">Protection des mobiles & des endpoints</span>
            </div>
            <div className="bg-[#E5E5E5] p-4 rounded-lg shadow-md flex items-center">
              <FaCheckCircle className="text-[#1089FF] text-2xl mr-2" />
              <span className="font-semibold text-lg text-[#23374D]">Protection des infrastructures & du réseau</span>
            </div>
            <div className="bg-[#E5E5E5] p-4 rounded-lg shadow-md flex items-center">
              <FaCheckCircle className="text-[#1089FF] text-2xl mr-2" />
              <span className="font-semibold text-lg text-[#23374D]">Ethical Hacking</span>
            </div>
            <div className="bg-[#E5E5E5] p-4 rounded-lg shadow-md flex items-center">
              <FaCheckCircle className="text-[#1089FF] text-2xl mr-2" />
              <span className="font-semibold text-lg text-[#23374D]">Compliance</span>
            </div>
            <div className="bg-[#E5E5E5] p-4 rounded-lg shadow-md flex items-center">
              <FaCheckCircle className="text-[#1089FF] text-2xl mr-2" />
              <span className="font-semibold text-lg text-[#23374D]">Réseau & Infrastructure Système</span>
            </div>
          </div>

          {/* Colonne droite pour l'image */}
          <div className="hidden lg:block">
            <div className="h-full w-full bg-gray-200 rounded-lg overflow-hidden">
              {/* Remplacez cette div par une balise img si vous avez l'image */}
              <img src="gs.jpg" alt="Illustration" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}
const ServiceCard = ({ image, title, description } : ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative h-80 rounded-lg overflow-hidden flex items-end p-8 transition-transform duration-300 transform hover:shadow-lg hover:shadow-[#024CAA] hover:translate-y-1" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay sombre */}
      <div className="relative text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-base mt-2">
          {isExpanded ? description : `${description.substring(0, 110)}...`}
        </p>
        <button
          onClick={toggleExpanded}
          className="text-sm font-semibold text-[#024CAA] mt-2"
        >
          {isExpanded ? "Voir moins" : "Lire plus"}
        </button>
      </div>
    </div>
  );
};
export default Acceuil;
