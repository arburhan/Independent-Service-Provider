import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Checkout = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div className='d-flex justify-content-center my-5'>
            <form>
                <div class="mb-3">
                    <label style={{ margin: '0' }} for="exampleInputEmail1" class="form-label">Email address</label>
                    <input value={user.email} readOnly class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label style={{ margin: '0' }} for="name" class="form-label">Name</label>
                    {user.displayName ? <input value={user.displayName} readOnly class="form-control " id="name" /> : <input type="name" class="form-control " id="name" />}
                </div>
                <div class="mb-3">
                    <label style={{ margin: '0' }} for="phone" class="form-label">Contact Number</label>
                    <input type="phone" class="form-control " id="phone" />
                </div>
                <div class="mb-3">
                    <label style={{ margin: '0' }} for="address" class="form-label">Address</label>
                    <input type="address" class="form-control " id="address" />
                </div>
                <div className='text-center'>
                    <button type="submit" class="btn btn-primary w-75">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;