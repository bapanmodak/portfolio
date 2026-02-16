import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Projects from "../../components/Projects";
import ContactUs from "../../components/ContactUs";
import Skills from "../../components/Skills";
import SEO from "../../components/SEO";

const HomePage = () => {
  return (
    <div className="">
      {/* Dynamic SEO tags for the Home page */}
      <SEO
        title="Home"
        description="Welcome to my portfolio website! I'm Bapan Modak, a passionate web developer specializing in creating stunning and functional websites. Explore my projects, skills, and contact me for collaborations."
      />
      <Hero />
      <div className="">
        <About />
        <Projects />
        <ContactUs />
        <Skills />
      </div>
    </div>
  );
};

export default HomePage;
