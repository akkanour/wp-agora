// @pages/Partenaires.tsx
const Produits: React.FC = () => {
  return (
    <>
      {/* Section Nos Produits */}
      <section id="nos-produits" className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#024CAA]">Nos Produits</h2>
        <p className="text-lg text-[#23374D] max-w-2xl mx-auto mb-8">Découvrez notre gamme de produits et partenaires stratégiques.</p>
        {/* Liste des produits */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 justify-center max-w-5xl mx-auto">
          {[...Array(17)].map((_, i) => (
            <div key={i} className="flex items-center justify-center p-4 bg-white border rounded-lg shadow-md">
              <img src={`/products/Picture${i + 1}.png`} alt={`Produit ${i + 1}`} className="w-16 h-16 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Produits;
