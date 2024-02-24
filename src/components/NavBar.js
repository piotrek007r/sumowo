import { Link } from "react-router-dom";

const navBarItems = [
  { path: "/", name: "siedlisko" },
  { path: "offer", name: "domki" },
  { path: "bookings", name: "rezerwacje" },
  { path: "contact", name: "kontakt" },
];

function NavBar({ isVisible }) {
  return (
    <>
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
      <nav id="navbar-mobile" className={!isVisible ? "visible" : ""}>
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
    </>
  );
}

export default NavBar;
