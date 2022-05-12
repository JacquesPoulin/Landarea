import React from "react";
import PlantCards from "../../components/PlantCards.jsx";
import Filter from "../../components/Filter.jsx";
import plants from "../../../data/plants.js";

const Home = () => {
  return (
    <div>

      <h1>Hero page</h1>
      <Filter />
      {/* <div>
      {plants.filter((_plant,index)=>(
        <PlantCards key={index}{...plants.city}/>
      ))}
      </div> */}
      <div>
        {" "}
        {plants.map((plant, index) => (
          <PlantCards key={index} {...plant} />
        ))}
      </div>
    </div>
  );
};
export default Home;
