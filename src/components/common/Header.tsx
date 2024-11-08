// @components/Header.tsx
'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverGroup,
} from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, XMarkIcon, Bars3Icon, PhoneIcon, MapPinIcon } from '@heroicons/react/20/solid';
import { FaMailBulk } from 'react-icons/fa';

const menuItems = [
  { name: 'Accueil', href: '/' },
  {
    name: 'À propos',
    subMenu: [
      { name: 'Qui sommes-nous ?', href: '/a-propos/qui-sommes-nous' },
      { name: 'Nos Produits', href: '/a-propos/nos-produits' },
      { name: 'Nos Références', href: '/a-propos/nos-references' },
    ],
  },
  {
    name: 'Services',
    subMenu: [
      { name: 'Intervention sur Incident', href: '/services/intervention-sur-incident' },
      { name: 'Contrat de support et Maintenance', href: '/services/contrat-support-maintenance' },
      { name: 'Infogérance Globale ou Partielle', href: '/services/infogerance-globale-partielle' },
      { name: 'Ressource en Régie', href: '/services/ressource-en-regie' },
      { name: 'Intégration ERP', href: '/services/integration-erp' },
    ],
  },
  {
    name: 'Consulting',
    href: '/consulting',  // Consulting est maintenant un lien direct sans sous-menu
  },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const location = useLocation();

  // Fonction pour gérer le clic sur le menu principal
  const handleMenuClick = (menuName: string | null) => {
    setOpenSubMenu(openSubMenu === menuName ? null : menuName); // Toggle du sous-menu
  };

  // Ferme le menu mobile et les sous-menus après une navigation
  const handleLinkClick = (menuName: string | null) => {
    setMobileMenuOpen(false);
    setOpenSubMenu(null);
    setSelectedMenu(menuName); // Met à jour le menu sélectionné pour garder la ligne soulignée
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-[#F5F7F8] backdrop-blur text-[#23374D] shadow-md z-[1040]">
        <div className="bg-[#23374D] text-white text-sm py-2 px-4 md:px-6 flex flex-col items-center space-y-2 md:space-y-0 md:flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center w-full lg:text-left">
            <div className="flex items-center gap-1">
              <PhoneIcon className="h-5 w-5" />
              <span>+212 522 989 026</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <FaMailBulk className="h-5 w-5" />
              <span>services@agora-technology.com</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <MapPinIcon className="h-5 w-5" />
              <span>227, Boulevard GHANDI, N° 2, 20380-Casablanca</span>
            </div>
          </div>
        </div>

        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex lg:flex-1">
            <Link to="/" className="" onClick={() => handleLinkClick(null)}>
              <span className="sr-only">Your Company</span>
              <img alt="Logo" src="/logo.png" className="h-16 lg:h-20 w-auto" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#23374D]"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subMenu ? (
                  <>
                    <button
                      onClick={() => handleMenuClick(item.name)}
                      className={`flex items-center gap-x-1 text-sm font-semibold leading-6 ${selectedMenu === item.name ? 'text-[#024CAA]' : 'text-[#23374D]'}`}
                    >
                      {item.name}
                      <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-[#024CAA]" />
                      <span
                        className={`absolute bottom-[-4px] left-0 h-[2px] transition-all duration-500 ${selectedMenu === item.name || openSubMenu === item.name
                          ? 'w-full bg-[#024CAA]'
                          : 'w-0 group-hover:w-full bg-[#024CAA]'
                          }`}
                      ></span>
                    </button>
                    {openSubMenu === item.name && (
                      <div className="absolute z-10 mt-3 min-w-[200px] max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          {item.subMenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`block px-4 py-2 text-sm hover:bg-[#024CAA] hover:text-white whitespace-nowrap ${location.pathname === subItem.href
                                ? 'border-l-4 border-[#024CAA] bg-[#E5E5E5]'
                                : 'text-[#23374D]'
                                }`}
                              onClick={() => handleLinkClick(item.name)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="text-sm font-semibold leading-6 text-[#23374D] relative"
                    onClick={() => handleLinkClick(item.name)}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-[-4px] left-0 h-[2px] transition-all duration-500 ${selectedMenu === item.name ? 'w-full bg-[#024CAA]' : 'w-0 group-hover:w-full bg-[#024CAA]'}`}
                    ></span>
                  </Link>
                )}
              </div>
            ))}
          </PopoverGroup>
        </nav>
      </header>

      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-black opacity-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform transform duration-300">
          <div className="flex items-center justify-between">
            <Link to="/" className="" onClick={() => handleLinkClick(null)}>
              <span className="sr-only">Your Company</span>
              <img alt="Logo" src="/logo.png" className="h-16 w-auto md:hidden" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-[#23374D]"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 pt-14">
                {menuItems.map((item) => (
                  <Disclosure as="div" key={item.name} className="-mx-3">
                    {item.subMenu ? (
                      <>
                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 text-base font-semibold leading-7 text-[#23374D] hover:bg-[#E5E5E5]">
                          {item.name}
                          <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2 pl-6">
                          {item.subMenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block rounded-lg py-2 text-sm font-semibold leading-7 text-[#23374D] hover:bg-[#024CAA] hover:text-white"
                              onClick={() => handleLinkClick(item.name)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </DisclosurePanel>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#23374D] hover:bg-[#E5E5E5]"
                        onClick={() => handleLinkClick(item.name)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
