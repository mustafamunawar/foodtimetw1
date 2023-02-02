import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsMoonStars, BsSun } from "react-icons/bs";
import DarkModeButton from "./DarkModeButton";

import { FaBars, FaShoppingCart } from "react-icons/fa";

const navbarItems = [
  { itemName: "Breakfast", href: "/Breakfast" },
  { itemName: "Lunch", href: "/Lunch" },
  { itemName: "Dinner", href: "/Dinner" },
  // { itemName: "Sign In", href: "#projects" },
];

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLinkClick = () => {
    setNavbarOpen(false);
    document.getElementById("menu").scrollIntoView();
  };
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkModeClick = () => {
    setNavbarOpen(false);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <nav className="w-full fixed top-0 z-30 flex flex-wrap items-center justify-between px-2 py-0 bg-lightbg-navbar dark:bg-darkbg-navbar text-lighttext-navbar dark:text-darktext-navbar">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between sm:w-auto sm:static sm:block sm:justify-start">
            <a
              className="font-salsa text-2xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap font-bold text-primary-500"
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
                  <FaShoppingCart className="text-2xl inline" />
                </a>
              </li>
              <li>
                <button
                  onClick={handleDarkModeClick}
                  className="text-xl px-3 py-2 flex items-center leading-snug hover:opacity-75"
                >
                  {darkMode ? (
                    <BsMoonStars className="text-xl inline" />
                  ) : (
                    <BsSun className="text-xl inline" />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
