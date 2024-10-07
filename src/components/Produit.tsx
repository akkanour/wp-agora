import React from 'react';

const Products: React.FC = () => {
  const logos = [
    { name: 'Microsoft', src: '/Picture1.png' },
    { name: 'Dell EMC', src: '/Picture2.png' },
    { name: 'ManageEngine', src: '/Picture3.png' },
    { name: 'Symantec', src: '/Picture4.jpg' },
    { name: 'Veritas', src: '/Picture5.png' },
    { name: 'Eaton', src: '/Picture8.png' },
    { name: 'Veeam', src: '/Picture9.png' },
    { name: 'Zebra Technologies', src: '/Picture10.jpg' },
    { name: 'Epson', src: '/Picture11.png' },
    { name: 'HP', src: '/Picture12.png' },
    { name: 'VMware', src: '/Picture6.jpg' },
    { name: 'Sophos', src: '/Picture7.png' },
    { name: 'CodeTwo', src: '/Picture13.jpg' },
    { name: 'Kaspersky', src: '/Picture14.jpg' },
    { name: 'ActEnt', src: '/Picture15.png' },
  ];

  return (
    <section id="products" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Nos Produits Commercialisés</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mx-auto max-w-screen-lg">
        {logos.map((logo, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <img src={logo.src} alt={logo.name} className="mx-auto h-20" />
            <h3 className="mt-4 text-lg font-semibold">{logo.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
