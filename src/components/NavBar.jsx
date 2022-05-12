import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@tailwindui/react";
import navLinks from "../../data/navLinks";

const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className="absolute w-full flex justify-end">
      <nav className="w-full flex justify-end">
        <ul className="w-full flex justify-end p-4">
          <button type="button" onClick={() => setIsOpened(!isOpened)}>
            <img
              src="../../assets/images/burgerMenu.svg"
              alt=""
              className="w-6 h-6 text-lime-200 "
            />
          </button>
          {/* Transition : to FADE IN and FADE OUT */}

          <Transition
            show={isOpened}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* MOBILE MENU */}
            {isOpened && (
              <div className="absolute right-0 w-screen h-screen justify-center m-auto rounded-md top-14 bg-neutral-900">
                <ul className="items-center justify-center text-3xl text-center text-slate-50 font-exo">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.id}
                      to={link.path}
                      onClick={() => setIsOpened(false)}
                    >
                      <li className="mt-4 mb-8 font-medium hover:underline">
                        {link.title}
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
