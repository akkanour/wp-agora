import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      {/* Main Content avec un espace en haut pour éviter le chevauchement */}
      <main className="flex-1 md:pt-[120px]"> {/* Ajustez `120px` selon la hauteur réelle du header */}
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
