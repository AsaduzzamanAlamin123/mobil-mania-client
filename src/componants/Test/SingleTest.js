import React from 'react';

const SingleTest = ({data}) => {
    return (
        <div>
            <div>
            <img className='w-[120px]' src={data.picture} alt="" />
               { data.name}
               { data.price}
               { data.color}
               { data.color}
            </div>
        </div>
    );
};

export default SingleTest;