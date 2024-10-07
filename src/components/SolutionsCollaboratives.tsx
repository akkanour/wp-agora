import React from 'react';

const SolutionsCollaboratives: React.FC = () => {
  return (
    <section id="solutions-collaboratives" className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6">Solutions de messagerie et de collaboration</h2>
      <ul className="text-lg text-left mx-auto space-y-4" style={{ maxWidth: '800px' }}>
        <li>• Exchange Server</li>
        <li>• SharePoint</li>
        <li>• Project Server</li>
      </ul>
      <div className="mt-6">
        <img 
          src="https://via.placeholder.com/600x400?text=Collaboration+Solutions" 
          alt="Collaboration Solutions" 
          className="rounded-lg mx-auto"
        />
      </div>
    </section>
  );
};

export default SolutionsCollaboratives;
