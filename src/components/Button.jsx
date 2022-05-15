import React from "react";
import { Link } from "react-scroll";

// >> on crée le button du scroll down la page Store
const Button = () => {
  return (
    <div className=" self-center w-8 bp1:mt-[10vh]">
      <Link
        activeClass="active"
        to="PopupCards"
        duration={1000}
        delay={200}
        smooth="true"
      >
        {/* on utilise l'id de la div #PopupCards pour scroll vers cette div */}
        <button type="button" href="#PopupCards">
          <img
            src="../../public/assets/img/arrow.png"
            alt="scrolldown"
            className=""
          />
        </button>
      </Link>
    </div>
  );
};

export default Button;
