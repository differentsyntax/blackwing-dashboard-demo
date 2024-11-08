import logo from "./../../assets/logo.png";
import SignInButton from "./../sign-in-button/SignInButton";
import { Link } from "react-router-dom";

/**
 * Navbar component displaying a logo, navigation links, and a sign-in button.
 *
 * @component
 * @returns {JSX.Element} - The rendered Navbar component.
 */
const Navbar = () => {
  return (
    <nav className="flex items-center p-4">
      <Link to="/">
        <img src={logo} alt="Blackwing logo" className="mx-4 w-30 h-10"/>
      </Link>
      <Link to="/markets" className="text-lg text-white mx-4 hidden md:block lg:block hover:text-gray-300">
        Markets
      </Link>
      <Link to="/earn" className="text-lg text-white mx-4 hidden md:block lg:block hover:text-gray-300">
        Airdrop
      </Link>
      <SignInButton />
    </nav>
  )
}

export default Navbar;
