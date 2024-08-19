import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b-2 border-blue-700 text-center fixed top-0 bg-blue-600
    font-bold w-full text-white text-lg">
      <ul>
        <li className="inline-block py-4">
          <Link className="pl-6 pr-8" to="">Home</Link>
        </li>

        {/* <li className="inline-block py-4">
          <Link className="pl-6 pr-8" to="article">Article</Link>
        </li> */}

        <li className="inline-block py-4">
          <Link className="pl-6 pr-8" to="article-list">Article List</Link>
        </li>

        <li className="inline-block py-4">
          <Link className="pl-6 pr-8" to="about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
