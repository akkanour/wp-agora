import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div className="p-1  grid grid-rows-[auto,1fr,auto] min-h-screen ">
      <div><Header /></div>
      <div><Outlet /></div>
      <div><Footer /></div>
    </div>
  );
};
export default MainLayout;

