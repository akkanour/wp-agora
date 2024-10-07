import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-lg">
      {/* Top bar with contact info */}
      <div className="bg-sky-950 text-white py-2">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 px-4">
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <a href="mailto:services@agora-technology.com" className="hover:underline text-sm">
              services@agora-technology.com
            </a>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <span className="text-sm">227, Boulevard Ghandi, Casablanca</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <span className="text-sm">+212 522 989 026</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a className="flex items-center">
            <img src="./logo.png" className="h-24" alt="Logo Agora Technology" />
          </a>
          <div className="lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" />
              </svg>
            </button>
          </div>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto`}>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="nos-services"
                  smooth={true}
                  duration={500}
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                >
                  Nos Services
                </Link>
              </li>

              {/* Sous-menu Solutions */}
              <li className="relative">
                <button
                  onClick={toggleSubMenu}
                  className="flex items-center py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 w-full lg:w-auto"
                >
                  Solutions
                  {isSubMenuOpen ? (
                    <FaChevronUp className="ml-2" />
                  ) : (
                    <FaChevronDown className="ml-2" />
                  )}
                </button>
                {isSubMenuOpen && (
                  <ul className="absolute bg-white shadow-lg rounded-lg p-4 mt-2 w-48">
                    <li>
                      <Link
                        to="consulting"
                        smooth={true}
                        duration={500}
                        className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                      >
                        Consulting
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="migrations"
                        smooth={true}
                        duration={500}
                        className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                      >
                        Migrations
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="types-de-prestation"
                        smooth={true}
                        duration={500}
                        className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                      >
                        Types de Prestation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="solutions-collaboratives"
                        smooth={true}
                        duration={500}
                        className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                      >
                        Solutions Collaboratives
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="solutions-sauvegarde"
                        smooth={true}
                        duration={500}
                        className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                      >
                        Solutions de Sauvegarde
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="infrastructure"
                        smooth={true}
                        duration={500}
                        className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                      >
                        Solutions d'Infrastructure
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="products"
                  smooth={true}
                  duration={500}
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                >
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link
                  to="references"
                  smooth={true}
                  duration={500}
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                >
                  Nos Références
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                >
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;