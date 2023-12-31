import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="header flex justify-center items-center gap-x-5 text-white py-10 mb-10">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movies
      </NavLink>
    </header>
  );
}

export default Header;
