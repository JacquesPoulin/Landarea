import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-greeny py-3 font-regular">
        <label> Contactez-nous</label>
        <input
          type="text"
          value={email}
          placeholder="mon email"
          className="border-2 my-2 text-center"
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-greeny">
        <h2 className="font-regular"> Ils nous soutiennent</h2>
      </div>
    </div>
  );
};

export default Footer;
