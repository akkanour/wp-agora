import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  return (
    <section className="text-primary-dark w-full py-12">
      {/* Conteneur centré et limité en largeur, comme dans le header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-8 items-center">
        
          {/* About Agora Technology */}
          <div className="text-left">
            <h2 className="text-3xl lg:text-5xl text-center font-extrabold mb-6 text-primary-darkBlue">
              À propos de Agora Technology
            </h2>
            <p className="text-lg lg:text-xl font-body leading-relaxed text-primary-dark">
              Agora Technology est au service des entreprises soucieuses d’assurer la protection de leurs informations sensibles. La force de notre organisation repose sur l’expertise de nos consultants et sur un puissant réseau de partenaires internationaux.
            </p>
          </div>
        
          {/* Faits saillants Section */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-center text-primary-darkBlue">
              Faits saillants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center">
              <HighlightCard icon={<FaCalendarAlt />} title="Depuis 2006" description="Au service des entreprises" />
              <HighlightCard icon={<FaUsers />} title="+20 consultants" description="Experts en technologie" />
              <HighlightCard icon={<FaBriefcase />} title="25+ ans d'expérience" description="Capitalisée dans le secteur" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Card component for each highlight item
const HighlightCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-5xl text-secondary-violet mb-4">{icon}</div>
    <p className="text-xl font-extrabold font-title text-primary-darkBlue">{title}</p>
    <p className="text-sm font-body text-primary-dark">{description}</p>
  </div>
);

export default AboutSection;
