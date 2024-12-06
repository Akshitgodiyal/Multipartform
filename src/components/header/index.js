import React from 'react';

const Header = () => {
  return (
    <header className="bg-white text-[#1C2E5B] py-1 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
       <img src='/logo.png' alt="logo" />
        </div>
       
        <nav>
          <ul className="flex space-x-4 font-semibold">
            <li ><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">About</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
