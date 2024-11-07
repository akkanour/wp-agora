'use client';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-300 mt-10">
      <div className="w-full mx-auto p-6">
        <div className="flex flex-col items-center mt-6">
          <h3 className="text-lg font-semibold mb-2">Agora Technology</h3>
          <span className="text-sm text-gray-500 mb-4">Is More Than A Support</span>
          <ul className="flex flex-col items-center space-y-4 text-sm font-medium text-gray-500 md:flex-row md:space-y-0 md:space-x-6">
            
            <li>
              <RouterLink to="/"  className="hover:underline ">
                Accueil
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/consulting" className="hover:underline">
                Consulting
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/solutions"  className="hover:underline ">
                Solutions
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" className="hover:underline ">
                Contact
              </RouterLink>
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
