import React, { useEffect, useState } from 'react';
import ItelShow from '../Itel/ItelShow'

const Itel = () => {
    const [itels , setItels] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/itels')
        .then(res=>res.json())
        .then(data=>setItels(data));
    },[])
    return (
        <div>
             
           <div className='grid sm:grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 mt-4 w-full mx-auto gap-5'>
           {
                itels.map(single => <ItelShow key={single._id} single={single}></ItelShow>)
            }
           </div>
        </div>
    );
};

export default Itel;