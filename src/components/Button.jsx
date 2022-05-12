import React from "react";
import { Link } from "react-scroll";


const Button = () => {
  return (
    <div className=" self-center w-8 bp1:mt-[10vh]">
      <Link activeClass="active" to="PopupCards" duration={1000} delay={200} smooth="true">
        <button type="button" href="#PopupCards">
          <img src="../assets/images/arrow.png" alt="scrolldown" />
        </button>
      </Link>
    </div> 
  );
};

export default Button;
