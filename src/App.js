import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <main>
        <Home />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
