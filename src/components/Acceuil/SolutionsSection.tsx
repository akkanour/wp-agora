import React from 'react';

const SolutionsSection: React.FC = () => {
  return (
    <section className="w-full py-12 ">
      {/* Conteneur interne centré et limité */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#23374D]">
            Nos solutions, <span className="text-[#1089FF]">se réinventer à l’ère du digital</span>
          </h2>
        </div>

        {/* Grid de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SolutionCard
            icon="/icons/sécurité.png"
            title="Solutions de Sécurité"
            description="Protection avancée pour vos systèmes avec antivirus, anti-spam et gestion des correctifs."
          />
          <SolutionCard
            icon="/icons/infrastructure.png"
            title="Solutions d'Infrastructure"
            description="Des solutions robustes pour optimiser l'infrastructure de votre entreprise..."
          />
          <SolutionCard
            icon="/icons/migration.png"
            title="Migrations"
            description="Services de migration vers des environnements modernes pour une continuité optimale."
          />
          <SolutionCard
            icon="/icons/sauvegarde.png"
            title="Solutions de Sauvegarde"
            description="Sauvegardes fiables pour sécuriser les données critiques et assurer leur récupération."
          />
          <SolutionCard
            icon="/icons/collaboration.png"
            title="Messagerie et Collaboration"
            description="Outils de messagerie et de collaboration pour améliorer la communication..."
          />
          <SolutionCard
            icon="/icons/stockage.png"
            title="Solutions de Stockage"
            description="Des solutions de stockage flexibles et performantes pour gérer vos données efficacement."
          />
        </div>
      </div>
    </section>
  );
};

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group flex flex-col items-center justify-center h-72 p-6 bg-white rounded-3xl shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="mb-4">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="font-bold text-2xl text-center text-[#024CAA]">{title}</h3>
      <p className="text-center mt-2 text-[#23374D]">{description}</p>
    </div>
  );
};

export default SolutionsSection;
