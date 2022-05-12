import React from "react";
import PlantCards from "../../components/PlantCards.jsx";

import HeroHome from "../../components/HeroHome.jsx";

import plants from "../../../data/plants.js";

const Home = ({ id, name, title, txt, img }) => {
  return (
    <div>
      <HeroHome id={id} name={name} title={title} txt={txt} img={img} />
      <PlantCards />

      <h1>Hero page</h1>

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
