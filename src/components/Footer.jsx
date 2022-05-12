import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-greeny py-3 font-regular w-full">
        <label className="text-white"> Contactez-nous</label>
        <input
          type="text"
          value={email}
          placeholder="mon email"
          className="border-2 my-2 text-center"
        />
        <div className="w-2/3 h-[1px] p-0 bg-creamy m-0" />
      </div>
      <div className="flex flex-col justify-center items-center bg-greeny/80 py-7">
        <h2 className="font-regular mb-4 text-white"> Ils nous soutiennent</h2>
        <div className="flex flex-wrap justify-around gap-12 m-5">
          {/* <img src="../assets/images/nasa.svg" alt="nasa" width="50" /> */}
          <img src="../assets/images/eelv.png" alt="eelv" width="170" />
          <img src="../assets/images/wwf.png" alt="wwf" width="80" />
          <img src="../assets/images/lesverts.png" alt="lesverts" width="90" />
          <img src="../assets/images/love.svg" alt="love" width="50" />

          <img
            src="../assets/images/marijuana.svg"
            alt="marijuana"
            width="50"
          />

          <img src="../assets/images/wcs.png" alt="wcs" width="160" />
        </div>
        <div className="flex flex-col flex-wrap justify-center items-center bg-greeny py-3 font-regular w-full">
          <h2 className="text-white py-2">Retrouvez-nous sur les réseaux </h2>
          <div className="flex flex-row justify-around w-1/3">
            <img
              src="../assets/images/instagram.svg"
              alt="instagram"
              width={30}
            />
            <img src="../assets/images/twitter.svg" alt="twitter" width={30} />
            <img
              src="../assets/images/facebook.svg"
              alt="facebook"
              width={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
