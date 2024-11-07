// @components/ProductSection.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const desktopProductsPerPage = 6;
const mobileProductsPerPage = 3;
const totalProducts = 17; // Nombre total de produits

const ProductSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [productsPerPage, setProductsPerPage] = useState(desktopProductsPerPage);

  // Générer un tableau d'URLs pour les produits
  const productImages = Array.from({ length: totalProducts }, (_, i) => `/products/Picture${i + 1}.png`);

  useEffect(() => {
    const handleResize = () => {
      setProductsPerPage(window.innerWidth < 640 ? mobileProductsPerPage : desktopProductsPerPage);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to handle navigation with fading effect
  const handleNavigation = useCallback((newIndex: number) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(false);
    }, 500);
  }, []);

  const showNext = useCallback(() => {
    handleNavigation((currentIndex + productsPerPage) % productImages.length);
  }, [currentIndex, productsPerPage, productImages.length, handleNavigation]);

  const showPrev = useCallback(() => {
    handleNavigation((currentIndex - productsPerPage + productImages.length) % productImages.length);
  }, [currentIndex, productsPerPage, productImages.length, handleNavigation]);

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(showNext, 5000);
    return () => clearInterval(interval);
  }, [showNext]);

  // Produits affichés
  const displayedProducts = productImages.slice(currentIndex, currentIndex + productsPerPage);

  return (
    <section className="py-6 px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center space-y-8">
      {/* Titre de la section */}
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#024CAA]">Nos Produits</h2>
        <p className="text-lg md:text-2xl mt-2 text-gray-700 text-justify">
          Découvrez notre gamme de produits qui répond aux besoins de nos clients avec innovation et fiabilité.
        </p>
      </div>

      {/* Images des produits */}
      <div className="flex items-center justify-center space-x-4 w-full">
        <button onClick={showPrev} className="p-2 bg-gray-300 rounded-full hidden sm:inline-flex">
          <FaChevronLeft className="text-gray-700" />
        </button>

        <div className={`flex justify-center space-x-6 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`} style={{ width: productsPerPage * 120 + "px" }}>
          {displayedProducts.map((product, index) => (
            <img
              key={index}
              src={product}
              alt={`Product ${index + 1}`}
              className="h-24 md:h-27 w-24 md:w-27 object-contain"
              style={{ maxWidth: "120px" }} // Taille agrandie pour chaque logo
            />
          ))}
        </div>
        
        <button onClick={showNext} className="p-2 bg-gray-300 rounded-full hidden sm:inline-flex">
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
