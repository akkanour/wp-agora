'use client';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040c3d]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Section supérieure avec le logo et la description */}
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img
              src="/logos-AT/AT-2.png"
              alt="Agora Technology Logo"
              className="w-40 h-auto" // Ajustez la taille du logo ici
            />
          </div>

          {/* Description */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-2">Agora Technology</h3>
            <span className="text-sm text-white">Is More Than A Support</span>
          </div>
        </div>

        {/* Liens */}
        <ul className="flex flex-col items-center mt-8 space-y-4 text-sm font-medium text-white md:flex-row md:space-y-0 md:space-x-6">
          <li>
            <RouterLink to="/" className="hover:underline">
              Accueil
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/consulting" className="hover:underline">
              Consulting
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/solutions" className="hover:underline">
              Solutions
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" className="hover:underline">
              Contact
            </RouterLink>
          </li>
        </ul>

        <hr className="my-6 border-gray-700" />

        {/* Section inférieure */}
        <div className="text-center">
          <span className="block text-sm text-white">
            © 2024 Agora Technology. Tous droits réservés.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
