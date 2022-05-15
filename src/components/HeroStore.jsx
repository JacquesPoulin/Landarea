import React from "react";
import propTypes from "prop-types";
import heroes from "../../data/heroes";
import Button from "./Button";

// on crée le header de la page Store
const HeroStore = ({ isDark }) => {
  return (
    <div
      className={`flex flex-col justify-around m-0 bg-[url('../assets/images/heroes3.jpg')] h-[80vh] bg-cover`}
    >
      <h1
        className={
          !isDark
            ? `font-primary m-5 mt-20 mb-10 text-3xl text-center text-slate-50`
            : `font-primary m-5 mt-20 mb-10 text-3xl text-center text-red-600`
        }
      >
        {heroes[2].title}
      </h1>
      <p
        className={
          !isDark
            ? `font-regular m-5 text-lg text-center text-slate-50`
            : `font-regular m-5 text-lg text-center text-yellow-500`
        }
      >
        {heroes[2].txt}
      </p>
      <Button />
    </div>
  );
};

HeroStore.propTypes = {
  isDark: propTypes.bool.isRequired,
};

export default HeroStore;
