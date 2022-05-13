import React, { useState } from "react";
import PlantCards from "../../components/PlantCards.jsx";
import Filter from "../../components/Filter.jsx";
import HeroHome from "../../components/HeroHome.jsx";

const Home = ({ id, name, title, txt, img, newPlants }) => {
  const [cityChoice, setCityChoice] = useState("");
  const [isFilter, setIsFilter] = useState("");

  return (
    <div>
      <HeroHome id={id} name={name} title={title} txt={txt} img={img} />
      <Filter
        cityChoice={cityChoice}
        setCityChoice={setCityChoice}
        setIsFilter={setIsFilter}
      />
      {newPlants &&
        newPlants
          .filter((plant) => plant.city === cityChoice || !cityChoice)
          .sort((a, b) => (isFilter ? b.price - a.price : a.price - b.price))
          .map((plant) => <PlantCards key={plant.id} {...plant} />)}
    </div>
  );
};
export default Home;
