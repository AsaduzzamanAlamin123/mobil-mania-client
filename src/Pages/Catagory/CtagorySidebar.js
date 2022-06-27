import React from 'react';
import { FcIphone } from 'react-icons/fc';
import { MdCropPortrait } from 'react-icons/md';
import { SiSamsung } from 'react-icons/si';
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
        <div class="drawer-side bg-accent">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><NavLink className='btn btn-outline mb-5' to='/iphone'><FcIphone className='text-xl'></FcIphone>Iphone</NavLink></li>
            <li><NavLink className='btn btn-outline mb-5' to='/samsung'><SiSamsung className='text-xl'></SiSamsung> Samsung</NavLink> </li>
            <li><NavLink className='btn btn-outline' to='/oppo'><MdCropPortrait></MdCropPortrait> Oppo</NavLink> </li>
          </ul>
        
        </div>
      </div>
    );
};

export default CtagorySidebar;