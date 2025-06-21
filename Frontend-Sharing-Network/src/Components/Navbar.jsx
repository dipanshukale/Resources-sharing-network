// Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md text-gray-800 px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-[#0ABAB5]">ResourceNet</div>
      <ul className="hidden md:flex gap-6 font-medium">
        <li className="hover:text-[#0ABAB5] cursor-pointer">Home</li>
        <li className="hover:text-[#0ABAB5] cursor-pointer">Listings</li>
        <li className="hover:text-[#0ABAB5] cursor-pointer">My Requests</li>
        <li className="hover:text-[#0ABAB5] cursor-pointer">Profile</li>
      </ul>
      <button className="bg-[#0ABAB5] text-white px-4 py-2 rounded-full hover:bg-[#089C98] transition">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
