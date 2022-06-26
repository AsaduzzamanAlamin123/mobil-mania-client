import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoardSodebar from './DashBoardSodebar';

const DashBoard = () => {
    return (
        <div>
            <DashBoardSodebar>
               <Outlet></Outlet>
            </DashBoardSodebar>
        </div>
    );
};

export default DashBoard;