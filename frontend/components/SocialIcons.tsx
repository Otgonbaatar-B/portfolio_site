import React from "react";

const SocialIcons: React.FC = () => {
  return (
    <ul className="flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <li className="list-none">
        <a
          href="#"
          className="w-20 h-20 bg-white text-center leading-[80px] text-4xl mx-2 block rounded-full relative overflow-hidden border-3 border-white z-10 hover:bg-transparent"
        >
          <i className="fab fa-facebook-f text-gray-900 transition duration-500 ease-in-out z-30 hover:text-white transform hover:rotate-y-360"></i>
          <span className="absolute top-full left-0 w-full h-full bg-blue-800 transition duration-500 z-20"></span>
        </a>
      </li>
      <li className="list-none">
        <a
          href="#"
          className="w-20 h-20 bg-white text-center leading-[80px] text-4xl mx-2 block rounded-full relative overflow-hidden border-3 border-white z-10 hover:bg-transparent"
        >
          <i className="fab fa-twitter text-gray-900 transition duration-500 ease-in-out z-30 hover:text-white transform hover:rotate-y-360"></i>
          <span className="absolute top-full left-0 w-full h-full bg-blue-500 transition duration-500 z-20"></span>
        </a>
      </li>
      <li className="list-none">
        <a
          href="#"
          className="w-20 h-20 bg-white text-center leading-[80px] text-4xl mx-2 block rounded-full relative overflow-hidden border-3 border-white z-10 hover:bg-transparent"
        >
          <i className="fab fa-linkedin-in text-gray-900 transition duration-500 ease-in-out z-30 hover:text-white transform hover:rotate-y-360"></i>
          <span className="absolute top-full left-0 w-full h-full bg-blue-700 transition duration-500 z-20"></span>
        </a>
      </li>
      <li className="list-none">
        <a
          href="#"
          className="w-20 h-20 bg-white text-center leading-[80px] text-4xl mx-2 block rounded-full relative overflow-hidden border-3 border-white z-10 hover:bg-transparent"
        >
          <i className="fab fa-google-plus-g text-gray-900 transition duration-500 ease-in-out z-30 hover:text-white transform hover:rotate-y-360"></i>
          <span className="absolute top-full left-0 w-full h-full bg-red-600 transition duration-500 z-20"></span>
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
