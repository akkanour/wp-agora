// @components/ClientSection.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const desktopLogosPerPage = 10;
const mobileLogosPerPage = 3;
const totalLogos = 76;

const ClientSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [logosPerPage, setLogosPerPage] = useState(desktopLogosPerPage);

  // Generate an array of URLs for the logos
  const clientLogos = Array.from({ length: totalLogos }, (_, i) => `/clients/Picture${i + 1}.png`);

  useEffect(() => {
    const updateLogosPerPage = () => {
      setLogosPerPage(window.innerWidth < 640 ? mobileLogosPerPage : desktopLogosPerPage);
    };

    updateLogosPerPage();
    window.addEventListener('resize', updateLogosPerPage);
    return () => window.removeEventListener('resize', updateLogosPerPage);
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
    handleNavigation((currentIndex + logosPerPage) % clientLogos.length);
  }, [currentIndex, logosPerPage, clientLogos.length, handleNavigation]);

  const showPrev = useCallback(() => {
    handleNavigation((currentIndex - logosPerPage + clientLogos.length) % clientLogos.length);
  }, [currentIndex, logosPerPage, clientLogos.length, handleNavigation]);

  // Automatic scrolling
  useEffect(() => {
    const interval = setInterval(showNext, 4000);
    return () => clearInterval(interval);
  }, [showNext]);

  const displayedLogos = clientLogos.slice(currentIndex, currentIndex + logosPerPage);

  return (
    <section className="py-6 px-8 md:px-12 lg:px-24 flex flex-col justify-center items-center space-y-8">
      {/* Section title */}
      <div className="text-start md:text-center">
        <h2 className="text-3xl font-extrabold text-[#024CAA]">Ils nous font confiance</h2>
        <p className="lg:text-xl mt-2 text-[#23374D]">
          Nos clients sont de grands groupes du CAC40 et des ETI qui souhaitent rendre plus productive leur façon de délivrer l’IT aux métiers et ainsi faire de leur SI un levier de performance et de rentabilité.
        </p>
      </div>

      {/* Client logos */}
      <div className="flex items-center justify-center space-x-4 w-full">
        <button onClick={showPrev} className="p-2 bg-gray-300 rounded-full hidden sm:inline-flex">
          <FaChevronLeft className="text-gray-700" />
        </button>

        <div className={`flex justify-center space-x-6 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`} style={{ width: logosPerPage * 120 + "px" }}>
          {displayedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="h-24 md:h-27 w-24 md:w-27 object-contain"
              style={{ maxWidth: "100px" }} // Fixed size for each logo
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

export default ClientSection;
