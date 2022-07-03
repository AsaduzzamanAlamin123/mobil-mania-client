import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
            <h2 className='text-center font-thin font-mono text-blue-700 mt-5 mb-5'> <Link  to='/catagory'>back to catagory</Link></h2>
        </div>
    );
};

export default Oppo;