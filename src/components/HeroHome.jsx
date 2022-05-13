import React from "react";
import heroes from "../../data/heroes";

// on crée le header de la page Home
const HeroHome = ({ isDark }) => {
  return (
    <div
      className={`flex flex-col justify-center m-0 bg-[url('../assets/images/heroes51.png')] h-96 bg-cover `}
    >
      <h1
        className={
          !isDark
            ? `m-5 mt-20 mb-10 text-7xl text-center font-primary text-slate-50`
            : `m-5 mt-20 mb-10 text-7xl text-center font-primary text-red-600`
        }
      >
        {heroes[0].title}
      </h1>
      <p
        className={
          !isDark
            ? `m-5 text-2xl text-center font-regular text-slate-50`
            : `m-5 text-2xl text-center font-regular text-yellow-500`
        }
      >
        {heroes[0].txt}
      </p>
    </div>
  );
};

export default HeroHome;
