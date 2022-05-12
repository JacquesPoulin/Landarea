import React from "react";

const PopupCards = ({ title, description, url }) => {
  return (
    <div id="PopupCards">
      <div className="">
        <h1 className="m-5 mt-20 mb-10 text-4xl text-center font-primary">
          {title}
        </h1>
        <div className="relative ">
          <img
            src={url}
            alt="Brugmansia suaveolens Tricolor"
            className="object-cover w-full h-96 rounded-xl"
          />
          <h2 className="absolute bottom-0">{description}</h2>
        </div>
      </div>
    </div>
  );
};

export default PopupCards;
