import React, { useEffect, useState } from 'react';
import XiomiShow from './XiomiShow';

const Xiomi = () => {
    const [xiomiData , setXioniData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/xiomis')
        .then(res=>res.json())
        .then(data=> setXioniData(data))
    },[])
    return (
        <div>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto mt-10 mb-10 '>
            {
                xiomiData.map(single=><XiomiShow  single={single}></XiomiShow>)
            }
           </div>
        </div>
    );
};

export default Xiomi;