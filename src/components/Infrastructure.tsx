import React from 'react';

const Infrastructure: React.FC = () => {
  return (
    <section id="infrastructure" className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6">Solutions d'Infrastructure</h2>
      <ul className="text-lg text-left mx-auto space-y-4" style={{ maxWidth: '800px' }}>
        <li>• Hautes Disponibilités (Clustering, Tolérances de pannes, etc.)</li>
        <li>• Services d’Annuaire Active Directory</li>
        <li>• Systèmes d’Exploitation & Réseaux</li>
        <li>• Serveur de Base de Données SQL</li>
      </ul>
      <div className="mt-6">
        <img 
          src="https://via.placeholder.com/600x400?text=Infrastructure+Solutions" 
          alt="Infrastructure Solutions" 
          className="rounded-lg mx-auto"
        />
      </div>
    </section>
  );
};

export default Infrastructure;
