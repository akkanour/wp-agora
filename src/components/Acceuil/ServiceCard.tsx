// @components/ServiceCard.tsx
import React, { useState } from 'react';

interface ServiceCardProps {
  backgroundImage: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ backgroundImage, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col h-96 rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 bg-white">
      {/* Top Section for SVG Image */}
      <div
        className="h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Bottom Section for Text */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <h3 className="text-2xl font-bold text-[#024CAA] mb-2">{title}</h3>
        <p className="text-[#23374D] mb-4">
          {isExpanded ? description : `${description.substring(0, 104)}...`}
        </p>
        <button
          onClick={toggleExpanded}
          className="text-sm font-semibold text-[#23374D] mt-auto"
        >
          {isExpanded ? "Voir moins" : "Lire plus"}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
