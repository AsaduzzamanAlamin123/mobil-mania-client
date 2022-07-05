import React, { useEffect, useState } from 'react';
import RealmeShow from './RealmeShow';

const Realme = () => {
    const [realmes , setRealmes] = useState([]);
    useEffect(()=>{
        fetch('https://afternoon-journey-31295.herokuapp.com/realmes')
        .then(res=>res.json())
        .then(data=>setRealmes(data))
    },[])
    return (
        <div>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto mt-10 mb-10 '>
            {
                realmes.map(single=><RealmeShow key={single._id} single={single}></RealmeShow>)
            }
           </div>
        </div>
    );
};

export default Realme;