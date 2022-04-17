import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.josn')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);

    return (
        <div className='container-fluid px-5' >
            <h2>Services</h2>
            <div className='row row-cols-1 row-cols-md-3 g-5' >
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;