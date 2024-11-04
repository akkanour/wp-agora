// @pages/Presentation.tsx
'use client';
import { FaUsers, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Presentation: React.FC = () => {
  return (
    <div className="pt-36">
      {/* Section Qui sommes-nous */}
      <section id="qui-sommes-nous" className="my-12 text-center">
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

      {/* Section Nos Produits */}
      <section id="nos-produits" className="my-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#024CAA]">Nos Produits</h2>
        <p className="text-lg text-[#23374D] max-w-2xl mx-auto mb-8">Découvrez notre gamme de produits et partenaires stratégiques.</p>
        {/* Liste des produits */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 justify-center max-w-5xl mx-auto">
          {[...Array(17)].map((_, i) => (
            <div key={i} className="flex items-center justify-center p-4 bg-white border rounded-lg shadow-md">
              <img src={`/products/Picture${i + 1}.png`} alt={`Produit ${i + 1}`} className="w-16 h-16 object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Section Références */}
      <section id="references" className="my-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#024CAA]">Références</h2>
        <p className="text-lg text-[#23374D] max-w-2xl mx-auto mb-8">Nos clients et références dans divers secteurs d'activité.</p>
        {/* Liste des références */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-6 justify-center max-w-6xl mx-auto">
          {[...Array(76)].map((_, i) => (
            <div key={i} className="flex items-center justify-center p-4 bg-white border rounded-lg shadow-md">
              <img src={`/clients/Picture${i + 1}.png`} alt={`Référence ${i + 1}`} className="w-16 h-16 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Presentation;
