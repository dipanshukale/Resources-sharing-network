import React from "react";
import heroImg from "../assets/share img.jpeg";
// import heroImg from "./assets/hero-image.png"; // Make sure this image exists in your assets folder

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 lg:p-12">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16">
        {/* Left Side - Title, Description, Button */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#0ABAB5]">
            Student Resource Sharing Network
          </h1>
          <p className="text-lg sm:text-xl mb-8 font-light">
            Empowering students to lend, borrow, or share study essentials like books, notes, and gadgets within their campus. Save money, reduce waste, and build a smarter learning community.
          </p>
          <button className="bg-[#0ABAB5] hover:bg-[#0ABAB5] text-white font-semibold px-6 py-3 rounded-full transition duration-300">
            Explore Resources
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 w-full mb-12 lg:mb-0">
          <img
            src={heroImg}
            alt="Students sharing resources"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
