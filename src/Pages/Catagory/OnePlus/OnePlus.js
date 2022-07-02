import React, { useEffect, useState } from 'react';
import OnePlusShow from './OnePlusShow';

const OnePlus = () => {
    const [onePlusData , setOnePlusData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/symphonys')
        .then(res=>res.json())
        .then(data=>setOnePlusData(data))
    },[])
    return (
        <div>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10'>
                {
                    onePlusData?.map(single => <OnePlusShow key={single._id} single={single}></OnePlusShow>)
                }
            </div>
            
        </div>
    );
};

export default OnePlus;