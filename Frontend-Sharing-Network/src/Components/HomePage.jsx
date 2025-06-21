import React from "react";
import heroImg from "../assets/share img.jpeg";
import Video from "../assets/bg video.mp4";

const HomePage = () => {
  return (
    <div className="relative min-h-screen text-gray-800 overflow-hidden mt-16">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Wrapper */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-28 py-32">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6 text-white">
            Student Resource Sharing Network
          </h1>
          <p className="text-lg sm:text-xl mb-8 font-light text-white">
            Empowering students to lend, borrow, or share study essentials like books, notes, and gadgets within their campus. Save money, reduce waste, and build a smarter learning community.
          </p>
          <button className="bg-[#0ABAB5] hover:bg-[#089C98] text-white font-semibold px-6 py-3 rounded-full transition duration-300">
            Explore Resources
          </button>
        </div>

        {/* Right Image */}
        {/* <div className="lg:w-1/2 w-full mb-12 lg:mb-0"> */}
          {/* <img */}
            {/* // src="" */}
            {/* // alt="Students sharing resources" */}
            {/* // className="w-full h-auto max-w-md mx-auto" */}
          {/* // /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default HomePage;
