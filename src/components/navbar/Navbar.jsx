import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaShoppingCart } from "react-icons/fa";

const navbarItems = [
  { itemName: "Breakfast", href: "/Breakfast" },
  { itemName: "Lunch", href: "/Lunch" },
  { itemName: "Dinner", href: "/Dinner" },
  // { itemName: "Sign In", href: "#projects" },
];

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const onDarkModeClick = () => {
    setDarkMode(!darkMode);
    document.getElementById("menu").scrollIntoView();
  };

  const onLinkClick = () => {
    setNavbarOpen(false);
    document.getElementById("menu").scrollIntoView();
  };

  return (
    <>
      <nav className="w-full fixed top-0 z-30 flex flex-wrap items-center justify-between px-2 py-0 bg-[#222A35]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between text-red-500">
          <div className="w-full relative flex justify-between sm:w-auto sm:static sm:block sm:justify-start">
            <a
              className="font-salsa text-2xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap font-bold text-red-500"
              href="#home"
            >
              {/* <img
                src="/images/foodtime-logo8.png"
                alt="Food Time"
                width="48"
                height="48"
              /> */}
              Food Time
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block sm:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {/* <FontAwesomeIcon icon={faBars} className="" /> */}
              <FaBars />
            </button>
          </div>
          <div
            className={
              "sm:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="navbar-1"
          >
            <ul className="flex flex-col sm:flex-row list-none sm:ml-auto">
              {navbarItems.map((item, i) => {
                return (
                  <li key={i} className="nav-item">
                    <Link
                      className="text-xl px-3 py-2 flex items-center leading-snug hover:opacity-75"
                      to={item.href + "#menu"}
                      onClick={() => onLinkClick()}
                    >
                      <span className="ml-2">{item.itemName}</span>
                    </Link>
                  </li>
                );
              })}

              <li className="nav-item">
                <a
                  href="#footer"
                  onClick={() => setNavbarOpen(false)}
                  className="text-xl px-3 py-2 flex items-center leading-snug hover:opacity-75"
                >
                  <FaShoppingCart className="text-2xl inline  text-red-700" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
