import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      {/* Header */}
        <Header />
      {/* Main Content */}
          {/* The Outlet will render the child routes */}
          <Outlet />
      {/* Footer */}
        <Footer />
    </div>
  );
};

export default MainLayout;