
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IphoneShow from './IphoneShow';

const Iphone = () => {
    const [iphones , setIphones] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/iphones')
        .then(res=>res.json())
        .then(data => setIphones(data))
    },[])
    return (
        <div>
          
           <div className='grid sm:grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 mt-4 w-4/5 mx-auto gap-5'>
           {
                iphones.map(iphone => <IphoneShow iphone={iphone}></IphoneShow>)
            }
           </div>
          

           <h2> <Link to='/catagory'>back to catagory</Link></h2>
        </div>
    );
};

export default Iphone;