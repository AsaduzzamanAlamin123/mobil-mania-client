import React from 'react';
import {  NavLink, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const Navbar = ({children}) => {
  const [admin] = useAdmin();
  const {pathname} = useLocation()
    return (
        <div class="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
        <div class="drawer-content flex flex-col">
        <div class="navbar-start">
    
    
  </div>
  
          <div class="w-full navbar bg-base-300">
          {pathname.includes("dashboard") && <label tabindex="0" class="btn btn-ghost btn-circle lg:hidden" for="my-drawer-2" >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>}
            
             
            <div class="flex-1 px-2 mx-2 text-3xl font-mono font-bold text-secondary">Mobile Mania</div>
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal gap-x-3">
               
                <li><NavLink className='rounded-lg' to='/'>Home</NavLink></li>
                
          {
            admin && <li><NavLink to='/dashboard'>DashBoard</NavLink></li>
          }
                
                <li><NavLink className='rounded-lg' to='/catagory'>Catagory</NavLink></li>
                <li><NavLink className='rounded-lg' to='/about'>About</NavLink></li>
                <li><NavLink className='rounded-lg' to='/login'>Log In</NavLink></li>
                <li class="dropdown dropdown-hover dropdown-end">
  <label tabindex="0" class="btn m-1 rounded-lg ">Book Now</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</li>
                
              </ul>
            </div>
          </div>
      
          {children}
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
         
          <li><NavLink className='rounded-lg' to='/'>Home</NavLink></li>
                
                <li><NavLink className='rounded-lg' to='/catagory'>Catagory</NavLink></li>
                <li><NavLink className='rounded-lg' to='/about'>About</NavLink></li>
                <li><NavLink className='rounded-lg' to='/login'>Log In</NavLink></li>

                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
    Book Now
  </div>
  <div class="collapse-content"> 
  <ul>
  <li><NavLink className='mb-10' to='#'>Ouick Book</NavLink></li>
   <li><NavLink to='#'>preboook</NavLink></li>
  </ul>
  </div>
</div>
            
          </ul>
          
        </div>
      </div>
    );
};

export default Navbar;