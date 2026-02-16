import React from "react";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import MyProjects from "../../Components/MyProjects/MyProjects";
import Contact from "../../Components/Contact/Contact";
import Skills from "../../Components/Skills/Skills";
import SEO from "../../components/SEO";

const Home = () => {
  return (
    <div className="space-y-24">
      {/* Dynamic SEO tags for the Home page */}
      <SEO
        title="Home"
        description="Welcome to my portfolio website! I'm Bapan Modak, a passionate web developer specializing in creating stunning and functional websites. Explore my projects, skills, and contact me for collaborations."
      />
      <Hero />
      <About />
      <MyProjects />
      <Contact />
      <Skills />
    </div>
  );
};

export default Home;
