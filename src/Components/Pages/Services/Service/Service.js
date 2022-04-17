import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { name, image, description, price } = props.service;
    const shoartDescription = description.slice(0, 40) + '...';
    const navigate = useNavigate();
    const handleHire = () => {
        navigate('/checkout');


    }
    return (
        <div>
            <Card>
                <Card.Img variant="top" className='img-fluid' style={{ height: '200px' }} src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text title={description} >
                        {description.length > 50 ? shoartDescription : description}
                    </Card.Text>
                    <Card.Text>
                        Charge: ${price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="border-0 bg-transparent text-center">
                    <button onClick={handleHire} className="hire-button">Hire Now</button>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default Service;