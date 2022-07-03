import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useFakeData from '../../../hooks/useAdmin';

import SamsungShow from './SamsungShow';


const Samsung = () => {
   
   
    const [samsungData , setSamsungData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/samsungs')
        .then(res=>res.json())
        .then(data=> setSamsungData(data))
    },[])
    
    
  
    return (
        <div>
            
            {/* <h2>{samsungData.length}</h2> */}
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto mt-10 mb-10 '>
            {
                samsungData.map(single=><SamsungShow single={single}></SamsungShow>)
            }
           </div>
           <h2 className='text-center font-thin font-mono text-blue-700 mt-5 mb-5'> <Link  to='/catagory'>back to catagory</Link></h2>
        </div>
    );
};

export default Samsung;