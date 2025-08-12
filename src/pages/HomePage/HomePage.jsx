import React from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Projects from '../../components/Projects';
import ContactUs from '../../components/ContactUs';
import Skills from '../../components/Skills';

const HomePage = () => {
    return (
        <div className=''>
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