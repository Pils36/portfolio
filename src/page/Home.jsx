import React, { Fragment } from 'react';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import Banner from './Banner';
import About from './About';
import Skill from './Skill';
import Experience from './Experience';
import Work from './Work';
function Home() {


    return (

        <Fragment>
            <Header />
            <Banner />
            <About />
            <Skill />
            <Experience />
            <Work />
            <Footer />
        </Fragment>

    )
}

export default Home