import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";

function Li({ item, href, closeNavbar }) {
  return (
    <li className="nav-item">
      <a
        className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
        href={href}
        onClick={() => closeNavbar()}
      >
        <span className="ml-2">{item}</span>
      </a>
    </li>
  );
}

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between text-white">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#pablo"
            >
              m-Saudagar
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} className="" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="navbar-1"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Li
                item="Home"
                href="#"
                closeNavbar={() => setNavbarOpen(false)}
              />
              <Li
                item="About"
                href="#"
                closeNavbar={() => setNavbarOpen(false)}
              />
              <Li
                item="Skills"
                href="#"
                closeNavbar={() => setNavbarOpen(false)}
              />
              <Li
                item="Projects"
                href="#"
                closeNavbar={() => setNavbarOpen(false)}
              />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
