'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { menuItems } from './menuItems';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleMenuClick = (menuName: string | null) => {
    setOpenSubMenu(openSubMenu === menuName ? null : menuName);
  };

  return (
    <header className="font-body w-full relative z-50">
      <nav
        aria-label="Global"
        className="relative mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-0 lg:py-4 z-50"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className=" z-50 relative">
            <span className="sr-only">Your Company</span>
            <img
              alt="Logo AT"
              src="/logos-AT/AT-1.png"
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-10">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.subMenu ? (
                <>
                  <button
                    onClick={() => handleMenuClick(item.name)}
                    className={`flex items-center gap-x-1 transition-colors duration-200 ${
                      openSubMenu === item.name
                        ? 'border-b-2 border-primary-darkblue text-primary-darkblue'
                        : 'text-primary-dark hover:text-primary-darkBlue hover:border-b-2 hover:border-primary-darkblue'
                    }`}
                  >
                    {item.name}
                    {openSubMenu === item.name ? (
                      <ChevronUpIcon className="h-5 w-5" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5" />
                    )}
                  </button>

                  {/* Sous-menu desktop */}
                  <div
                    className={`absolute left-0 mt-3 w-max rounded-[5px] bg-white shadow-lg ring-1 ring-gray-900/5 z-40 transition duration-400 transform ${
                      openSubMenu === item.name
                        ? 'opacity-100 scale-100 border border-primary-darkblue'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className="p-4">
                      {item.subMenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block gap-2 border-s-[3px] border px-4 py-3 text-gray-500 hover:border-primary-darkBlue hover:text-gray-700"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className="text-primary-dark hover:text-primary-darkBlue hover:border-b-2 hover:border-primary-darkblue transition-colors duration-200"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Contact Link */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/contact"
            className="block rounded-[5px] px-3 py-1.5 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Nous contacter
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 z-50 relative">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo AT"
                src="/logos-AT/AT-1.png"
                className="h-12 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menuItems.map((item) => (
                  <div key={item.name} className="relative group font-body">
                    {item.subMenu ? (
                      <>
                        <button
                          onClick={() => handleMenuClick(item.name)}
                          className={`flex w-full items-center justify-between text-primary-dark hover:text-primary-darkBlue transition-colors duration-200 ${
                            openSubMenu === item.name ? 'pl-2 border-l-4 border-primary-darkblue' : ''
                          }`}
                        >
                          {item.name}
                          {openSubMenu === item.name ? (
                            <ChevronUpIcon className="h-5 w-5" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5" />
                          )}
                        </button>
                        {openSubMenu === item.name && (
                          <div className="mt-2 space-y-2 pl-4">
                            {item.subMenu.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block font-body text-primary-dark hover:text-primary-darkBlue transition-colors duration-200"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="block font-body text-primary-dark hover:text-primary-darkblue transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
