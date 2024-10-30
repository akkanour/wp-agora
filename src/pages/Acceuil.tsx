// @pages/Acceuil.tsx
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
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
          <div>
            <h2 className="text-3xl font-extrabold mb-4">À propos de Agora Technolgy</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Agora Technolgy est au service des entreprises soucieuses d’assurer la protection de leurs informations sensibles. La force de notre organisation repose sur l’expertise de nos consultants et sur un puissant réseau de partenaires internationaux.
            </p>
          </div>
          <div className="flex justify-around">
            <div className="bg-gray-200 w-24 h-16 rounded-md flex items-center justify-center">
              Logo 1
            </div>
            <div className="bg-gray-200 w-24 h-16 rounded-md flex items-center justify-center">
              Logo 2
            </div>
            <div className="bg-gray-200 w-24 h-16 rounded-md flex items-center justify-center">
              Logo 3
            </div>
            <div className="bg-gray-200 w-24 h-16 rounded-md flex items-center justify-center">
              Logo 4
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7F8] text-[#23374D] px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold">Cinq bonnes raisons de choisir Agora Technolgy</h2>
          <p className="text-lg mt-4">
            Agora Technolgy prend en charge les besoins client d’un bout à l’autre de la chaîne. Notre entreprise articule analyse stratégique et compétences opérationnelles.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image à gauche */}
          <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
            <img src="/path-to-your-image.jpg" alt="Image représentant l'équipe" className="h-full w-full object-cover rounded-lg" />
          </div>

          {/* Liste des raisons à droite */}
          <div className="space-y-4">
            <div className="flex items-center bg-white shadow-md p-6 rounded-lg">
              <div className="text-[#FF8C00] text-2xl mr-4">👥</div>
              <h3 className="text-lg font-bold">Une équipe multidisciplinaire d’experts pointus</h3>
            </div>
            <div className="flex items-center bg-white shadow-md p-6 rounded-lg">
              <div className="text-[#FF8C00] text-2xl mr-4">🍁</div>
              <h3 className="text-lg font-bold">Un écosystème de marques leaders & innovantes</h3>
            </div>
            <div className="flex items-center bg-white shadow-md p-6 rounded-lg">
              <div className="text-[#FF8C00] text-2xl mr-4">💡</div>
              <h3 className="text-lg font-bold">Une approche créative & globale des solutions</h3>
            </div>
            <div className="flex items-center bg-white shadow-md p-6 rounded-lg">
              <div className="text-[#FF8C00] text-2xl mr-4">💰</div>
              <h3 className="text-lg font-bold">Des investissements financiers durables</h3>
            </div>
            <div className="flex items-center bg-white shadow-md p-6 rounded-lg">
              <div className="text-[#FF8C00] text-2xl mr-4">🌟</div>
              <h3 className="text-lg font-bold">L’excellence des résultats opérationnels</h3>
            </div>
          </div>
        </div>
      </section>


     {/* Section 3: Nos services */}
