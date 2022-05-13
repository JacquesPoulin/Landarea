import React from "react";
import plants from "../../data/plants";

const Filter = ({ setCityChoice, setIsFilter, isDark}) => {
  return (
    <div className="m-6 text-center font-main">
      <div className="flex flex-col justify-center">
        <label
          htmlFor="city"
          className={!isDark?`font-medium flex flex-col justify-center`:`font-medium flex flex-col justify-center text-green-600`}
        >
          Choisisez votre ville{" "}
          <select
            className="rounded font-main text-center m-auto mt-4 mb-4 border-b-4 border-green-800"
            onChange={(e) => setCityChoice(e.target.value)}
          >
            <option
              value=""
              className="text-black
            text-center rounded-md"
            >
              Toutes
            </option>
            {plants
              .sort((a, b) => (a.city > b.city ? 1 : -1))
              .map((plant) => (
                <option key={plant.id} value={plant.city}>
                  {plant.city}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div className="flex justify-center">
        <button type="button" onClick={() => setIsFilter(true)}>
          <img
            src="../../assets/images/arrow-down-filter.svg"
            alt="Flèche du bas"
            className="w-10 h-10 mt-4 mr-10"
          />
        </button>{" "}
        <br />
        <button type="button" onClick={() => setIsFilter(false)}>
          <img
            src="../../assets/images/arrow-up-filter.svg"
            alt="Flèche du haut"
            className="w-10 h-10 mt-4"
          />
        </button>
      </div>
    </div>
  );
};

export default Filter;
