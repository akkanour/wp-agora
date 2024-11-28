// @pages/Presentation.tsx
'use client';

import { Outlet } from "react-router-dom";

const Propos: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-32 xl:px-44">
      <Outlet />
    </div>
  );
};

export default Propos;
