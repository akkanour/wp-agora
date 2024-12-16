import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import ScrollTopButton from "@components/common/ScrollTopButton";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  // Si la route est la page d’accueil, on supprime le padding
  const isHomePage = location.pathname === "/";

  return (
    <div className="lg:grid grid-rows-layout h-screen w-full">
      <Header />
      {/* Si ce n'est pas la page d'accueil, on applique le padding global */}
      <main className={isHomePage ? "w-full" : "px-4 py-10 lg:py-12 lg:px-0 w-full max-w-7xl mx-auto space-y-6"}>
        <Outlet />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
};

export default MainLayout;
