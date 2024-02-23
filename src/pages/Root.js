import { Outlet } from "react-router-dom";
import Navbar from "../components/MainNavbar";

function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
