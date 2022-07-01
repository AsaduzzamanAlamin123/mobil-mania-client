import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SamsungShow.css'

const SamsungShow = ({single}) => {
    const [user, loading, error] = useAuthState(auth);
    console.log(single);

    if(loading){
        return <p>Loading....</p>
    }
    const {name , picture , quantity ,price , _id} = single;
    return (
        <div>
            <div class="card w-full h-96  bg-base-100 shadow-xl" >
  <figure><img className='h-36' src={picture} alt="Shoes" /></figure>
  <div class="card-body container">
    <h2 class="text-center font-bold font-mono text-lime-900 text-4xl"  title={name}>{name.slice(0,20)}!</h2>
    <h2 className='text-center font-bold font-mono text-red-500 text-2xl'>price:{price}</h2>
    <h2 className='text-center font-bold font-mono text-red-500 text-2xl'>quantity:{quantity}</h2>

 
   
  </div>
  <div className='btn-holder'>
   
    <Link className='w-full btn ' to={`/samsung/${_id}`}>See Detailes</Link>

   {/* to={`/iphone/${_id}`} */}
   </div>
 
</div>
           
        </div>
    );
};

export default SamsungShow;