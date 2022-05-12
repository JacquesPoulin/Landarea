import React from "react";


const Form = () => {
  return (
    <div>
      <h1 className="display flex justify-center font-main">AJOUTEZ VOTRE ANNONCE</h1>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form class="mb-0 space-y-6" action="#" method="POST">
            <div>
              <label for="Plants name" class="block text-sm font-primary text-gray-700 ">Nom de la Fleur</label>
              <div className="mt-1">
                <input id="nom" name="nom" type="text" autoComplete="nom" required class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-x-blue-400 focus:ring focus:ring-blue-400" />
              </div>
            </div>
            <div>
              <label for="adress" class="block text-sm font-primary text-gray-700 ">Adresse </label>
              <div className="mt-1">
                <input id="adress" name="adress" type="text" autoComplete="adress" required class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-blue-400 focus:ring focus:ring-blue-400" />
              </div>
            </div>
            <div>
              <label for="city" class="block text-sm font-primary text-gray-700 ">Ville </label>
              <div className="mt-1">
                <input id="city" name="city" type="text" autoComplete="city" required class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-blue-400 focus:ring focus:ring-blue-400" />
              </div>
            </div>
            <div>
              <label for="place" class="block text-sm font-primary text-gray-700 ">Lieu </label>
              <div className="mt-1">
                <input id="place" name="place" type="text" autoComplete="place" required class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-blue-400 focus:ring focus:ring-blue-300" />
              </div>
            </div>
            <div>
              <label for="price" class="block text-sm font-primary text-gray-700 ">Prix </label>
              <div className="mt-1">
                <input id="price" name="price" type="text" autoComplete="price" required class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-blue-400 focus:ring focus:ring-blue-400" />
              </div>
            </div>
            <div>
              <label for="color" class="block text-sm font-primary text-gray-700 ">Couleur </label>
              <div className="mt-1">
                <input id="color" name="color" type="text" autoComplete="color" required class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-blue-400 focus:ring focus:ring-blue-400" />
              </div>
            </div>
            <div>
              <label for="plantCare" class="block text-sm font-primary text-gray-700 ">Entretien</label>
              <div className="mt-1">
                <select name="plantCare" id="plantCare" class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-blue-400 focus:ring focus:ring-blue-400">
                  <option value="">Séléctionnez</option>
                  <option value="Intérieur">plante d'intérieur</option>
                  <option value="Extérieur">plante d'éxterieur</option>
                  <option value="Bassin">plante de bassin</option>
                </select>
              </div>
            </div>
            <div>
              <label for="withdrawalLimit" class="block text-sm font-primary text-gray-700 ">Date limite de retrait </label>
              <div className="mt-1">
                <input id="withdrawalLimit" name="withdrawalLimit" type="text" autoComplete="withdrawalLimit" required class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus: outline-none focus:border-blue-400 focus:ring focus:ring-blue-400" />
              </div>
            </div>
            <div>
              <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">Sing Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
