// @pages/Acceuil.tsx
'use client';
import React from 'react';
import AboutSection from '@components/Acceuil/AboutSection';
import ServicesSection from '@components/Acceuil/ServicesSection';
import SolutionsSection from '@components/Acceuil/SolutionsSection';
import ClientSection from '@components/Acceuil/ClientSection';
import ProductSection from '@components/Acceuil/ProductSection';
import HeaderSection from '@components/Acceuil/HeaderSection';

const Acceuil: React.FC = () => {
  return (
    <div>
      <HeaderSection />
      <AboutSection />
      <ProductSection />
      <SolutionsSection/>
      <ServicesSection />
      <ClientSection />
    </div>
  );
};

export default Acceuil;
