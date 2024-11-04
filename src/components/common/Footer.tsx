'use client';
import { Link } from 'react-scroll';
const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="w-full mx-auto p-6">
        <div className="flex flex-col items-center mt-6">
          <h3 className="text-lg font-semibold mb-4">Agora Technology</h3>
          <ul className="flex flex-col items-center space-y-4 text-sm font-medium text-gray-500 md:flex-row md:space-y-0 md:space-x-6">
            <li>
              <Link to="home" smooth={true} duration={500} className="hover:underline">Accueil</Link>
            </li>
            <li>
              <Link to="nos-services" smooth={true} duration={500} className="hover:underline">Nos Services</Link>
            </li>
            <li>
              <Link to="references" smooth={true} duration={500} className="hover:underline">Nos Références</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="hover:underline">Contactez-nous</Link>
            </li>
          </ul>
        </div>

        <hr className="border-gray-200 my-6 w-full" />

        <span className="block text-sm text-gray-500 text-center mt-6">
          © 2024 Agora Technology. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
