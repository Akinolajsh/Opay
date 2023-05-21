import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Opay from "../reUse/Opay";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Opay />
      <Footer />
    </div>
  );
};

export default Layout;
