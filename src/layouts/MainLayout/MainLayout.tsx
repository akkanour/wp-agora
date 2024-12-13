import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import ScrollTopButton from "@components/common/ScrollTopButton";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
};

export default MainLayout;
