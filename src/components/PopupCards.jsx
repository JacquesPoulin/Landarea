import React from "react";

const PopupCards = ({ title, description, url }) => {
  return (
    <div className="">
      <h1 className="m-5 mt-10 mb-10 text-4xl text-center font-primary">
        {title}
      </h1>
      <div className="relative mb-5">
        <img
          src={url}
          alt="Brugmansia suaveolens Tricolor"
          className="object-cover w-full h-96 rounded-xl"
        />
        <h2 className="absolute bottom-0 justify-center w-screen mb-10 text-center opacity-70 bg-slate-300">
          {description}
        </h2>
      </div>
    </div>
  );
};

export default PopupCards;
