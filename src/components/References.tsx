import React from 'react';

const References: React.FC = () => {
  const references = [
    { name: 'AXA', src: '/Picture17.png' },
    { name: 'Coca-Cola', src: '/Picture18.png' },
    // Add other logos similarly
  ];

  return (
    <section id="references" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Nos Références</h2>
      <div className="flex flex-col items-center space-y-8 mx-auto max-w-screen-lg">
        {references.map((ref, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-full flex flex-col items-center">
            <img 
              src={ref.src} 
              alt={ref.name} 
              className="w-full object-fit h-auto mb-4" // Center the image and keep aspect ratio
            />
            <h3 className="mt-4 text-lg font-semibold">{ref.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default References;
