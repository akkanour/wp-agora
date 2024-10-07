import React from 'react';

const SolutionsSauvegarde: React.FC = () => {
  return (
    <section id="solutions-sauvegarde" className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-6">Solutions de Sauvegarde</h2>
      <ul className="text-lg text-left mx-auto space-y-4" style={{ maxWidth: '800px' }}>
        <li>• Datadomaine & Networker</li>
        <li>• Veritas Backup Exec</li>
        <li>• Barracuda</li>
        <li>• Unitrends</li>
      </ul>
      <div className="mt-6">
        <img 
          src="https://via.placeholder.com/600x400?text=Backup+Solutions" 
          alt="Backup Solutions" 
          className="rounded-lg mx-auto"
        />
      </div>
    </section>
  );
};

export default SolutionsSauvegarde;
