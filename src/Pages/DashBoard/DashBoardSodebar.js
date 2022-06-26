import React from 'react';
import { NavLink } from 'react-router-dom';

const DashBoardSodebar = ({children}) => {
    return (
        <div class="drawer drawer-mobile mt-16">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
         
          

          {children}
          
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
           
            <li><NavLink className='mb-5 btn btn-outline' to='/dashboard/add-service'>Add Service</NavLink></li>
            <li><NavLink className='mb-5 btn btn-outline' to='/dashboard/add-admin'>Add Admin</NavLink></li>
            
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoardSodebar;