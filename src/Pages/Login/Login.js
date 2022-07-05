import React, { useEffect, useState } from 'react';

import { MdAccountCircle } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { useAuthState,  useSignInWithEmailAndPassword,  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../componants/Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PageTitle from '../../componants/Shared/PageTitle/PageTitle';


const Login = () => {
  const [userInfo , setUserInfo] = useState({
    email:'', 
    password:'',
    confirmPaswsword:'',
    general:'',
 });

 const [errors , setErrors] = useState({
    emailError:'',
    passwordError:'',
    confirmPasswordError:'',
    generalError:''
 })

 const handleEmailChange = event =>{
    const emailRegex =  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const validEmail = emailRegex.test(event.target.value);
    if(validEmail){
        setUserInfo({...userInfo , email:event.target.value});
        setErrors({...errors , emailError:'' })
    }
    else{
        setErrors({...errors , emailError:'Invalid Email'});
        setUserInfo({...userInfo , email:''})
    }
 }

 const handlePasswordChange = event =>{
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const validPassword = passwordRegex.test(event.target.value);

    if(validPassword){
        setUserInfo({...userInfo , password:event.target.value}); 
        setErrors({...errors , passwordError:''})
    }
    else{
        setErrors({...errors , passwordError:'Enter Your Password'});
        setUserInfo({...userInfo , password:''})
    }
 }
  
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    suser,
    sloading,
    serror,
  ] = useSignInWithEmailAndPassword(auth);



  const navigate = useNavigate();
  const location = useLocation();
let from = location.state?.from?.pathname || "/";

  useEffect(()=>{
    if(user){
      navigate(from)
    }
  },[user])



  if(loading || googleLoading || sloading){
    return <Loading></Loading>
  }
    return (
        <div className='flex h-screen justify-center bg-accent items-center ' >
          <PageTitle title='login'></PageTitle>
            <div class="card w-96 bg-base-100 shadow-xl ml-4 sm:ml-0 mr-4 sm:mr-0" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div class="card-body">
          <h2 class=" text-center text-3xl text-primary font-bold font-mono">Log In!</h2>
          <form action="">
          <input onChange={handleEmailChange} type="text" name='email' placeholder="Enter Email" class="input input-bordered input-success w-full max-w-xs mb-10" required/>
          {errors?.emailError && <p className='font-mono font-bold text-red-900'>{errors.emailError}</p>}
          <input onChange={handlePasswordChange} type="password" name='password' placeholder="Enter Valid Password" class="input input-bordered input-success w-full max-w-xs" required/>
          {errors?.passwordError && <p className='font-mono font-bold text-red-900'>{errors.passwordError}</p>}
         <button onClick={() => signInWithEmailAndPassword(userInfo.email, userInfo.password)} className='btn w-full btn-accent hover:btn-primary mt-10 text-lg font-mono font-bold text-slate-500'>Log In <MdAccountCircle></MdAccountCircle></button>
          </form>
          <p className='font-mono'>You Haven't Accout..?   <Link className='link link-primary' to='/signup'>Please Create an Account </Link></p>
        
         
          <div class="divider">OR</div>
          <div>
            <button onClick={() => signInWithGoogle()} className='btn btn-glass hover:btn-secondary w-full'>CONTINUE WITH GOOGLE <FcGoogle className='ml-3 text-xl '></FcGoogle></button>
          </div>
         
          
        </div>
      </div>
        </div>
    );
};

export default Login;