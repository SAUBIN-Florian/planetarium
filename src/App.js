import React from "react";
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import Explore from "./components/Explore";
import Planets from "./components/Planets";
import Moon from "./components/Moon";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import './stylessheets/App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroBanner />
      <Explore />
      <Planets />
      <Moon />
      <Footer />
      <Toast />
    </div>
  );
}

export default App;
