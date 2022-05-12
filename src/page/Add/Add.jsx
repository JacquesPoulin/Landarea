import React from "react";
import HeroAdd from "../../components/HeroAdd.jsx";

const Add = ({id,name,title,txt,img}) => {
  return (
    <div>
      <h1>Add</h1>
      <HeroAdd id={id} name={name} title={title} txt={txt} img={img}/>
    </div>
  );
};
export default Add;
