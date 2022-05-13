import React from "react";
import heroes from "../../data/heroes";

// on crée le header de la page Add
const HeroAdd = ({isDark}) => {
  return (
    <div
      className={`flex flex-col m-0 bg-[url('../assets/images/heroes2.jpg')] h-96 bg-cover`}
    >
      <h1 className={isDark?`font-primary m-5 mt-20 mb-10 text-4xl text-center text-slate-50`:`font-primary m-5 mt-20 mb-10 text-4xl text-center text-red-600`}>
        {heroes[1].title}
      </h1>
      <p className={isDark?`font-regular m-5 text-xl text-center text-slate-50`:`font-regular m-5 text-xl text-center text-yellow-500`}>
        {heroes[1].txt}
      </p>
    </div>
  );
};

export default HeroAdd;
