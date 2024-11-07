// @pages/MainLayout.tsx
import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import ScrollTopButton from "@components/common/ScrollTopButton";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1"> {/* Adjusts padding-top based on header height */}
        <Outlet />
        <ScrollTopButton />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
