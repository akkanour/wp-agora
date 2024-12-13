'use client';

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/20/solid';
import { menuItems } from '@components/common/menuItems';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const location = useLocation();

  const handleMenuClick = (menuName: string | null) => {
    setOpenSubMenu(openSubMenu === menuName ? null : menuName);
  };

  const handleLinkClick = (menuName: string | null) => {
    setMobileMenuOpen(false);
    setOpenSubMenu(null);
    setSelectedMenu(menuName);
  };

  return (
    <>
      <header className="relative z-30 w-full bg-additional-white text-primary-dark">
        <nav className="lg:mx-auto flex lg:max-w-7xl items-center justify-between p-2.5">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" onClick={() => handleLinkClick(null)}>
              <span className="sr-only">Your Company</span>
              <img alt="Logo" src="/logos-AT/AT-1.png" className="h-12 md:h-16" />
            </Link>
          </div>

          <div className="hidden lg:flex lg:gap-x-8 lg:flex-grow lg:justify-center">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subMenu ? (
                  <>
                    <button
                      onClick={() => handleMenuClick(item.name)}
                      className={`flex items-center gap-x-1 leading-6 font-title ${
                        selectedMenu === item.name
                          ? 'text-primary-lightBlue'
                          : 'text-primary-dark'
                      }`}
                    >
                      {item.name}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className={`h-5 w-5 ${
                          selectedMenu === item.name ? 'text-primary-lightBlue' : 'text-[#23374D]'
                        }`}
                      />
                    </button>
                    {openSubMenu === item.name && (
                      <div className="absolute z-10 mt-3 w-48 rounded-lg bg-white shadow-lg font-title">
                        {item.subMenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`block px-4 py-2 ${
                              location.pathname === subItem.href
                                ? 'border-l-4 border-primary-lightBlue text-primary-dark'
                                : 'text-primary-dark hover:bg-gray-100'
                            }`}
                            onClick={() => handleLinkClick(item.name)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`leading-6 font-title ${
                      selectedMenu === item.name ? 'text-primary-lightBlue' : 'text-primary-dark'
                    }`}
                    onClick={() => handleLinkClick(item.name)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              to="/contact"
              className="px-4 py-2 font-title text-additional-white hover:text-primary-dark bg-primary-darkBlue rounded-[6px] hover:bg-primary-orange"
              onClick={() => handleLinkClick(null)}
            >
              Contact Us
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="m-2.5 p-2.5"
            >
              {mobileMenuOpen ? (
                <XMarkIcon aria-hidden="true" className="h-8 w-8" />
              ) : (
                <Bars3Icon aria-hidden="true" className="h-8 w-8" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div
          className="fixed top-[70px] left-0 w-full bg-additional-white shadow-md z-20 transform transition-transform duration-300"
        >
          <nav className="flex flex-col p-4">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group py-2">
                {item.subMenu ? (
                  <>
                    <button
                      onClick={() => handleMenuClick(item.name)}
                      className="flex items-center justify-between w-full text-primary-dark font-title"
                    >
                      {item.name}
                      <ChevronDownIcon
                        className={`h-5 w-5 transition-transform ${
                          openSubMenu === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openSubMenu === item.name && (
                      <div className="mt-2 pl-4 space-y-2">
                        {item.subMenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block font-title text-primary-dark hover:text-primary-lightBlue hover:bg-gray-100"
                            onClick={() => handleLinkClick(item.name)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block text-primary-dark font-title hover:text-primary-lightBlue hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
