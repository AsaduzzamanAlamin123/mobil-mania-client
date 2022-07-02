
import React, { useEffect, useState } from 'react';
import TecnoShow from './TecnoShow';

const Tecno = () => {
    const [tecnosData , seTecnosData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/tecnos')
        .then(res=>res.json())
        .then(data => seTecnosData(data))
    },[])
    return (
        <div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10'>
                {
                    tecnosData?.map(single => <TecnoShow key={single._id} single={single}></TecnoShow>)
                }
            </div>
        </div>
    );
};

export default Tecno;