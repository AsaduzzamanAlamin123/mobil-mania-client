import React, { useEffect, useState } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { useAuthState, useCreateUserWithEmailAndPassword,  } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../componants/Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {
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
        setErrors({...errors , passwordError:'Enter valid & strong Password'});
        setUserInfo({...userInfo , password:''})
    }
 }



 const handleConfirmPassword = event =>{
    if(event.target.value === userInfo.password){
        setUserInfo({...userInfo , confirmPaswsword:''});
        setErrors({...errors , confirmPasswordError:''})

    }
    else{
        setErrors({...errors , confirmPasswordError:`your Password don't match`});
        setUserInfo({...userInfo , confirmPaswsword:''})
    }
 }
 const handleSubmit = event =>{
    event.preventDefault();
 }
 
 const [
    createUserWithEmailAndPassword,
    puser,
    ploading,
    perror,
  ] = useCreateUserWithEmailAndPassword(auth);




    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  
    useEffect(()=>{
      if(user){
        navigate(from)
      }

 },[user])

 

    if(loading ||  ploading){
        return <Loading></Loading>
      }

      
    return (
        <div className='flex h-screen justify-center bg-accent items-center' >
        <div class="card w-96 bg-base-100 shadow-xl " data-aos="fade-down"
 data-aos-easing="linear"
 data-aos-duration="1500">
    <div class="card-body">
      <h2 class=" text-center text-3xl text-primary font-bold font-mono">Log In!</h2>
      <form onSubmit={handleSubmit}>
      <input onChange={handleEmailChange} type="text" name='email' placeholder="Enter Email" class="input input-bordered input-success w-full max-w-xs " required/>
{errors?.emailError && <p className='font-mono font-bold text-red-900'>{errors.emailError}</p>}


      <input onChange={handlePasswordChange} type="password" name='password' placeholder="Enter Valid Password" class="input input-bordered input-success w-full max-w-xs mt-10" required/>
      {errors?.passwordError && <p className='font-mono font-bold text-red-900'>{errors.passwordError}</p>}
      <input onChange={handleConfirmPassword}  type="password" name='confirmpassword' placeholder="Enter confirm Password" class="input input-bordered input-success w-full max-w-xs mt-10" required/>
{errors?.confirmPasswordError && <p className='font-mono font-bold text-red-900'>{errors.confirmPasswordError}</p>}

     <button onClick={() => createUserWithEmailAndPassword(userInfo.email, userInfo.password)} className='btn w-full btn-accent hover:btn-primary mt-10 text-lg font-mono font-bold text-slate-500'>Sign Up <MdAccountCircle></MdAccountCircle></button>
      </form>
      <p className='font-mono'>You Haven an Accout..?   <Link className='link link-primary' to='/login'>Please Login </Link></p>
     
     
     
     
      
    </div>
  </div>
    </div>
    );
};

export default SignUp;