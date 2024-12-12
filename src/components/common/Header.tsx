// @components/Header.tsx
'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, PopoverGroup} from '@headlessui/react';
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
      <header
        className="relative top-0 w-full bg-secondary-white text-primary-dark font-title text-sm z-[1040]">

        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2.5">
          <div className="flex lg:flex-1">
            <Link to="/" className="" onClick={() => handleLinkClick(null)}>
              <span className="sr-only">Your Company</span>
              <img alt="Logo" src="/logos-AT/AT-1.png" className="h-16  w-auto" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
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
                      className={`flex items-center gap-x-1 leading-6 ${selectedMenu === item.name ? 'text-primary-lightBlue' : 'text-primary-dark'}`}
                    >
                      {item.name}
                      <ChevronDownIcon aria-hidden="true" className={"h-5 w-5 flex-none ${selectedMenu === item.name ? 'text-primary-lightBlue' : 'text-[#23374D]'}"} />
                      <span
                        className={`absolute bottom-[0px] left-0 h-[2px] transition-all duration-500 ${selectedMenu === item.name || openSubMenu === item.name
                          ? 'w-full bg-primary-lightBlue'
                          : 'w-0 group-hover:w-full bg-primary-lightBlue'
                          }`}
                      ></span>
                    </button>
                    {openSubMenu === item.name && (
                      <div className="absolute z-10 mt-3 min-w-[200px] max-w-xs overflow-hidden rounded-lg bg-white shadow-lg">
                        <div className="p-2.5">
                          {item.subMenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`block p-2 hover:bg-primary-lightBlue hover:text-white whitespace-nowrap ${location.pathname === subItem.href
                                ? 'border-l-4 border-primary-lightBlue '
                                : 'text-primary-darkBlue'
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
                    className={`leading-6 ${selectedMenu === item.name ? 'text-primary-lightBlue' : 'text-[#23374D]'} relative`}
                    onClick={() => handleLinkClick(item.name)}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-[-3px] left-0 h-[2px] transition-all duration-500 ${selectedMenu === item.name ? 'w-full bg-primary-lightBlue' : 'w-0 group-hover:w-full bg-primary-lightBlue'}`}
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
                              className="block rounded-lg py-2 text-sm font-semibold leading-7 text-[#23374D] hover:bg-primary-lightBlue hover:text-white"
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
