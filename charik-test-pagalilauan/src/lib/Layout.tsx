import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className=" text-custom-text bg-custom-bg relative min-h-dvh">
      <Navbar />
      <main className=" pt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
