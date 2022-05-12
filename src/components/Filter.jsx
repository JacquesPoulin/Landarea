import React from "react";

const Filter = () => {
  return (
    <div className="font-main">
      <label >
      Découvrir à {" "}
          <select name="filter" id="filter" class="border-4 border-solid ">
            <option value="">choisisez votre ville</option>
            <option value="1">Anglet</option>
            <option value="2">Bayonne</option>
            <option value="3">Biarritz</option>
            <option value="4">Bidart</option>
            <option value="5">Boucau</option>
            <option value="6">Hendaye</option>
            <option value="7">Ondres</option>
            <option value="8">Tarnos</option>
            <option value="9">Urcuit</option>
            <option value="10">Urt</option>
            </select>
        </label>
     
    </div>
  );
};

export default Filter;
