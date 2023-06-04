import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";

import { FaBars } from "react-icons/fa";
import { BsCart, BsFillCartFill } from "react-icons/bs";

import { useContext } from 'react';
import { AppContext } from '../AppContext';

const navbarItems = [
  { itemName: "Breakfast", href: "/Breakfast" },
  { itemName: "Lunch", href: "/Lunch" },
  { itemName: "Dinner", href: "/Dinner" },
  // { itemName: "Sign In", href: "#projects" },
];

export default function Navbar({ fixed, cartItems }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLinkClick = () => {
    setNavbarOpen(false);
  };

  const ctx = useContext(AppContext);

  return (
    <>
      <nav className="w-full fixed top-0 z-30 flex flex-wrap items-center justify-between px-2 py-0 bg-lightbg-navbar dark:bg-darkbg-navbar text-lighttext-navbar dark:text-darktext-navbar">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between sm:w-auto sm:static sm:block sm:justify-start">
            <Link
              className="font-salsa text-2xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap font-bold text-primary-500"
              to="/"
            >
              Food Time
            </Link>
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
                      to={item.href}
                      onClick={() => onLinkClick()}
                    >
                      <span className="ml-2">{item.itemName}</span>
                    </Link>
                  </li>
                );
              })}

              <li className="nav-item">
                <Link
                  to="cart"
                  onClick={() => setNavbarOpen(false)}
                  className="text-xl px-3 py-2 flex items-center leading-snug hover:opacity-75"
                >
                  {cartItems.length===0? <BsCart className="text-2xl inline" /> : <BsFillCartFill className="text-2xl inline" />}
                </Link>
              </li>
              <li>
                <DarkModeButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
