import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Homepage/Home";
import Add from "./page/Add/Add";
import Store from "./page/Store/Store";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import heroes from "../data/heroes";
import plants from "../data/plants";
import "./App.css";

function App() {
  const [newPlants, setNewPlants] = useState(plants);
// je créé une fonction qui active le darkmode 
const [isDark, setIsDark] = useState(false);
// elle met plants2 dans newplants ;

  return (
    <div className={!isDark ?`w-full` : `w-full bg-stone-800`}>
      <HashRouter>
        <NavBar setNewPlants={setNewPlants} isDark={isDark} setIsDark={setIsDark}/>
        <Routes>
          <Route
            path="*"
            element={
              <Home
                newPlants={newPlants}
                setNewPlants={setNewPlants}
                {...heroes}
              />
            }
          />
          <Route
            path="/"
            element={
              <Home
                newPlants={newPlants}
                setNewPlants={setNewPlants}
                {...heroes}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                newPlants={newPlants}
                setNewPlants={setNewPlants}
                {...heroes}
              />
            }
          />
          <Route
            path="/add"
            element={
              <Add
                newPlants={newPlants}
                setNewPlants={setNewPlants}
                {...heroes}
              />
            }
          />
          <Route path="/store" element={<Store {...heroes} />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
