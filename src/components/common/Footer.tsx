'use client';
import { Link as RouterLink } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-darkBlue text-additional-white font-body text-sm py-12 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr_1fr_1fr] gap-8">
          {/* Logo et description */}
          <div className="space-y-6">
            <img src="/logos-AT/AT-2.png" alt="Agora Technology" className="w-[60%] h-auto md:w-[70%]" />
            <p>
              Services, consulting, et formations pour accompagner votre entreprise dans ses transformations technologiques.
            </p>
          </div>

          {/* Menu "À propos" */}
          <div className="hidden md:block space-y-6">
            <h3 className="text-lg font-bold font-title">À propos</h3>
            <ul className="space-y-4">
              <li>
                <RouterLink to="/a-propos/qui-sommes-nous" className="hover:underline">Qui sommes-nous ?</RouterLink>
              </li>
              <li>
                <RouterLink to="/a-propos/nos-produits" className="hover:underline">Nos produits</RouterLink>
              </li>
              <li>
                <RouterLink to="/a-propos/nos-references" className="hover:underline">Nos références</RouterLink>
              </li>
            </ul>
          </div>

          {/* Menu "Services" */}
          <div className="hidden md:block space-y-6">
            <h3 className="text-lg font-bold font-title">Services</h3>
            <ul className="space-y-4">
              <li>
                <RouterLink to="/services/intervention-sur-incident" className="hover:underline">Intervention sur incident</RouterLink>
              </li>
              <li>
                <RouterLink to="/services/contrat-support-maintenance" className="hover:underline">Contrat de support et maintenance</RouterLink>
              </li>
              <li>
                <RouterLink to="/services/infogerance-globale-partielle" className="hover:underline ">Infogérance globale ou partielle</RouterLink>
              </li>
              <li>
                <RouterLink to="/services/ressource-en-regie" className="hover:underline">Ressource en régie</RouterLink>
              </li>
              <li>
                <RouterLink to="/services/integration-erp" className="hover:underline">Intégration ERP</RouterLink>
              </li>
            </ul>
          </div>
          {/* Pour les menus "À propos" et "Services" en une ligne en mode mobile */}
        <div className="mt-6 md:hidden grid grid-cols-2 gap-8">
          {/* Menu "À propos" mobile */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold font-title ">À propos</h3>
            <ul className="space-y-2">
              <li>
                <RouterLink to="/a-propos/qui-sommes-nous" className="hover:underline">Qui sommes-nous ?</RouterLink>
              </li>
              <li>
                <RouterLink to="/a-propos/nos-produits" className="hover:underline">Nos produits</RouterLink>
              </li>
              <li>
                <RouterLink to="/a-propos/nos-references" className="hover:underline">Nos références</RouterLink>
              </li>
            </ul>
          </div>

          {/* Menu "Services" mobile */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold font-title ">Services</h3>
            <ul className="space-y-2">
              <li>
                <RouterLink to="/services/intervention-sur-incident" className="hover:underline">Intervention sur incident</RouterLink>
              </li>
              <li>
                <RouterLink to="/services/contrat-support-maintenance" className="hover:underline">Contrat de support et maintenance</RouterLink>
              </li>
              <li>
                <RouterLink to="/services/infogerance-globale-partielle" className="hover:underline ">Infogérance globale ou partielle</RouterLink>
              </li>
              <li>
                <RouterLink to="/services/ressource-en-regie" className="hover:underline">Ressource en régie</RouterLink>
              </li>
              <li>
                <RouterLink to="/services/integration-erp" className="hover:underline">Intégration ERP</RouterLink>
              </li>
            </ul>
          </div>
        </div>
          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-title">Contact</h3>
            <div className="flex items-start space-x-4 leading-6">
              <FaPhoneAlt className="mt-1" />
              <span>+212 522 989 026</span>
            </div>
            <div className="flex items-start space-x-4 leading-6">
              <FaEnvelope className="mt-1" />
              <span>services@agora-technology.com</span>
            </div>
            <div className="flex items-start space-x-4 leading-6">
              <FaMapMarkerAlt className="mt-1" />
              <span>227, Boulevard GHANDI, Casablanca</span>
            </div>
          </div>
        </div>

        

        {/* Certifications et mentions */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center text-sm leading-3">
          <p className="mt-6 md:mt-0 text-center">
            © 2006-2024 Agora Technology. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;