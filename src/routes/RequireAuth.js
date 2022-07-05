import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';

import auth from '../firebase.init';
import Loading from '../componants/Shared/Loading/Loading';


const RequireAuth = () => {
    const [sendEmailVerification, sending, verror] = useSendEmailVerification(auth);
    const location = useLocation()
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    if(loading){
        return <Loading></Loading>
    }

    

    if(!user){
        return <Navigate to='/login' state={{ from: location}} replace/>
    }

    if(!user.emailVerified){
        return <div>
            <p className='text-center mt-5'>Your Email is Not Verified</p>
            <p className='mt-5 text-green-800'> please Verify Your Email Adress</p>
            <button className='btn btn-outline'
        onClick={async () => {
          await sendEmailVerification();
          alert('Again email change');
        }}
      >
        Verify email
      </button>
        </div>
    }
    return <Outlet></Outlet>
};

export default RequireAuth;