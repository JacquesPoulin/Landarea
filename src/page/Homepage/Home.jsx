import React, { useState } from "react";
import propTypes from "prop-types";
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
        newPlants={newPlants}
      />
      <div className="bp2:flex bp2:flex-row bp2:flex-wrap bp2:justify-around">
        {newPlants &&
          newPlants
            .filter((plant) => plant.city === cityChoice || !cityChoice)
            .sort((a, b) => (isFilter ? b.price - a.price : a.price - b.price))
            .map((plant) => <PlantCards key={plant.id} {...plant} />)}
      </div>
    </div>
  );
};

Home.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  txt: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  newPlants: propTypes.node.isRequired,
};
export default Home;
