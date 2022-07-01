import React from 'react';
import useFakeData from '../../hooks/useAdmin';
import SingleTest from './SingleTest';

const Test = () => {
    const [data] = useFakeData()
    return (
        <div>
            <h2>{data.length}</h2>
           {
            data?.map(data => <SingleTest data={data}></SingleTest>)
           }
           
            
        </div>
    );
};

export default Test;
