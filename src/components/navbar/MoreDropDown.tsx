import { useEffect, useRef, useState } from "react";
import { FaBookOpen, FaCaretDown, FaCaretUp, FaDiscord } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { Link } from "react-router-dom";

const MoreDropDown = () => {
  const [isOpenDropDown, setOpenDropDown] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpenDropDown &&
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setOpenDropDown(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpenDropDown && event.key === "Escape") {
        setOpenDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpenDropDown]);

  const closeDropdown = () => setOpenDropDown(false);

  return (
    <div className="relative mx-2" ref={dropDownRef}>
      <button
        onClick={() => setOpenDropDown(!isOpenDropDown)}
        className="hover:bg-gray-600 cursor-pointer focus:outline-none focus:bg-gray-600 rounded-lg text-lg text-white px-2 py-1 w-20 hidden md:flex lg:flex justify-center items-center"
      >
        More
        {isOpenDropDown ? (
          <FaCaretUp className="m-1" />
        ) : (
          <FaCaretDown className="m-1" />
        )}
      </button>

      {isOpenDropDown && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-zinc-900 text-gray-300 text-md border border-zinc-900 rounded-lg shadow-lg w-48">
          <ul>
            <li
              onClick={closeDropdown}
              className="px-4 py-2 hover:bg-black hover:rounded-lg cursor-pointer"
            >
              <Link to="/leaderboards" className="flex items-center">
                <MdBarChart className="mr-2" />
                Leaderboards
              </Link>
            </li>
            <li
              onClick={closeDropdown}
              className="px-4 py-2 hover:bg-black hover:rounded-lg cursor-pointer flex items-center"
            >
              <FaDiscord className="mr-2" />
              Discord
            </li>
            <li
              onClick={closeDropdown}
              className="px-4 py-2 hover:bg-black hover:rounded-lg cursor-pointer flex items-center"
            >
              <FaBookOpen className="mr-2" />
              Manual
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoreDropDown;
