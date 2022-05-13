import React, { useState } from "react";
import { useForm, useController, useFormState } from "react-hook-form";
import Modale from "./Modale";

const Form = ({newPlants, setNewPlants, isDark}) => {
  const [modalOn, setModalOn]= useState(false);
  const [choice, setChoice]= useState(false);
  const { register, handleSubmit } = useForm();
  const temp = [...newPlants];
  // console.log(temp);
  const push = (data) => {
temp.unshift(data);
setNewPlants(temp);
}

  return (
    <div>
      <h1 className={isDark?`display flex justify-center font-main mt-10`:`display flex justify-center font-main mt-10 text-green-600`}>
        AJOUTEZ VOTRE ANNONCE
      </h1>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form
            onSubmit={handleSubmit((data) => push(data))}
            className="mb-0 space-y-6"
          >
            <div>
              <label
                htmlFor="Plants name"
                className="block text-sm font-primary text-gray-700 "
              >
                Nom de la Fleur
              </label>
              <div className="mt-1">
                <input
                  {...register("name")}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required="required"
                  placeholder="fleur"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-x-green-700 focus:ring focus:ring-green-700"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="url"
                className="block text-sm font-primary text-gray-700 "
              >
                Url de l'Image
              </label>
              <div className="mt-1">
                <input
                  {...register("url")}
                  name="url"
                  type="url" 
                  src=""
                  autoComplete="url"
                  required="required"
                  placeholder="https://"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-green-700 focus:ring focus:ring-green-700"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="adress"
                className="block text-sm font-primary text-gray-700 "
              >
                Adresse{" "}
              </label>
              <div className="mt-1">
                <input
                  {...register("adress")}
                  name="adress"
                  type="text"
                  autoComplete="adress"
                  required="required"
                  placeholder="1 rue de la belle plante"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-green-700 focus:ring focus:ring-green-700"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-primary text-gray-700 "
              >
                Ville{" "}
              </label>
              <div className="mt-1">
                <input
                  {...register("city")}
                  name="city"
                  type="text"
                  autoComplete="city"
                  required="required"
                  placeholder="Biarritz"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-green-700 focus:ring focus:ring-green-700"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="place"
                className="block text-sm font-primary text-gray-700 "
              >
                Lieu{" "}
              </label>
              <div className="mt-1">
                <input
                  {...register("place")}
                  name="place"
                  type="text"
                  autoComplete="place"
                  required="required"
                  placeholder="chez moi"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-green-700 focus:ring focus:ring-green-700"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-primary text-gray-700 "
              >
                Prix{" "}
              </label>
              <div className="mt-1">
                <input
                  {...register("price")}
                  name="price"
                  type="number"
                  autoComplete="price"
                  required="required"
                  placeholder="1"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-green-700 focus:ring focus:ring-green-700"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="color"
                className="block text-sm font-primary text-gray-700 "
              >
                Couleur{" "}
              </label>
              <div className="mt-1">
                <input
                  {...register("color")}
                  name="color"
                  type="text"
                  autoComplete="color"
                  required="required"
                  placeholder="rose"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-green-700 focus:ring focus:ring-green-700"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="plantCare"
                className="block text-sm font-primary text-gray-700 "
              >
                Entretien
              </label>
              <div className="mt-1">
                <select
                  {...register("plantCare")}
                  id="plantCare"
                  required="required"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-green-700 focus:ring focus:ring-green-700"
                >
                  <option value="">Séléctionnez</option>
                  <option value="Intérieur">plante d'intérieur</option>
                  <option value="Extérieur">plante d'éxterieur</option>
                  <option value="Bassin">plante de bassin</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="withdrawalLimit"
                className="block text-sm font-primary text-gray-700 "
              >
                Date limite de retrait{" "}
              </label>
              <div className="mt-1">
                <input
                  {...register("withdrawalLimit")}
                  name="withdrawalLimit"
                  type="date"
                  placeholder="JJ/MM/AAAA"
                  autoComplete="withdrawalLimit"
                  required="required"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-green-700 focus:ring focus:ring-green-700"
                />
              </div>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 " onClick={()=>setModalOn(true)}>Valider</button>
              {choice &&
                  <div className="flex justify-center mt-5">
                  <div className="flex flex-col w-full text-center bg-green-700  p-6 text-lg text-white">Merci d'avoir déposé 
                  <span className="justify-center">votre anonce</span></div>
                </div>
              }
              {modalOn && <Modale setModalOn={setModalOn} setChoice={setChoice} />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
