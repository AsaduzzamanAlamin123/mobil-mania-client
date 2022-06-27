import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdAccountCircle } from 'react-icons/md';

const AddService = () => {
    return (
        <div className='flex h-screen justify-center  items-center' >
            <div class="card w-96 bg-base-100 shadow-xl " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div class="card-body">
          <h2 class=" text-center text-3xl text-primary font-bold font-mono">Log In!</h2>
          <form action="">
          <input type="text" name='email' placeholder="Enter Email" class="input input-bordered input-success w-full max-w-xs mb-10" />
          <input type="password" name='password' placeholder="Enter Valid Password" class="input input-bordered input-success w-full max-w-xs" />
         <button className='btn w-full btn-accent hover:btn-primary mt-10 text-lg font-mono font-bold text-slate-500'>Log In <MdAccountCircle></MdAccountCircle></button>
          </form>
          <div class="divider">OR</div>
          <div>
            <button className='btn btn-glass hover:btn-secondary w-full'>CONTINUE WITH GOOGLE <FcGoogle className='ml-3 text-xl'></FcGoogle></button>
          </div>
         
          
        </div>
      </div>
        </div>
    );
};

export default AddService;