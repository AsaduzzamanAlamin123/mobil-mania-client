import React from 'react';
import { Link } from 'react-router-dom';

const SamsungShow = ({samsung}) => {
    const {name , picture , quantity , rating ,price , Network , _id} = samsung;
    console.log(samsung);
    return (
        <div class="card  bg-base-100 shadow-xl" data-aos="flip-left">
        <figure><img className='w-full' src={picture} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="text-cventer text-primary text-3xl font-bold font-serif">{name}</h2>
          <h2 className='text-center text-xl text-secondary font-mono'>Price:{price}</h2>
          <h2 className='text-center text-xl text-secondary font-mono'>Quantity:{quantity}</h2>
          <h2 className='text-center text-xl text-secondary font-mono'>Network:{Network}</h2>
          
          
           
           <div className=''>
           <Link className='btn btn-primary w-full   ' to={`/samsung/${_id}`}>See Detailes</Link>
           </div>
            {/* {`/update/${user._id}`} */}
      
      
        </div>
      </div>
    );
};

export default SamsungShow;