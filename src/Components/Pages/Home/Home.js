import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Instrument from '../Instruments/Instruments';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Instrument></Instrument>
            <Blogs></Blogs>
            <About></About>
        </div>
    );
};

export default Home;