<section className="py-16 bg-white text-[#23374D] px-6 md:px-12 lg:px-24">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold">Nos services</h2>
    <p className="text-lg mt-4 max-w-3xl mx-auto">
      Nos services s’étendent de la sécurisation des architectures à la formation, en passant par l’audit des systèmes, les opérations de maintenance et de support.
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Carte 1: Maintenance & Support */}
    <div
      className="relative h-80 rounded-lg overflow-hidden flex items-end p-6 transition-transform duration-300 transform hover:shadow-lg hover:shadow-[#024CAA] hover:translate-y-1"
      style={{ backgroundImage: "url('maintenance.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay sombre */}
      <div className="relative text-white">
        <h3 className="text-2xl font-bold">Maintenance & Support</h3>
        <p className="text-base mt-2">
          Nous appuyons le management des solutions de cybersécurité. Nous intervenons sur les services de veille en vulnérabilités et élaborons des plans de remédiation.
        </p>
      </div>
    </div>

    {/* Carte 2: Sensibilisation & Formation */}
    <div
      className="relative h-80 rounded-lg overflow-hidden flex items-end p-6 transition-transform duration-300 transform hover:shadow-lg hover:shadow-[#024CAA] hover:translate-y-1"
      style={{ backgroundImage: "url('/audit.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay sombre */}
      <div className="relative text-white">
        <h3 className="text-2xl font-bold">Sensibilisation & Formation</h3>
        <p className="text-base mt-2">
          Notre entreprise met à disposition des clients un centre équipé des dernières technologies, où sont dispensées des formations sur mesure.
        </p>
      </div>
    </div>

    {/* Carte 3: Architecture & Intégration */}
    <div
      className="relative h-80 rounded-lg overflow-hidden flex items-end p-6 transition-transform duration-300 transform hover:shadow-lg hover:shadow-[#024CAA] hover:translate-y-1"
      style={{ backgroundImage: "url('architecture.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay sombre */}
      <div className="relative text-white">
        <h3 className="text-2xl font-bold">Architecture & Intégration</h3>
        <p className="text-base mt-2">
          Nous aidons les entreprises à protéger leurs données. Nous sécurisons les plateformes PC, les sites distants et la mobilité.
        </p>
      </div>
    </div>
  </div>
</section>



      <section className="py-16 bg-[#F5F7F8] text-[#23374D] px-6 md:px-12 lg:px-24">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-extrabold">Découvrez les offres Agora Technology</h2>
      <p className="text-lg mt-4 max-w-3xl mx-auto">
        L’étendue de la gamme des offres Agora Technology permet à notre entreprise de répondre aux besoins spécifiques du client avec des interventions sur mesure.
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Colonne gauche pour les offres */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-[#FFF2E5] p-4 rounded-lg shadow-md flex items-center">
          <FaCheckCircle className="text-[#FFD45C] text-2xl mr-2" />
          <span className="font-semibold text-lg text-[#23374D]">Cybersécurité industrielle</span>
        </div>
        <div className="bg-[#FFF2E5] p-4 rounded-lg shadow-md flex items-center">
          <FaCheckCircle className="text-[#FFD45C] text-2xl mr-2" />
          <span className="font-semibold text-lg text-[#23374D]">Identity & Access Management</span>
        </div>
        <div className="bg-[#FFF2E5] p-4 rounded-lg shadow-md flex items-center">
          <FaCheckCircle className="text-[#FFD45C] text-2xl mr-2" />
          <span className="font-semibold text-lg text-[#23374D]">Sécurité applicative</span>
        </div>
        <div className="bg-[#FFF2E5] p-4 rounded-lg shadow-md flex items-center">
          <FaCheckCircle className="text-[#FFD45C] text-2xl mr-2" />
          <span className="font-semibold text-lg text-[#23374D]">Sécurité du Cloud</span>
        </div>
        <div className="bg-[#FFF2E5] p-4 rounded-lg shadow-md flex items-center">
          <FaCheckCircle className="text-[#FFD45C] text-2xl mr-2" />
          <span className="font-semibold text-lg text-[#23374D]">Data Protection</span>
        </div>
        <div className="bg-[#FFF2E5] p-4 rounded-lg shadow-md flex items-center">
          <FaCheckCircle className="text-[#FFD45C] text-2xl mr-2" />
          <span className="font-semibold text-lg text-[#23374D]">Threat Intelligence</span>
        </div>
        <div className="bg-[#FFF2E5] p-4 rounded-lg shadow-md flex items-center">
          <FaCheckCircle className="text-[#FFD45C] text-2xl mr-2" />
          <span className="font-semibold text-lg text-[#23374D]">Expertise SOC</span>
        </div>
        <div className="bg-[#FFF2E5] p-4 rounded-lg shadow-md flex items-center">
          <FaCheckCircle className="text-[#FFD45C] text-2xl mr-2" />
          <span className="font-semibold text-lg text-[#23374D]">Protection des mobiles & des endpoints</span>
        </div>
        <div className="bg-[#FFF2E5] p-4 rounded-lg shadow-md flex items-center">
          <FaCheckCircle className="text-[#FFD45C] text-2xl mr-2" />
          <span className="font-semibold text-lg text-[#23374D]">Protection des infrastructures & du réseau</span>
        </div>
        <div className="bg-[#FFF2E5] p-4 rounded-lg shadow-md flex items-center">
          <FaCheckCircle className="text-[#FFD45C] text-2xl mr-2" />
          <span className="font-semibold text-lg text-[#23374D]">Ethical Hacking</span>
        </div>
        <div className="bg-[#FFF2E5] p-4 rounded-lg shadow-md flex items-center">
          <FaCheckCircle className="text-[#FFD45C] text-2xl mr-2" />
          <span className="font-semibold text-lg text-[#23374D]">Compliance</span>
        </div>
        <div className="bg-[#FFF2E5] p-4 rounded-lg shadow-md flex items-center">
          <FaCheckCircle className="text-[#FFD45C] text-2xl mr-2" />
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

export default Acceuil;
