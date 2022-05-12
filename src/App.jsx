import React from "react";
import Home from "./page/Homepage/Home";
import Add from "./page/Add/Add";
import Store from "./page/Store/Store";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import heroes from "../data/heroes";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Home {...heroes} />
      <Add {...heroes} />
      <Store {...heroes} />
      <Footer />
    </div>
  );
}

export default App;
