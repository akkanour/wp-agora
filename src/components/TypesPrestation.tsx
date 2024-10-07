import React from 'react';

interface Prestation {
  title: string;
  description: string;
  imageUrl: string;
}

const prestations: Prestation[] = [
  {
    title: 'Prestation de service',
    description: 'AGORA TECHNOLOGY propose des prestations adaptées aux besoins spécifiques de chaque client.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Microsoft_Exchange_Server_Logo.png',
  },
  {
    title: 'Prestation sur Incident',
    description: 'Nous intervenons rapidement pour aider nos clients à résoudre des incidents critiques.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Microsoft_Office_SharePoint_%282019-present%29.svg',
  },
  {
    title: 'Contrat de support',
    description: 'Propose des contrats de support IT adaptés aux besoins des entreprises pour garantir une continuité de service.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Microsoft_Project_Logo.png',
  },
];

const TypesPrestation: React.FC = () => {
  return (
    <section id="types-de-prestation" className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6">Types de Prestation</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {prestations.map((prestation, index) => (
          <div key={index} className="bg-white p-10 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={prestation.imageUrl} alt={prestation.title} className="mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{prestation.title}</h3>
            <p className="text-gray-600">{prestation.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TypesPrestation;
