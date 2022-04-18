import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import './SocialSign.css';

const SocialSign = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, googlError] = useSignInWithGoogle(auth);
    const googleSign = () => {
        signInWithGoogle();
    }
    let errors;

    useEffect(() => {
        if (googlError) {
            errors = googlError.message;
        }

    }, [googlError])
    useEffect(() => {
        if (googleUser) {
            navigate('/home');
        }

    }, [googleUser])
    if (googleLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='container my-4'>
            <div className='d-flex flex-row text-center justify-content-center align-items-center' >
                <hr className='w-25' />
                <p className='mt-2 px-3 fs-5'>or</p>
                <hr className='w-25' />
            </div>
            <p className='text-danger text-center'>{errors}</p>
            <div className='text-center'>
                <button onClick={googleSign} className='google-btn rounded-pill px-5 py-3 text-light' >Continue with google</button>
            </div>
        </div>
    );
};

export default SocialSign;