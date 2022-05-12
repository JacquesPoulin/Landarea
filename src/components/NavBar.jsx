import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@tailwindui/react";
import navLinks from "../../data/navLinks";

const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className="absolute w-full flex justify-end">
      <nav className="w-full flex justify-end ">
        <ul className="w-full flex justify-end">
          <button
            type="button"
            onClick={() => setIsOpened(!isOpened)}
            className=" pt-3 pr-3 z-50"
          >
            <img
              src="../../assets/images/burgerMenu.svg"
              alt=""
              className="w-6 h-6 text-lime-200"
            />
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
              <div className="absolute right-0 w-full h-screen justify-center m-auto bg-cream z-10">
                <img
                  src="https://i.pinimg.com/originals/b1/14/fa/b114fa2591d6d4702b1b9442011f9db3.jpg"
                  alt=""
                  className="w-20 h-20 m-auto mt-10"
                />
                <ul className="items-center justify-center text-3xl text-black font-exo">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.id}
                      to={link.path}
                      onClick={() => setIsOpened(false)}
                    >
                      <li className="ml-3 font-secondary hover:underline text-xl border-b-2 py-4">
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
