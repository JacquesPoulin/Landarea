import React from "react";

import HeroAdd from "../../components/HeroAdd.jsx";

import Form from "../../components/Form";

const Add = ({id,name,title,txt,img,newPlants,setNewPlants}) => {
  return (
    <div>
      <h1>Add</h1>

      <HeroAdd id={id} name={name} title={title} txt={txt} img={img}/>

      <Form newPlants={newPlants} setNewPlants={setNewPlants}/>


    </div>
  );
};
export default Add;
