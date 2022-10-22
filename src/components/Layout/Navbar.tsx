import React from "react";
import { Link } from "react-router-dom";
// icons
import { FaGithub } from "react-icons/fa";

const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar mb-12 p-4 shadow-lg bg-[#191d24] text-neutral-content">
      <div className="flex items-center container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl text-white" />
          <Link to="/" className="text-lg font-bold align-middle">
            Github Finder
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link
              to="/"
              className="btn btn-ghost btn-sm rounded-[5px] transition-all mx-2 px-2 py-1 hover:bg-neutral-700"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost btn-sm rounded-[5px] transition-all mx-2 px-2 py-1 hover:bg-neutral-700"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
