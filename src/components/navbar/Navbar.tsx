import logo from "./../../assets/logo.png";
import SignInButton from "./../sign-in-button/SignInButton";
import { Link } from "react-router-dom";
import MoreDropDown from "./MoreDropDown";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center p-4 bg-backgroundclr z-50">
      <Link to="/">
        <img
          src={logo}
          alt="Blackwing logo"
          className="mx-4 w-30 h-10 cursor-pointer"
        />
      </Link>
      <Link
        to="/markets"
        className="text-lg text-white hidden md:flex lg:flex justify-center hover:bg-gray-600 focus:bg-gray-600 rounded-lg cursor-pointer mx-2 px-2 py-1 w-20"
      >
        Markets
      </Link>
      <Link
        to="/earn"
        className="text-lg text-white hidden md:flex lg:flex justify-center hover:bg-gray-600 focus:bg-gray-600 rounded-lg cursor-pointer mx-2 px-2 py-1 w-20"
      >
        Airdrop
      </Link>
      <MoreDropDown />
      <SignInButton />
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
