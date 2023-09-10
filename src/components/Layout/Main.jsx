import { Outlet } from "react-router-dom";
import Navbar from "../Home/Share/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
