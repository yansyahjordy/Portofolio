import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
