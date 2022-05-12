import React from "react";
import HeroStore from "../../components/HeroStore.jsx";

const Store = ({id,name,title,txt,img}) => {
  return (
    <div>

      <h1>Store</h1>
      <HeroStore id={id} name={name} title={title} txt={txt} img={img}/>

    </div>
  );
};
export default Store;
