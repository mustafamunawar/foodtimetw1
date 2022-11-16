import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/fontawesome-free-solid";
import { FaBars } from "react-icons/fa";

const navbarItems = [
  { itemName: "Breakfast", href: "#Breakfast" },
  { itemName: "Lunch", href: "#Lunch" },
  { itemName: "Dinner", href: "#Dinner" },
  { itemName: "Sign In", href: "#projects" },
];

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="w-full fixed top-0 z-30 flex flex-wrap items-center justify-between px-2 py-0 bg-[#222A35]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between text-red-500">
          <div className="w-full relative flex justify-between sm:w-auto sm:static sm:block sm:justify-start">
            <a
              className="text-2xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap font-bold text-red-500"
              href="#home"
            >
              Food-Time
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
                    <a
                      className="text-xl px-3 py-2 flex items-center leading-snug hover:opacity-75"
                      href={item.href}
                      onClick={() => setNavbarOpen(false)}
                    >
                      <span className="ml-2">{item.itemName}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
