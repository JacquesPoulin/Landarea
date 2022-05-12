import React from "react";
import cities from "../../data/cities";

const Filter = ({ cityChoice, setCityChoice }) => {
  return (
    <div className="font-main">
      <label>
        Découvrir à{" "}
        <select
          class="border-4 border-solid "
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
      {console.log(cityChoice)}
    </div>
  );
};

export default Filter;
