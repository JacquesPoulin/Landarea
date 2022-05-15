import React from "react";
import propTypes from "prop-types";
import HeroAdd from "../../components/HeroAdd.jsx";
import Form from "../../components/Form";

const Add = ({ id, name, title, txt, img, newPlants, setNewPlants }) => {
  return (
    <div>
      <HeroAdd id={id} name={name} title={title} txt={txt} img={img} />

      <Form newPlants={newPlants} setNewPlants={setNewPlants} />
    </div>
  );
};

Add.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  txt: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  newPlants: propTypes.node.isRequired,
  setNewPlants: propTypes.func.isRequired,
};
export default Add;
