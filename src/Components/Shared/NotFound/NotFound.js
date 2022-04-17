import React from 'react';
import image from '../../../images/notfound.webp';

const NotFound = () => {
    return (
        <div>
            <h2>404 Not Found</h2>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default NotFound;