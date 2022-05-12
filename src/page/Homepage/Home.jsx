import React from "react";
import PlantCards from "../../components/PlantCards.jsx";
import HeroHome from "../../components/HeroHome.jsx";

const Home = ({id,name,title,txt,img}) => {
  return (
    <div>
      <h1>Bob</h1>
      <HeroHome id={id} name={name} title={title} txt={txt} img={img}/>
      <PlantCards />
    </div>
  );
};
export default Home;
