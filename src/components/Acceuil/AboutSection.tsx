// @components/AboutSection.tsx
import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  return (
    <section className="py-8 px-6 md:px-12 lg:px-24 text-[#23374D]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* About Agora Technology */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-[#024CAA]">À propos de Agora Technology</h2>
          <p className="text-lg md:text-2xl mb-4 leading-relaxed text-left">
            Agora Technology est au service des entreprises soucieuses d’assurer la protection de leurs informations sensibles. La force de notre organisation repose sur l’expertise de nos consultants et sur un puissant réseau de partenaires internationaux.
          </p>
        </div>
        
        {/* Faits saillants Section */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-center text-[#024CAA]">Faits saillants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center">
            <HighlightCard icon={<FaCalendarAlt />} title="Depuis 2006" description="Au service des entreprises" />
            <HighlightCard icon={<FaUsers />} title="+20 consultants" description="Experts en technologie" />
            <HighlightCard icon={<FaBriefcase />} title="25+ ans d'expérience" description="Capitalisée dans le secteur" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Card component for each highlight item
const HighlightCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-[#F5F7F8] rounded-lg shadow-lg h-full w-full max-w-xs mx-auto md:max-w-none min-h-[90px] text-center">
    <div className="text-4xl text-[#024CAA] mb-4">{icon}</div>
    <p className="text-2xl font-semibold text-[#23374D]">{title}</p>
    <p className="text-sm text-[#23374D]">{description}</p>
  </div>
);

export default AboutSection;
