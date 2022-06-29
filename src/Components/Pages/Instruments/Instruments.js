import React, { useEffect, useState } from 'react';
import Instrument from './Instrument/Instrument';


const Instruments = () => {
    const [instruments, setInstrutments] = useState([]);
    useEffect(() => {
        fetch('instruments.json')
            .then(res => res.json())
            .then(data => setInstrutments(data))
    }, [])
    return (
        <div className='container-fluid py-4'>
            <h2 className='text-center py-4 title-name'> My Photographic Instruments </h2>
            <div className='row row-cols-1 row-cols-md-3 g-4 p-3'>
                {
                    instruments.map(instrument => <Instrument key={instrument.id} instrument={instrument}></Instrument>)
                }

            </div>

        </div>
    );
};

export default Instruments;

