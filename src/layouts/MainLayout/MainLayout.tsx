import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content avec le padding-top pour compenser la hauteur du header */}
      <main className="flex-grow pt-16"> {/* Assurez-vous que le header a aussi h-16 */}
        {/* The Outlet will render the child routes */}
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
