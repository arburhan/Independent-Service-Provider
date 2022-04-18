import React from 'react';
import Card from 'react-bootstrap/Card';
import './Instrument.css';
const Instrument = ({ instrument }) => {
    const { name, image, rating } = instrument;
    const handleDetails = () => {
        console.log('thanks');
    }
    return (
        <div className='shadow rounded'>
            <Card className='border-0'>
                <Card.Img variant="top" className='img-fluid' style={{ height: '200px' }} src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Camera Rating: ${rating}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="border-0 bg-transparent text-center">
                    <button onClick={handleDetails} className="details-button">Details</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Instrument;