import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full py-14">
      {/* Conteneur interne standardisé */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        {/* Titre et description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#024CAA]">Types de Prestation</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto text-primary-dark">
            L’axe service s’articule autour de trois types de prestation :
          </p>
        </div>

        {/* Grid des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            backgroundImage="/svg/3.svg"
            title="Maintenance & Support"
            description="Nous appuyons le management des solutions de cybersécurité. Nous intervenons sur les services de veille en vulnérabilités et élaborons des plans de remédiation."
          />
          <ServiceCard
            backgroundImage="/svg/2.svg"
            title="Sensibilisation & Formation"
            description="Notre entreprise met à disposition des clients un centre équipé des dernières technologies, où sont dispensées des formations sur mesure."
          />
          <ServiceCard
            backgroundImage="/svg/1.svg"
            title="Architecture & Intégration"
            description="Nous aidons les entreprises à protéger leurs données. Nous sécurisons les plateformes PC, les sites distants et la mobilité."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
