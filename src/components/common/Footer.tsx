'use client';
import { Link as RouterLink } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-darkBlue text-additional-white font-body w-full">
      {/* Conteneur interne centré et limité en largeur, avec espacements responsive */}
      <div className="max-w-7xl mx-auto p-4 lg:px-0 ">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr_1fr_1fr] gap-8">
          {/* Logo et description */}
          <div className="space-y-6 text-[14px]">
            <img src="/logos-AT/AT-2.png" alt="Agora Technology" className="h-12 w-auto" />
            <p>
              Services, consulting, et formations pour accompagner votre entreprise dans ses transformations technologiques.
            </p>
          </div>

          {/* Menu "À propos" (desktop) */}
          <div className="hidden md:block space-y-6">
            <h3 className="text-[16px] font-bold font-body">À propos</h3>
            <ul className="space-y-4 text-[14px]">
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

          {/* Menu "Services" (desktop) */}
          <div className="hidden md:block space-y-6">
            <h3 className="text-[16px] font-bold font-body">Services</h3>
            <ul className="space-y-4 text-[14px]">
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

          {/* Version mobile des menus "À propos" et "Services" */}
          <div className="mt-6 md:hidden grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-[16px] font-bold font-body">À propos</h3>
              <ul className="space-y-2 text-[14px]">
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

            <div className="space-y-2">
              <h3 className="text-[16px] font-bold font-body">Services</h3>
              <ul className="space-y-2 text-[14px]">
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
            <h3 className="text-[16px] font-bold font-body">Contact</h3>
            <div className="flex items-start space-x-4 leading-6 text-[14px]">
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

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center text-sm leading-3">
          <p className="mt-6 md:mt-0 text-center text-[14px]">
            © 2006-2024 Agora Technology. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
