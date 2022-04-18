import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SocialSign.css';

const SocialSign = () => {
    const [signInWithGoogle, googleUser, googleLoading, googlError] = useSignInWithGoogle(auth);

    return (
        <div className='container my-4'>
            <div className='d-flex flex-row text-center justify-content-center align-items-center' >
                <hr className='w-25' />
                <p className='mt-2 px-3 fs-5'>or</p>
                <hr className='w-25' />
            </div>
            <div className='text-center'>
                <button className='google-btn rounded-pill px-5 py-3 text-light' >Continue with google</button>
            </div>

        </div>
    );
};

export default SocialSign;