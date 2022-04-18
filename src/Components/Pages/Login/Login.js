import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const redirectRegister = () => {
        navigate('/register' + location.search);
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogIn = e => {
        e.preventDefault();
        const userEmail = emailRef.current.value;
        const userPassowrd = passwordRef.current.value;
        signInWithEmailAndPassword(userEmail, userPassowrd);
        navigate('/home');
        if (loading) {
            <Loading></Loading>
        }
    }
    const forgetPassword = async () => {
        const resetUserMail = emailRef.current.value;
        sendPasswordResetEmail(resetUserMail);

    }


    return (
        <div className='container-fluid w-75 mx-auto pt-5'>
            <Form onSubmit={handleLogIn} className='text-center'>
                <div className='' >
                    <label className='d-block text-start' htmlFor="email">Email</label>
                    <input ref={emailRef} type="email" name="email" id="email" required />
                </div>
                <div className='py-3' >
                    <label className='d-block text-start' htmlFor="password">Password</label>
                    <input ref={passwordRef} type="password" name="password" id="password" required />
                </div>
                <div className=''>
                    <button type='submit' className='btn submit-btn'>Login</button>
                </div>
            </Form>
            <div className='text-center py-3'>
                <div>
                    New on AR Wild-Grapher? <button onClick={redirectRegister} className='signup-redirect'>Please Register</button>
                </div>
                <div>
                    Forget password? <button onClick={forgetPassword} className='signup-redirect text-danger'>Reset Here</button>
                </div>
            </div>
        </div>
    );
};

export default Login;