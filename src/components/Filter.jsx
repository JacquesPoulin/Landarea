import React from "react";
import cities from "../../data/cities";

const Filter = ({  setCityChoice }) => {
  return (
    <div className="m-6 text-center font-main">
      <label>
        Découvrir à {" "}
        <select
          className="text-gray-800 bg-gray-300 rounded  font-main hover:bg-gray-400"
          onChange={(e) => setCityChoice(e.target.value)}
        >
          <option value="">choisisez votre ville</option>
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Filter;
