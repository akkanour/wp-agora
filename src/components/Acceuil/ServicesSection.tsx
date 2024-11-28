// @components/ServicesSection.tsx
import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-14 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#024CAA]">Types de Prestation</h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          L’axe service s’articule autour de trois types de prestation :
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </section>
  );
};

export default ServicesSection;
