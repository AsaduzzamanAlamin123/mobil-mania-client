import React, { useEffect, useState } from 'react';
import OppoShow from './OppoShow';

const Oppo = () => {
    const [oppoData , setOppoData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/oppos')
        .then(res=>res.json())
        .then(data=>setOppoData(data))
    },[])
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10'>
                {
                    oppoData?.map(singled => <OppoShow key={singled._id} singled={singled}></OppoShow>)
                }
            </div>
        </div>
    );
};

export default Oppo;