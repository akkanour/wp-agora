import React from 'react';
 
const QuiSommesNous: React.FC = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row  items-center justify-center p-2">
      <div className="flex-1 m-8">
        <h1 className="text-blue-600 text-4xl font-bold mb-4">AGORA TECHNOLOGY</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Is More Than Support</h2>
        <p className="text-lg text-gray-600">
          Une équipe d'Experts et de Consultants capitalisant +25 ans d’expérience à votre service intervenant sur les différentes technologies d'Infrastructures Microsoft, de Virtualisation, de Sauvegarde, de Sécurité, de Collaborations et de Cloud en Entreprise.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500">
          Contactez-nous
        </button>
      </div>
      <div className="flex-1 hidden md:block">
        <img src='consultant.png' alt="Agora Technology" className="w-full h-[900px] rounded-md" />
      </div>
    </section>
  );
};

export default QuiSommesNous;