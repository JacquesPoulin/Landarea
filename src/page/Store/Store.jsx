import React from "react";
import HeroStore from "../../components/HeroStore.jsx";
import Button from "../../components/Button.jsx";

const Store = ({id,name,title,txt,img}) => {
  return (
    <div>

      <HeroStore id={id} name={name} title={title} txt={txt} img={img}>
        
      </HeroStore>

      <Button/>


    </div>
  );
};
export default Store;
