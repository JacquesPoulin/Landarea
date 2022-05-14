import React from "react";
import propTypes from "prop-types";

const Filter = ({ setCityChoice, setIsFilter, isDark, newPlants }) => {
  const newCityArray = [];

  newPlants.map(
    (plant) =>
      !newCityArray.includes(plant.city) && newCityArray.push(plant.city)
  );

  return (
    <div className="m-6 text-center font-main">
      <div className="flex flex-col justify-center">
        <label
          htmlFor="city"
          className={
            !isDark
              ? `font-medium flex flex-col justify-center bp2:text-3xl`
              : `font-medium flex flex-col justify-center text-green  -600 bp2:text-2xl`
          }
        >
          Choisisez votre ville{" "}
          <select
            className="rounded font-main text-center m-auto mt-6 mb-5 border-b-4 border-green-800 cursor-pointer"
            onChange={(e) => setCityChoice(e.target.value)}
          >
            <option
              value=""
              className="text-black
            text-center rounded-md cursor-pointer outline-none active:outline-none focus:outline-none bp2:xs"
            >
              Toutes
            </option>

            {/* Trier et Mapper les villes */}
            {newCityArray &&
              newCityArray.sort().map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div className="flex justify-center">
        <button type="button" onClick={() => setIsFilter(true)}>
          <img
            src="../../public/static/logo/arrow-down-filter.svg"
            alt="Flèche du bas"
            className="w-10 h-10 mt-4 mr-10"
          />
        </button>{" "}
        <br />
        <button type="button" onClick={() => setIsFilter(false)}>
          <img
            src="../../public/static/logo/arrow-up-filter.svg"
            alt="Flèche du haut"
            className="w-10 h-10 mt-4"
          />
        </button>
      </div>
    </div>
  );
};

Filter.propTypes = {
  setCityChoice: propTypes.func.isRequired,
  setIsFilter: propTypes.func.isRequired,
  isDark: propTypes.bool.isRequired,
  newPlants: propTypes.object.isRequired,
};
export default Filter;
