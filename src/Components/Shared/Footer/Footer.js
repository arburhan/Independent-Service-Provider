import React from 'react';

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <div className="container-fluid bg-dark py-4">
            <div className='text-center text-light' >
                Copyrignt &copy; {date} AR Wild-Grapher, all rights reserved.
            </div>
        </div>

    );
};

export default Footer;