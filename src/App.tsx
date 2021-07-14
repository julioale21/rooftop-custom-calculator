import React from "react";
import Calculator from "./components/Calculator";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="title">Rooftop Custom Calculator</h1>
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
