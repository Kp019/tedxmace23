import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Speakers from "./components/Speakers";
import Ambassador from "./components/Ambassador";
import Timer3 from "./components/Counter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-black">
      <Navbar/>
      <Hero/>
      <Timer3/>
      <About/>
      <Speakers/>
      <Ambassador/>
      <Footer/>
    </div>
  );
}
export default App;
