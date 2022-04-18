import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialSign from '../../Shared/SocialSign/SocialSign';

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [agree, setAgree] = useState();
    // ref kahini:
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [updateProfile, updating, profileError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const redirectLogin = () => {
        navigate('/login' + location.search);
    }
    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { emailVerificationOptions: true });
    const handaleFormSubmit = async (e) => {
        e.preventDefault();
        const userName = nameRef.current.value;
        const userEmail = emailRef.current.value;
        const userPassowrd = passwordRef.current.value;
        if (agree) {
            await createUserWithEmailAndPassword(userEmail, userPassowrd);
            toast('verify mail sent. Please verify.');
            toast('after verify . Please login.');
            await sendEmailVerification();
            setTimeout(() => {
                navigate('/login');
            }, 5000);
        }
        if (loading) {
            return <Loading></Loading>;
        }
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    return (
        <div className='container-fluid w-75 mx-auto pt-5'>
            <h2 className="text-primary py-4 text-center">Register</h2>
            <Form onSubmit={handaleFormSubmit} className='text-center'>
                <div className='' >
                    <label className='d-block text-start' htmlFor="name">Name</label>
                    <input ref={nameRef} type="name" name="name" id="name" required />
                </div>
                <div className='py-3' >
                    <label className='d-block text-start' htmlFor="email">Email</label>
                    <input ref={emailRef} type="email" name="email" id="email" required />
                </div>
                <div className='' >
                    <label className='d-block text-start' htmlFor="password">Password</label>
                    <input ref={passwordRef} type="password" name="password" id="password" required />
                </div>
                {errorElement}
                <div className='text-center'>
                    <div className='mt-3'>
                        <input className='me-2 mb-3' onClick={() => { setAgree(!agree) }} type="checkbox" name="terms" id="terms" />
                        <label className={user ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept terms and conditions</label>
                    </div>
                    <div className=''>
                        <button disabled={!agree} className='btn submit-btn' type="submit">Register</button>
                    </div>
                </div>
            </Form>
            <div className='py-2 text-center'>
                Already have an account? <button onClick={redirectLogin} className='signup-redirect'>Please Login</button>
            </div>
            <SocialSign></SocialSign>
            <ToastContainer />
        </div>
    );
};

export default SignUp;