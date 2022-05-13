import React from "react";
import propTypes from "prop-types";

// on crée les cartes sections de la page Store
const PopupCards = ({ title, description, url, isDark }) => {
  return (
    <div id="PopupCards">
      <h1
        className={
          isDark
            ? `m-5 mt-10 mb-2 text-xl text-center font-primary text-slate-900`
            : `m-5 mt-10 mb-2 text-xl text-center font-primary text-green-600`
        }
      >
        #{title}
      </h1>
      <div className="relative mb-5">
        <img src={url} alt={title} className="object-cover w-full h-[70vh]" />
        <h2 className="absolute bottom-0 justify-center w-screen py-4 text-center opacity-70 bg-slate-50/100 font-main px-4">
          {description}
        </h2>
      </div>
    </div>
  );
};

PopupCards.propTypes = {
  isDark: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};

export default PopupCards;
