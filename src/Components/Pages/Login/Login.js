import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Login.css';

const Login = () => {
    return (
        <div className='container-fluid w-75 mx-auto pt-5'>
            <Form className='text-center'>
                <div className='' >
                    <label className='d-block text-start' htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='py-3' >
                    <label className='d-block text-start' htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className=''>
                    <button className='btn submit-btn'>Login</button>
                </div>
            </Form>
        </div>
    );
};

export default Login;