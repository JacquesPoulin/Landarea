import React from "react";
import propTypes from "prop-types";
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

Store.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  txt: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
};

export default Store;
