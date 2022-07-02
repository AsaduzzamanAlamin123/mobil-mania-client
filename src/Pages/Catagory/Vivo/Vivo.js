import React, { useEffect, useState } from 'react';
import VivoShow from './VivoShow';

const Vivo = () => {
    const [vivoData , setVivoData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/vivos')
        .then(res=>res.json())
        .then(data=> setVivoData(data))
    },[])
    return (
        <div>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto mt-10 mb-10 '>
            {
                vivoData.map(single=><VivoShow key={single._id} single={single}></VivoShow>)
            }
           </div>
        </div>
    );
};

export default Vivo;