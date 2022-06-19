import './stylessheets/App.scss';
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import Explore from "./components/Explore";
import Planets from "./components/Planets";
import Moon from "./components/Moon";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroBanner />
      <Explore />
      <Planets />
      <Moon />
      <Footer />
    </div>
  );
}

export default App;
