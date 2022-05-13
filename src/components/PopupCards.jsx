import React from "react";

// on crée les cartes sections de la page Store
const PopupCards = ({ title, description, url }) => {
  return (
    <div id="PopupCards">
      <h1 className="m-5 mt-10 mb-2 text-xl text-center font-primary">
        #{title}
      </h1>
      <div className="relative mb-5">
        <img src={url} alt={title} className="object-cover w-full h-[70vh]" />
        <h2 className="absolute bottom-0 justify-center w-screen py-4 text-center opacity-70 bg-slate-50/80 font-second px-4">
          {description}
        </h2>
      </div>
    </div>
  );
};

export default PopupCards;
