import React from "react";

const PlantCards = (props) => {
  return (
    <div className="flex justify-center py-5">
      <div className="w-11/12 shadow-xl relative font-main rounded-xl">
        <img
          src={props.url}
          alt="Brugmansia suaveolens Tricolor"
          className="object-cover w-full h-50 rounded-xl"
        />
        {/* Informations plante */}
        <div className="flex flex-row absolute bottom-0 bg-slate-50/80 w-full px-2 py-2">
          <div className="flex flex-col">
            <h1 className="z-3 text-xl">{props.name}</h1>
            <h2 className="z-3 text-xs">{props.plantCare}</h2>
            <h2 className="z-3 text-xs">
              A retirer à {props.place}, {props.city}
            </h2>
            <h2 className="z-3 text-xs font-primary">
              avant le {props.withdrawalLimit}
            </h2>
          </div>

          {/* Prix plante et bouton réserver */}
          <div className="flex flex-col justify-around">
            <h2 className="text-right text-2xl">{props.price} €</h2>
            <button className="rounded-md bg-greeny px-4 text-white">
              {" "}
              Réserver{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCards;
