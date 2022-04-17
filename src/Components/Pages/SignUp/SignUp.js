import React from 'react';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const redirectLogin = () => {
        navigate('/login' + location.search);
    }
    return (
        <div className='container-fluid w-75 mx-auto pt-5'>
            <Form className='text-center'>
                <div className='' >
                    <label className='d-block text-start' htmlFor="name">Name</label>
                    <input type="name" name="name" id="name" required />
                </div>
                <div className='py-3' >
                    <label className='d-block text-start' htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='' >
                    <label className='d-block text-start' htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
            </Form>
            <div className='text-center'>
                <div className='py-2'>
                    Already have an account? <button onClick={redirectLogin} className='signup-redirect'>Please Login</button>
                </div>
                <div className=''>
                    <button className='btn submit-btn'>Register</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;