import logo from "./../../assets/logo.png";
import SignInButton from "./../sign-in-button/SignInButton";

const Navbar = () => {
  return (
    <nav className="flex items-center p-4">
        <img src={logo} alt="Blackwing logo" className="mx-4 w-30 h-10" />
        <p className="text-lg text-white mx-4 hidden md:block lg:block" > Markets </p>
        <p className="text-lg text-white mx-4 hidden md:block lg:block" > Airdrop </p>
        <SignInButton />
    </nav>
  )
}

export default Navbar;
