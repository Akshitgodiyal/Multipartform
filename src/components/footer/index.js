import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" text-[#E4F9FA] pt-4 mt-8 relative bottom-0 w-full">
      <div className="h-[650px] bg-[#1c2f5b]">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-10 border-r border-r-white">
              <div className="logo mb-10">
                <img src="/logo-blue.png" alt="logo" />
              </div>
              <hr className="bg-white" />
              <div className="py-8">
                <p className="font-bold">info@omniscientplatforms.com</p>
                <p className="py-5 font-semibold">(214) 540-7221</p>
                <p className="pt-5 font-semibold">2626 Cole Ave, Suit 300</p>
                <p className="pb-5 font-semibold">Dalas, TX 75204</p>
              </div>
              <div className="grid grid-cols-3 gap-1 w-[160px]">
                <div className="bg-[#E4F9FA] p-2  w-9 rounded-md ">
                  <FaLinkedin size={20} fill="#1c2f5b" />
                </div>
                <div className="bg-[#E4F9FA] p-2  w-9 rounded-md">
                  <FaFacebook size={20} fill="#1c2f5b" />
                </div>
                <div className="bg-[#E4F9FA] p-2  w-9 rounded-md">
                  <FaGoogle size={20} fill="#1c2f5b" />
                </div>
              </div>
            </div>

            <div className="p-10 border-r border-r-white">
              <ul className="space-y-4 pl-5 font-semibold">
                <li>Home</li>
                <li>About</li>
                <li>Price Transparency</li>
                <li>Collections Calculator</li>
                <li>Task Automation</li>
                <li>Earnings Management</li>
                <li>Disparate Technology Integration</li>
                <li>Marketing Solutions</li>
                <li>Publications</li>
                <li>Research</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div  className="pl-10 py-10">
              <div>
                <h1 className="font-bold text-[28px] mb-5">About Omniscient Health</h1>
                <p className="font-semibold mb-5">Practical but modem approaches to improving financial
                performance and reducing burnout for healthcare providers.</p>
                <p>Research and collaboration on better solutions to operating/financial challenges so healthcare professionals can
focus on care. |</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800  mx-auto text-center text-white py-4 mt-0">
        <p className="text-sm">&copy; 2024 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
