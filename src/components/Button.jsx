import React from "react";
import { Link } from 'react-scroll';

const Button = () => {
  return (
    <div className=" self-center w-8 bp1:mt-[10vh]">
      <Link activeClass="active"
      to="StoreCards"
      duration={500}
      delay={200}
      
>
        <button type="button" href="#StoreCards">
          <img src="../assets/images/arrow.png" alt="scrolldown" />
        </button>
      </Link>
    </div>
  );
};

export default Button;
