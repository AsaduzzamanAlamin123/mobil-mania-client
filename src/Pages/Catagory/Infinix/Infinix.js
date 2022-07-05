import React, { useEffect, useState } from 'react';
import InfinixShow from './InfinixShow';

const Infinix = () => {
    const [infinix , setInfinix] = useState([]);
    useEffect(()=>{
        fetch('https://afternoon-journey-31295.herokuapp.com/itels')
        .then(res=>res.json())
        .then(data=>setInfinix(data));
    },[])
    return (
        <div>
             <div className='grid sm:grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 mt-4 w-full mx-auto gap-5'>
           {
                infinix.map(single => <InfinixShow single={single} key={single._id}></InfinixShow>)
            }
           </div>
        </div>
    );
};

export default Infinix;