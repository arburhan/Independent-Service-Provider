import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
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
    let errorElement;
    const handleLogIn = e => {
        e.preventDefault();
        const userEmail = emailRef.current.value;
        const userPassowrd = passwordRef.current.value;
        signInWithEmailAndPassword(userEmail, userPassowrd);
        if (user) {
            navigate(from, { replace: true });
        }
        if (loading) {
            return <Loading></Loading>;
        }
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const forgetPassword = async () => {
        const resetUserMail = emailRef.current.value;
        if (resetUserMail) {
            sendPasswordResetEmail(resetUserMail);
            toast('reset mail sent. please check spam or inbox');
        }
        else {
            toast('please enter email and on email field');
        }

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
                {errorElement}
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
            <ToastContainer />
        </div>
    );
};

export default Login;