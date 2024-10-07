import React from 'react';

const Migrations: React.FC = () => {
  const migrations = [
    {
      title: "Systèmes d'Exploitation Windows",
      icon: '💻', // Laptop emoji for Windows
    },
    {
      title: 'Serveurs de Messagerie Exchange',
      icon: '📧', // Email emoji for Exchange
    },
    {
      title: "Services d'Annuaire Active Directory",
      icon: '🔄', // Directory icon for AD
    },
    {
      title: 'Serveurs de Bases de Données SQL',
      icon: '🗄️', // Database emoji for SQL
    },
  ];

  return (
    <section id="migrations" className="py-16 bg-gray-100 text-center">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Title and Text */}
        <div className="text-left flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Migrations</h2>
          <p className="text-lg mb-8">
            Notre domaine de migration couvre plusieurs technologies clés :
          </p>
        </div>

        {/* Right Column: 2x2 Grid for Migrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {migrations.map((migration, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center h-60"
            >
              {/* Icon */}
              <div className="text-6xl mb-4">{migration.icon}</div>
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800">{migration.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Migrations;
