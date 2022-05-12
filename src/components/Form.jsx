import React from "react";

const Form = () => {
  return (
    <div>
      <h1 className="display flex justify-center font-main">
        AJOUTEZ VOTRE ANNONCE
      </h1>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="Plants name"
                className="block text-sm font-primary text-gray-700 "
              >
                Nom de la Fleur
              </label>
              <div className="mt-1">
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  autoComplete="nom"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-x-blue-400 focus:ring focus:ring-blue-400"
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
                  id="adress"
                  name="adress"
                  type="text"
                  autoComplete="adress"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-blue-400 focus:ring focus:ring-blue-400"
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
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="city"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-blue-400 focus:ring focus:ring-blue-400"
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
                  id="place"
                  name="place"
                  type="text"
                  autoComplete="place"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-blue-400 focus:ring focus:ring-blue-300"
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
                  id="price"
                  name="price"
                  type="text"
                  autoComplete="price"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-blue-400 focus:ring focus:ring-blue-400"
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
                  id="color"
                  name="color"
                  type="text"
                  autoComplete="color"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-blue-400 focus:ring focus:ring-blue-400"
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
                  name="plantCare"
                  id="plantCare"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-blue-400 focus:ring focus:ring-blue-400"
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
                  id="withdrawalLimit"
                  name="withdrawalLimit"
                  type="text"
                  autoComplete="withdrawalLimit"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-blue-400 focus:ring focus:ring-blue-400"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Sing Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
