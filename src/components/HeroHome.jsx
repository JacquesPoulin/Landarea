import React from "react";
import heroes from "../../data/heroes";


const HeroHome = () => {

  return (
    <div className={`flex flex-col m-0 bg-[url('../assets/images/heroes1.jpg')] h-96 bg-cover`}>
      <h1 className="font-primary m-5 mt-20 mb-10 text-4xl text-center text-slate-50">{heroes[0].title}</h1>
      <p className="font-regular m-5 text-xl text-center text-slate-50">{heroes[0].txt}</p>
    </div>
  );
};

export default HeroHome;
