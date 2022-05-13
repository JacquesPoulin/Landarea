import React from "react";

const Modale = ({setModalOn, setChoice}) => {
    const handleOkClick = () => {
        setChoice(true)
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }
  return (
    <div className=" bg-zinc-200 opacity-80 fixed inset-0 z-50">
        <div className="h-screen justify-center items-center">
            <div className="flex-col justify-center bg-black py-12 px-24 border-4 border-green-700 rounded-xl ">
                <div className="w-full flex flex-col justify-center text-lg text-white mr-2 mb-10">Votre annonce sera bien prise en compte. 
                <span className="mt-4">Confirmez ?</span>
                <div className="flex w-full justify-between mt-4 ">
                    <button onClick={handleOkClick} className=" rounded px-4 py-2 mr-4 text-white bg-green-700"> Oui</button>
                    <button onClick={handleCancelClick} className=" rounded px-4 py-2 text-white bg-green-700"> No</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Modale;