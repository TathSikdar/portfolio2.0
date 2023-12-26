import { useState } from "react";
import logo from "../assets/navbar/logo.svg";
import resume from "../assets/navbar/resume.pdf";
import menu from "../assets/navbar/hamburger-menu.svg";
import close from "../assets/navbar/x-button.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex fixed z-[100] w-5/6 sm:w-2/3 top-0 left-1/2 -translate-x-1/2 py-6 justify-between items-center">
      <a href="#home">
        <img src={logo} alt="Tath" className="h-[45px] my-0 py-0" />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 space-x-10">
        <li className="font-outfit font-normal cursor-pointer text-[16px] text-white underline-animation">
          <a href="#projects">Projects</a>
        </li>
        <li className="font-outfit font-normal cursor-pointer text-[16px] text-white underline-animation">
          <a href={resume} target="_blank">
            Resume
          </a>
        </li>
        <li className="font-outfit font-normal cursor-pointer text-[16px] hover:traslate-y-6">
          <button
            className="relative hover:-translate-y-1 focus:outline-none ease-in-out duration-150"
            onClick={() =>
              (window.location.href = "mailto:rikisikdar1@gmail.com")
            }
          >
            <div className="absolute rounded-lg inset-x-0 h-full -bottom-0.5 left-0.5 -right-0.5 bg-slate-400"></div>
            <div className="relative bg-white rounded-lg py-1 px-1.5 font-outfit font-semibold active:translate-y-0.5 active:translate-x-0.5 active:shadow-inner ease-in-out duration-75">
              Hire Me!
            </div>
          </button>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={menuOpen ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } p-6 bg-black bg-opacity-20 absolute top-20 right-0 min-w[140px] rounded-xl animate-slide-top`}
      >
        <ul className="list-none flex flex-col space-y-5 justify-end items-center flex-1">
          <li className="font-outfit font-normal cursor-pointer text-[16px] hover:traslate-y-6">
            <button
              className="relative hover:-translate-y-1 focus:outline-none ease-in-out duration-150"
              onClick={() =>
                (window.location.href = "mailto:rikisikdar1@gmail.com")
              }
            >
              <div className="relative bg-white rounded-lg py-1 px-1.5 font-outfit font-semibold active:translate-y-0.5 active:translate-x-0.5 active:shadow-inner ease-in-out duration-75">
                Hire Me!
              </div>
            </button>
          </li>
          <li className="font-outfit font-normal cursor-pointer text-[16px] text-white underline-animation">
            <a href={resume} target="_blank">
              Resume
            </a>
          </li>
          <li className="font-outfit font-normal cursor-pointer text-[16px] text-white underline-animation">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
