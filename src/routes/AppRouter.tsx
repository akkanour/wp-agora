import MainLayout from "@layouts/MainLayout/MainLayout";
import Acceuil from "@pages/Acceuil";
import NotFound from "@pages/NotFound";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppRouter: React.FC = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <MainLayout />
      ),
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Acceuil /> },
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
