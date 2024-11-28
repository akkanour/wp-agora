import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@layouts/MainLayout/MainLayout";
import Acceuil from "@pages/Acceuil";
import NotFound from "@pages/NotFound";
import Services from "@pages/Services";
import Consulting from "@pages/Consulting";
import Solutions from "@pages/Solutions";
import Contact from "@pages/Contact";
import References from "@pages/References";
import InterventionSurIncident from "@pages/InterventionSurIncident";
import ContratSupportMaintenance from "@pages/ContratSupportMaintenance";
import InfogeranceGlobalePartielle from "@pages/InfogeranceGlobalePartielle";
import RessourceEnRegie from "@pages/RessourceEnRegie";
import IntegrationERP from "@pages/IntegrationERP";
import QuiSommesNous from "@pages/QuiSommesNous";
import Formations from "@pages/Formations";
import Produits from "@pages/Produits";
import Propos from "@pages/Propos";


const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Acceuil /> }, // Home page
        {
          path: "a-propos",
          element: <Propos />,
          children: [
            { path: "qui-sommes-nous", element: <QuiSommesNous /> },
            { path: "nos-produits", element: <Produits /> },
            { path: "nos-references", element: <References /> },
          ],
        },
        {
          path: "services",
          element: <Services />,
          children: [
            { path: "intervention-sur-incident", element: <InterventionSurIncident /> },
            { path: "contrat-support-maintenance", element: <ContratSupportMaintenance /> },
            { path: "infogerance-globale-partielle", element: <InfogeranceGlobalePartielle /> },
            { path: "ressource-en-regie", element: <RessourceEnRegie /> },
            { path: "integration-erp", element: <IntegrationERP /> },
          ],
        },
        {
          path: "consulting",
          element: <Consulting />,
        },
        {
          path: "formations",
          element: <Formations />,
        },
        { path: "solutions", element: <Solutions /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
