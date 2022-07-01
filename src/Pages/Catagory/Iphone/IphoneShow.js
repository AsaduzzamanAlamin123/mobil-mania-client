import React from 'react';
import { Link } from 'react-router-dom';

const IphoneShow = ({iphone}) => {
    console.log(iphone);
    const {name , picture , quantity , rating ,price , Network , _id} = iphone;
    return (
        <div class="card w-full bg-base-100 shadow-xl" >
          
  <figure><img className='w-full' src={picture} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="text-cventer text-primary text-3xl font-bold font-serif">{name}</h2>
    <h2 className='text-center text-xl text-secondary font-mono'>Price:{price}</h2>
    <h2 className='text-center text-xl text-secondary font-mono'>Quantity:{quantity}</h2>
    <h2 className='text-center text-xl text-secondary font-mono'>Network:{Network}</h2>
    
    
     
      <Link className='btn btn-primary btn-full' to={`/iphone/${_id}`}>See Detailes</Link>
      {/* {`/update/${user._id}`} */}


  </div>
</div>
    );
};

export default IphoneShow;