import { useState } from "react";

import NavBar from "./NavBar";

function Navbar() {
  const [mobileNavVisible, setmobileNavVisible] = useState(false);

  function toggleNavBar() {
    setmobileNavVisible(!mobileNavVisible);
  }

  return (
    <header>
      <div id="logo">LOGO</div>
      <button id="navbar-mobile__button" onClick={toggleNavBar}>
        <div className={mobileNavVisible ? "rotate-down" : ""}></div>
        <div className={mobileNavVisible ? "hide" : ""}></div>
        <div className={mobileNavVisible ? "rotate-up" : ""}></div>
      </button>
      <NavBar isVisible={mobileNavVisible} />
    </header>
  );
}

export default Navbar;
