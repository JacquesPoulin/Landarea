import React from "react";
import HeroStore from "../../components/HeroStore.jsx";

import PopupCards from "../../components/PopupCards.jsx";
import popups from "../../../data/popups.js";


const Store = ({ id, name, title, txt, img }) => {
  return (
    <div>

      <HeroStore id={id} name={name} title={title} txt={txt} img={img} />
      {popups &&
        popups.map((popup) => <PopupCards key={popup.id} {...popup} />)}

    </div>
  );
};
export default Store;
