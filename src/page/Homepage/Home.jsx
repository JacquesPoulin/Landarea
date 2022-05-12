import React, { useState } from "react";
import PlantCards from "../../components/PlantCards.jsx";
import Filter from "../../components/Filter.jsx";
import HeroHome from "../../components/HeroHome.jsx";
import plants from "../../../data/plants.js";

const Home = ({ id, name, title, txt, img }) => {
  const [cityChoice, setCityChoice] = useState("");

  return (
    <div>
      <HeroHome id={id} name={name} title={title} txt={txt} img={img} />
      <Filter cityChoice={cityChoice} setCityChoice={setCityChoice} />
      {plants &&
        plants
          .filter((plant) => plant.city === cityChoice || !cityChoice)
          .map((plant) => <PlantCards key={plant.id} {...plant} />)}
    </div>
  );
};
export default Home;
