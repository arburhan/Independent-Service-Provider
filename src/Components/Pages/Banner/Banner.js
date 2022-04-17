import React from 'react';
import banner from '../../../images/wildlifebanner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner' >
            <div className='banner-text mx-auto' >
                <h1>AR Wild-Grapher</h1>
                <p className='fs-4' >A Professional Wildlife Photographer</p>
                <button className='button-more'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;