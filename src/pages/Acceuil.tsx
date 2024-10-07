import ScrollTopButton from '@components/common/ScrollTopButton';
import Consulting from '@components/Consulting';
import Home from '@components/Home';
import Infrastructure from '@components/Infrastructure';
import Migrations from '@components/Migrations';
import NosServices from '@components/NosServices';
import Products from '@components/Produit';
import References from '@components/References';
import SolutionsCollaboratives from '@components/SolutionsCollaboratives';
import SolutionsSauvegarde from '@components/SolutionsSauvegarde';
import TypesPrestation from '@components/TypesPrestation';
import React from 'react';


const Acceuil: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      <Home />
      <NosServices />
      <Products />
      <References />
      <Consulting />
      <Migrations />
      <TypesPrestation />
      <SolutionsCollaboratives />
      <SolutionsSauvegarde />
      <Infrastructure />
      <ScrollTopButton />
    </div>
  );
};

export default Acceuil;
