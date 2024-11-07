import React from 'react';
import { FaUsers, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const QuiSommesNous: React.FC = () => {
  return (
    <>
      {/* Section Qui sommes-nous */}
      <section id="qui-sommes-nous" className=" text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#024CAA]">Qui sommes-nous ?</h2>
        <p className="text-lg leading-relaxed text-[#23374D] max-w-3xl mx-auto mb-8">
          Entreprise spécialisée dans les Nouvelles Technologies d’Informations,
          Agora Technology offre aux grandes entreprises, PME et PMI des prestations de services, de consulting,
          et de formations avec une expertise de haut niveau. Une équipe de consultants expérimentés
          intervient sur les technologies d'infrastructure Microsoft, de virtualisation, de sécurité et de cloud.
        </p>
      </section>

      {/* Section de Faits saillants */}
      <section id="faits-saillants" className="my-12">
        <h2 className="text-2xl font-bold mb-8 text-center text-[#024CAA]">Faits saillants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center max-w-4xl mx-auto">
          {/* Depuis 2006 */}
          <div className="flex flex-col items-center p-6 bg-[#F5F7F8] rounded-lg shadow-lg">
            <FaCalendarAlt className="text-4xl text-[#024CAA]" />
            <p className="text-2xl font-semibold text-[#23374D] mt-4">Depuis 2006</p>
            <p className="text-sm text-[#23374D]">Au service des entreprises</p>
          </div>

          {/* +20 consultants */}
          <div className="flex flex-col items-center p-6 bg-[#F5F7F8] rounded-lg shadow-lg">
            <FaUsers className="text-4xl text-[#024CAA]" />
            <p className="text-2xl font-semibold text-[#23374D] mt-4">+20 consultants</p>
            <p className="text-sm text-[#23374D]">Experts en technologie</p>
          </div>

          {/* 25+ ans d'expérience */}
          <div className="flex flex-col items-center p-6 bg-[#F5F7F8] rounded-lg shadow-lg">
            <FaBriefcase className="text-4xl text-[#024CAA]" />
            <p className="text-2xl font-semibold text-[#23374D] mt-4">25+ ans d'expérience</p>
            <p className="text-sm text-[#23374D]">Capitalisée dans le secteur</p>
          </div>
        </div>
      </section>

      {/* Section Nos Valeurs */}
      <section id="nos-valeurs" className="my-12">
        <h2 className="text-2xl font-bold mb-8 text-center text-[#024CAA]">Nos Valeurs</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {['Innovation', 'Excellence', 'Intégrité', 'Collaboration', 'Responsabilité'].map((valeur) => (
            <div
              key={valeur}
              className="flex items-center justify-center w-32 h-32 bg-[#F5F7F8] rounded-full shadow-lg relative"
            >
              <span className="text-center text-[#23374D] font-semibold">{valeur}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default QuiSommesNous;
