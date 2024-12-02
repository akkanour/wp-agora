import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import ScrollTopButton from "@components/common/ScrollTopButton";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="grid grid-rows-layout min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
};

export default MainLayout;
