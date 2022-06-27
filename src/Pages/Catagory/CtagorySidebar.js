import React from 'react';
import { NavLink } from 'react-router-dom';

const CtagorySidebar = ({children}) => {
    return (
        <div class="drawer drawer-mobile h-96">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          {children}
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><NavLink className='btn btn-outline mb-5' to='/iphone'>Iphone</NavLink></li>
            <li><NavLink className='btn btn-outline' to='/samsung'>Samsung</NavLink> </li>
          </ul>
        
        </div>
      </div>
    );
};

export default CtagorySidebar;