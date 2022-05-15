import React from "react";
import propTypes from "prop-types";

const PlantCards = ({
  url,
  name,
  plantCare,
  place,
  city,
  withdrawalLimit,
  price,
}) => {
  return (
    <div className="flex justify-around py-5 bp2:flex-row bp2:flex-wrap ">
      <div className="relative w-11/12 shadow-xl font-main rounded-xl bp2:w-96">
        <img
          src={url}
          alt="Brugmansia suaveolens Tricolor"
          className="object-cover w-full h-50 rounded-xl bp2:w-96"
        />
        {/* Informations plante */}
        <div className="absolute bottom-0 flex flex-row w-full justify-around px-2 py-2 bg-slate-50/80">
          <div className="flex flex-col">
            <h1 className="text-xl z-3 bp2:text-2xl ">{name}</h1>
            <h2 className="text-xs z-3">{plantCare}</h2>
            <h2 className="text-xs z-3">
              A retirer à {place}, {city}
            </h2>
            <h2 className="text-xs z-3 font-primary">
              avant le {withdrawalLimit}
            </h2>
          </div>

          {/* Prix plante et bouton réserver */}
          <div className="flex flex-col justify-around">
            <h2 className="text-2xl text-right">{price} €</h2>
            <button
              type="button"
              className="px-4 text-white rounded-md bg-greeny"
            >
              {" "}
              Réserver{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PlantCards.propTypes = {
  url: propTypes.string.isRequired,
  plantCare: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  place: propTypes.string.isRequired,
  city: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  withdrawalLimit: propTypes.string.isRequired,
};

export default PlantCards;
