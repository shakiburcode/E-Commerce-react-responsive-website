import React from "react";
import "./App.css";
import {
  Footer,
  Header,
  Possibility,
  Features,
  WhatGPT3,
  Blog,
} from "./containers";




import { Cta, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
