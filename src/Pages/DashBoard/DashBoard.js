import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoardSodebar from './DashBoardSodebar';

const DashBoard = () => {
    return (
        <div className=''>
            <DashBoardSodebar>
               <Outlet></Outlet>
            </DashBoardSodebar>
        </div>
    );
};

export default DashBoard;