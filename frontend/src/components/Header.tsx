import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="p-2 bg-gray-800">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="w-64">
          <Logo></Logo>
        </div>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 hover:text-orange-500 transition-colors font-bold uppercase text-xl"
              : "text-white font-bold uppercase text-xl"
          }
          to={"/editor"}
        >
          Editor
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
