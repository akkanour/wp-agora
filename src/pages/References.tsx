// @pages/References.tsx
const References: React.FC = () => {
  return (
    <>
      {/* Section Références */}
      <section id="references" className="my-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#024CAA]">Références</h2>
        <p className="text-lg text-[#23374D] max-w-2xl mx-auto mb-8">Nos clients et références dans divers secteurs d'activité.</p>
        {/* Liste des références */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-6 justify-center max-w-6xl mx-auto">
          {[...Array(76)].map((_, i) => (
            <div key={i} className="flex items-center justify-center p-4 bg-white border rounded-lg shadow-md">
              <img src={`/clients/Picture${i + 1}.png`} alt={`Référence ${i + 1}`} className="w-16 h-16 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default References;
