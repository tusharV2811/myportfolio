import { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Social from "./components/Social";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Modal from "./components/Modal";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  document.title = "Tushar Verma"
  const [nav, setNav] = useState(false);
  // console.log("asdfskj");
  return (
    <div>
      <NavBar prop={{nav:nav,setNav:setNav}}/>
      <Home />
      <About/>
      <Portfolio/>
      <Experience/>
      <Modal/>
      <Contact/>
      <Social/>
    </div>

  );
}

export default App;
