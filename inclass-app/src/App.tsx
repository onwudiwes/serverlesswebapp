import React from 'react';
import './App.css';
import Home from "./components/home";
import About from "./components/about";
import Items from "./components/Items";
import Item from "./components/item";
import NavBar from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<Item />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
