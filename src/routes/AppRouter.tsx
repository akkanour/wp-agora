import MainLayout from "@layouts/MainLayout/MainLayout";
import Acceuil from "@pages/Acceuil";
import NotFound from "@pages/NotFound";
import Presentation from "@pages/Presentation";
import Services from "@pages/Services";
import Consulting from "@pages/Consulting";
import Solutions from "@pages/Solutions";
import Contact from "@pages/Contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Partenaires from "@pages/Partenaires";
import References from "@pages/References";
import InterventionSurIncident from "@pages/InterventionSurIncident";
import ContratSupportMaintenance from "@pages/ContratSupportMaintenance";
import InfogeranceGlobalePartielle from "@pages/InfogeranceGlobalePartielle";
import RessourceEnRegie from "@pages/RessourceEnRegie";
import IntegrationERP from "@pages/IntegrationERP";
import QuiSommesNous from "@pages/QuiSommesNous";
import EtudeBesoins from "@pages/EtudeBesoins";
import RapportsLivrables from "@pages/RapportsLivrables";
import Formations from "@pages/Formations";

const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Acceuil /> }, // Home page
        {
          path: "presentations",
          element: <Presentation />,
          children: [
            { path: "qui-sommes-nous", element: <QuiSommesNous /> },
            { path: "partenaires", element: <Partenaires /> },
            { path: "references", element: <References /> },
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
          children: [
            { path: "etude-besoins", element: <EtudeBesoins /> },
            // { path: "definir-perimetre-prestations", element: <DefinirPerimetrePrestations /> },
            // { path: "etude-solutions-strategiques", element: <EtudeSolutionsStrategiques /> },
            { path: "rapports-livrables", element: <RapportsLivrables /> },
          ],
        },
        {
          path: "formations",
          element: <Formations />,
          // children: [
          //   { path: "inter-entreprises", element: <InterEntreprises /> },
          //   { path: "intra-entreprise", element: <IntraEntreprise /> },
          //   { path: "formations-personnalisees", element: <FormationsPersonnalisees /> },
          //   { path: "transfert-competences", element: <TransfertCompetences /> },
          // ],
        },
        { path: "solutions", element: <Solutions /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
