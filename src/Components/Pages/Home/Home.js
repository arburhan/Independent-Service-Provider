import React from 'react';
import Banner from '../Banner/Banner';
import Instrument from '../Instruments/Instruments';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Instrument></Instrument>
        </div>
    );
};

export default Home;