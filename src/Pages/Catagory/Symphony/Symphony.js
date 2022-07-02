import React, { useEffect, useState } from 'react';
import SymphonyShow from './SymphonyShow';

const Symphony = () => {
    const [symphonyData , setSymphonyData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/symphonys')
        .then(res=>res.json())
        .then(data=>setSymphonyData(data))
    },[])
    
    return (
        <div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10'>
                {
                    symphonyData?.map(single => <SymphonyShow key={single._id} single={single}></SymphonyShow>)
                }
            </div>
        </div>
    );
};

export default Symphony;