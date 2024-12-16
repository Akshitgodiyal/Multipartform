import React from "react";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-white text-[#1C2E5B]  shadow-md">
      <div className="bg-[#1C2E5B] py-4 px-10">
        <div className="justify-end text-white">
          <p className="text-right text-[12px]">
            <i>Improving Financial Performance & Reducing Burnout for Healthcare
            Providers</i> | Omniscient Platforms
          </p>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center px-4 py-1">
        <div onClick={()=>navigate('/')}>
          <img src="/logo.png" alt="logo" />
        </div>

        <nav>
          <ul className="flex space-x-4 font-semibold">
            <li>
              <a href="/" className="hover:text-[#1C2E5B]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1C2E5B]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1C2E5B]">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
