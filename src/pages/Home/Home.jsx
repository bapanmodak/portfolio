import React from 'react';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import MyProjects from '../../Components/MyProjects/MyProjects';
import Contact from '../../Components/Contact/Contact';
import Skills from '../../Components/Skills/Skills';

const Home = () => {
    return (
        <div className="space-y-24">
            <Hero />
            <About />
            <MyProjects />
            <Contact />
            <Skills />

        </div>
    );
};

export default Home;