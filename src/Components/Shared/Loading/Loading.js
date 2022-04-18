import React from 'react';
import loading from '../../../images/loading.png';
const Loading = () => {
    return (
        <div className='container'>
            <div className='d-flex align-items-center justify-content-center my-5'>
                <img src={loading} style={{ height: '200px' }} className="img-fluid" alt="" />
            </div>
        </div>
    );
};

export default Loading;