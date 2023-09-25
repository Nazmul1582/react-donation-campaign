import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto py-5">
        <div className="flex justify-between items-center">
          <img className="w-36" src={logo} alt="logo" />
          <nav>
            <ul className="flex gap-12 text-lg">
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
