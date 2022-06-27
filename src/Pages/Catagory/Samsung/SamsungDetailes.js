import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SamsungDetailes = () => {
    const [detailes , setDetailes] = useState({});
    const { samsungId } = useParams();

    useEffect(()=>{
        fetch(`http://localhost:5000/samsungs/${samsungId}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h2>ojpirj</h2>
            <h2>ojpirj</h2>
            <h2>ojpirj</h2>
            <h2>ojpirj</h2>
            <h2>ojpirj</h2>
            <h2>ojpirj</h2>
            <h2>ojpirj</h2>
            <h2>ojpirj</h2>
        </div>
    );
};

export default SamsungDetailes;