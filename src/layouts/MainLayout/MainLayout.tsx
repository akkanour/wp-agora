// @pages/MainLayout.tsx
import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import ScrollTopButton from "@components/common/ScrollTopButton";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="flex-1 pt-28">
        <Outlet />
        <ScrollTopButton />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
