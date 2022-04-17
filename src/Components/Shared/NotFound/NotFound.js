import React from 'react';
import image from '../../../images/notfound.webp';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h2 className='text-danger'>404 Not Page Found</h2>
            <div>
                <img className='img-fluid' style={{ height: '90vh' }} src={image} alt="" />
            </div>
        </div>
    );
};

export default NotFound;