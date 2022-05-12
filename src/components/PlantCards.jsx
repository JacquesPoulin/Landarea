import React from "react";

const PlantCards = () => {
  return (
    <div className="flex justify-center py-5">
      <div className="w-11/12 shadow-xl relative font-main rounded-xl">
        <img
          src="https://cdn.shopify.com/s/files/1/0109/7079/1998/products/85096-00-BAKI_c40ba6be-2326-45f6-a9f0-11d1537adc34_823x.jpg?v=1652229436"
          alt="Brugmansia suaveolens Tricolor"
          className="object-cover w-full h-50 rounded-xl"
        />
        {/* Informations plante */}
        <div className="flex flex-row absolute bottom-0 bg-slate-50/80 w-full px-2 py-2">
          <div className="flex flex-col">
            <h1 className="z-3 text-xl">Brugmansia suaveolens Tricolor</h1>
            <h2 className="z-3 text-xs">Plante d'extérieur</h2>
            <h2 className="z-3 text-xs">A retirer à Jardiland, Anglet</h2>
            <h2 className="z-3 text-xs font-primary">avant le 22/04/2022</h2>
          </div>

          {/* Prix plante et bouton réserver */}
          <div className="flex flex-col justify-around">
            <h2 className="text-right text-2xl">3€</h2>
            <button className="rounded-md bg-emerald-800 px-4 text-white">
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
