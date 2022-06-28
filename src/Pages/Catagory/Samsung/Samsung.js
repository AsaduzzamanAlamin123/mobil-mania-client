import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SamsungShow from './SamsungShow';

const Samsung = () => {
    const [samsungs , setSamsungs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/samsungs')
        .then(res => res.json())
        .then(data=>setSamsungs(data))
    },[])
    return (
        <div>

           <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-4 w-4/5 mx-auto'>
            {
                samsungs.map(samsung => <SamsungShow samsung={samsung}></SamsungShow>)
            }
           </div>
            <h2 className='text-center font-thin font-mono text-blue-700 mt-5 mb-5'> <Link to='/catagory'>back to catagory</Link></h2>
        </div>
    );
};

export default Samsung;