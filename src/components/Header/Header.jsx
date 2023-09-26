import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto py-5">
        <div className="flex justify-between items-center gap-2">
          <Link to="/">
            <img className="w-28 md:w-36" src={logo} alt="logo" />
          </Link>
          <nav>
            <ul className="flex gap-5 md:gap-12 md:text-lg">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/donation">Donation</NavLink>
              </li>
              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
