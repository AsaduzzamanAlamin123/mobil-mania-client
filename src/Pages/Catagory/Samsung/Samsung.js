import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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
        </div>
    );
};

export default Samsung;