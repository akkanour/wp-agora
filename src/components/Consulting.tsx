import React from 'react';

const Consulting: React.FC = () => {
  return (
    <section id="consulting" className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6">Consulting</h2>
      <p className="text-lg mb-6">
        AGORA TECHNOLOGY offre des services de consulting pour vous accompagner dans l'analyse, la planification et la mise en œuvre de vos projets IT.
      </p>
      <div className="flex justify-center">
        <img 
          src="https://via.placeholder.com/600x400?text=Consulting+Services" 
          alt="Consulting Services" 
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Consulting;
