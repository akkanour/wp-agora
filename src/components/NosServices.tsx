import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Déploiement et Administration',
    description: 'Installer, configurer et maintenir les systèmes logiciels et l\'infrastructure',
    icon: '💻', // Icone ordinateur
  },
  {
    title: 'Reconfiguration ou Réinstallation',
    description: 'Études de faisabilité, des conseils, des mises à niveau logicielles, des installations, des tests et des formations.',
    icon: '🔄', // Icone Reconfiguration
  },
  {
    title: 'Interconnexion de votre réseau à Internet',
    description: 'Installation de routeurs, pare-feu, proxy, publication de DNS, etc.',
    icon: '🌐', // Icone réseau
  },
  {
    title: 'Sécurisation des données stockées',
    description: 'Cryptographie, authentification, sauvegarde et récupération des données, surveillance des accès.',
    icon: '🔐', // Icone Sécurité
  },
  {
    title: 'Intervention en cas de problème',
    description: 'Surveillance, détection des incidents, analyse et résolution des problèmes.',
    icon: '🛠️', // Icone outils
  },
];

const NosServices: React.FC = () => {
  return (
    <section id="nos-services" className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6">Nos Services</h2>
      <p className="text-lg mb-6">
        Nous offrons une large variété de services informatiques pour répondre aux besoins de nos clients.
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NosServices;
