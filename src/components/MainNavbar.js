import { Link } from "react-router-dom";
import { useState } from "react";

const navBarItems = [
  { path: "/", name: "siedlisko" },
  { path: "offer", name: "domki" },
  { path: "bookings", name: "rezerwacje" },
  { path: "contact", name: "kontakt" },
];

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
      <nav id="navbar-std">
        <ul className="navbar__list">
          {navBarItems.map((item) => (
            <li key={item.name} className="navbar__item">
              <Link to={item.path} className="navbar__link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav id="navbar-mobile" className={!mobileNavVisible ? "visible" : ""}>
        <ul className="navbar__list">
          {navBarItems.map((item) => (
            <li key={item.name} className="navbar__item">
              <Link to={item.path} className="navbar__link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
