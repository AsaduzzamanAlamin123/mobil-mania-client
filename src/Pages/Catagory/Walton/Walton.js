import React, { useEffect, useState } from 'react';
import WaltonShow from './WaltonShow';

const Walton = () => {
    const [waltons , setWaltons] = useState([]);
    useEffect(()=>{
        fetch('https://afternoon-journey-31295.herokuapp.com/waltons')
        .then(res=>res.json())
        .then(data=>setWaltons(data));
    },[])
    return (
        <div>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto mt-10 mb-10 '>
            {
                waltons.map(single=><WaltonShow key={single._id} single={single}></WaltonShow>)
            }
           </div>
        </div>
    );
};

export default Walton;