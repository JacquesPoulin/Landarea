import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@tailwindui/react";
import navLinks from "../../data/navLinks";

const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className="w-screen flex">
      <nav className="w-screen flex">
        <ul className="w-screen flex justify-end relative">
          <button
            type="button"
            onClick={() => setIsOpened(!isOpened)}
            className=" pr-3 z-50"
          >
            {" "}
            {!isOpened ? (
              <img
                src="../../assets/images/burgerMenu.svg"
                alt="menu de navigation"
                className="w-6 h-6 text-lime-200 outline-none active:outline-none fixed top-3	right-5"
              />
            ) : (
              <img
                src="../../assets/images/cross1.svg"
                alt="menu de navigation"
                className="w-10 h-10 text-lime-200 outline-none active:outline-none fixed top-3	right-3"
              />
            )}
          </button>

          {/* Transition : to FADE IN and FADE OUT */}
          <Transition
            show={isOpened}
            enter="transition-opacity"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* MOBILE MENU */}
            {isOpened && (
              <div className="fixed right-0 w-full h-screen justify-center m-auto bg-greeny z-10">
                <div className=" w-full h-auto flex flex-col mt-20 justify-center text-center mb-6">
                  <h1 className="text-xl text-slate-50 font-primary">
                    LANDAREA
                  </h1>
                  <img
                    src="../../assets/images/LOGO.png"
                    alt=""
                    className="w-20 h-20 m-auto"
                  />
                  <h3 className="font-regular text-slate-50">
                    Le paradis des plantes
                  </h3>
                </div>
                <ul className="items-center justify-center text-black mt-24">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.id}
                      to={link.path}
                      onClick={() => setIsOpened(false)}
                    >
                      <li className="flex justify-between ml-3 font-second lg:hover:underline text-xl border-b-2 py-4 text-slate-50">
                        {link.title}
                        <img
                          src="../../assets/images/nav-arrow-right-svgrepo-com.svg"
                          alt="fleche droite de navigation"
                        />
                      </li>
                    </NavLink>
                  ))}
                </ul>
              </div>
            )}
          </Transition>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
