import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Homepage/Home";
import Add from "./page/Add/Add";
import Store from "./page/Store/Store";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <HashRouter>
        <NavBar />
        <Routes>
          {/* <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/store" element={<Store />} /> */}
        </Routes>
        {/* <Footer /> */}
      </HashRouter>
    </div>
  );
}

export default App;
