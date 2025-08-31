import React from "react";
import Home from "./Home";
import Section from "./Section";
import About from "./About";
import { services, projects } from "./data";
import Why from "./Why";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./App.css"

const App = () => {
  return (
    <>
      <Navbar />
      <Home id="Home" />
      <Section
        id="Services"
        title="Our Services"
        tagline="Building Excellence, Delivering Trust."
        services={services}
      />
      <About id="About" />
      <Section
        id="Projects"
        title="Projects"
        kind="project"
        tagline="Turning Blueprints Into Landmarks."
        services={projects}
      />
      <Why />
      <Testimonial />
      <Footer id="contact" className="bg-amber-500" />
    </>
  );
};

export default App;
