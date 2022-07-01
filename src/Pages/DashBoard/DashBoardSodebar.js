import React from 'react';
import { NavLink } from 'react-router-dom';

const DashBoardSodebar = ({children}) => {
    return (
        <div class="drawer drawer-mobile mt-5 fixed h-full">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
         
          

          {children}
          
        
        </div> 
        <div class="drawer-side ">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-2 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li><NavLink className=' btn btn-outline mb-2' to='/dashboard/add-admin'>Add Admin</NavLink></li>
           
           
           
<div class="dropdown">
  <label tabindex="0" class="btn w-full  btn-outline ">Add Service</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><NavLink className='mb-0.5' to='/dashboard/iphoneee'>Iphone</NavLink></li>
    <li><NavLink className='mb-0.5' to='/dashboard/samsunggg'>Samsung</NavLink></li>
    <li><NavLink className='mb-0.5' to='/dashboard/oppo'>Oppo</NavLink></li>
    <li><NavLink className='mb-0.5' to='/dashboard/xiomi'>Xiomi</NavLink></li>
    <li><NavLink className='mb-0.5' to='/dashboard/nokiaaa'>Nokia</NavLink></li>
    <li><NavLink className='mb-0.5' to='/dashboard/infinixxx'>Infinix</NavLink></li>
    <li><NavLink className='mb-0.5' to='/dashboard/waltonnn'>Walton</NavLink></li>
    <li><NavLink className='mb-0.5' to='/dashboard/realmeee'>Realme</NavLink></li>
    <li><NavLink className='mb-0.5' to='/dashboard/oneplusss'>OnePlus</NavLink></li>
    <li><NavLink className='mb-0.5' to='/dashboard/itelll'>Itel</NavLink></li>
    <li><NavLink className='mb-0.5' to='/dashboard/vivooo'>Vivo</NavLink></li>
    <li><NavLink className='mb-0.5' to='/dashboard/tecnooo'>Tecno</NavLink></li>
    <li><NavLink className='mb-0.5' to='/dashboard/motorolaaa'>Motorola</NavLink></li>
  </ul>
</div>
           
            
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoardSodebar;