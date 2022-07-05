import React from 'react';
import { Outlet } from 'react-router-dom';
import PageTitle from '../../componants/Shared/PageTitle/PageTitle';
import DashBoardSodebar from './DashBoardSodebar';

const DashBoard = () => {
    return (
        <div className=''>
            <DashBoardSodebar>
                <PageTitle title='dashboard'></PageTitle>
               <Outlet></Outlet>
            </DashBoardSodebar>
        </div>
    );
};

export default DashBoard;