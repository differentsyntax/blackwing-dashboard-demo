import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiTwoCoins } from "react-icons/gi";
import { FaParachuteBox } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

const HamburgerMenu = () => {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState<boolean>(false);
  return (
    <div className="md:hidden lg:hidden">
      <button onClick={() => setHamburgerMenuOpen(!isHamburgerMenuOpen)}>
        <FaBars className="text-white" />
      </button>
      {isHamburgerMenuOpen && (
        <div className="fixed top-20 left-0 w-full h-full bg-backgroundclr text-white flex justify-start z-50 pl-10">
          <ul className="space-y-2">
            <li
              className="text-lg text-white mx-2 px-2 py-4"
              onClick={() => setHamburgerMenuOpen(!isHamburgerMenuOpen)}
            >
              <Link to="/markets" className="flex items-center">
                <GiTwoCoins className="mx-2" />
                Markets
              </Link>
            </li>
            <li
              className="text-lg text-white mx-2 px-2 py-4"
              onClick={() => setHamburgerMenuOpen(!isHamburgerMenuOpen)}
            >
              <Link to="/earn" className="flex items-center">
                <FaParachuteBox className="mx-2" />
                Airdrops
              </Link>
            </li>
            <li
              className="text-lg text-white mx-2 px-2 py-4"
              onClick={() => setHamburgerMenuOpen(!isHamburgerMenuOpen)}
            >
              <Link to="/leaderboards" className="flex items-center">
                <MdBarChart className="mx-2" />
                Leaderboards
              </Link>
            </li>
            <li
              className="text-lg text-white mx-2 px-2 py-4 flex items-center"
              onClick={() => setHamburgerMenuOpen(!isHamburgerMenuOpen)}
            >
              <FaDiscord className="mx-2" />
              Discord
            </li>
            <li
              className="text-lg text-white mx-2 px-2 py-4 flex items-center"
              onClick={() => setHamburgerMenuOpen(!isHamburgerMenuOpen)}
            >
              <FaBookOpen className="mx-2" />
              Manual
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
