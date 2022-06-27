import React from 'react';
import { FcIphone } from 'react-icons/fc';
import { Md1XMobiledata, MdCropPortrait, MdMobileFriendly, MdOutline4GMobiledata, MdOutlineEMobiledata, MdOutlineInsertEmoticon } from 'react-icons/md';
import { SiConvertio, SiIconify, SiSamsung } from 'react-icons/si';
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import { BiMobileVibration } from 'react-icons/bi';
import { RiContrastDropFill } from 'react-icons/ri';
import { GiContract } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { FaSadCry, FaSignInAlt } from 'react-icons/fa';


const CtagorySidebar = ({children}) => {
    return (
        <div class="drawer drawer-mobile h-full" data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="3000"
        data-aos-easing="ease-in-sine">
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
            <li><NavLink className='btn btn-outline mb-5' to='/oppo'><MdCropPortrait></MdCropPortrait> Oppo</NavLink> </li>
            <li><NavLink className='btn btn-outline mb-5' to='/xiaomi'><BiMobileVibration></BiMobileVibration> Xiaomi</NavLink> </li>
            <li><NavLink className='btn btn-outline mb-5' to='/vivo'><HiOutlineDeviceMobile></HiOutlineDeviceMobile> Vivo</NavLink> </li>
            <li><NavLink className='btn btn-outline mb-5' to='/realme'><Md1XMobiledata></Md1XMobiledata> Realme</NavLink> </li>
            <li><NavLink className='btn btn-outline mb-5' to='/walton'><SiIconify></SiIconify> Walton</NavLink> </li>
            <li><NavLink className='btn btn-outline mb-5' to='/symphony'><SiConvertio></SiConvertio> Symphony</NavLink> </li>
            <li><NavLink className='btn btn-outline mb-5' to='/tecno'><RiContrastDropFill></RiContrastDropFill> Tecno</NavLink> </li>
            <li><NavLink className='btn btn-outline mb-5' to='/walton'><MdOutlineInsertEmoticon></MdOutlineInsertEmoticon> Walton</NavLink> </li>
            <li><NavLink className='btn btn-outline mb-5' to='/oneplus'><FaSignInAlt></FaSignInAlt> One Plus</NavLink> </li>
            <li><NavLink className='btn btn-outline mb-5' to='/itel'><FaSadCry></FaSadCry> Itel</NavLink> </li>
            <li><NavLink className='btn btn-outline mb-5' to='/infinix'><MdOutline4GMobiledata></MdOutline4GMobiledata> Infinix</NavLink> </li>
            <li><NavLink className='btn btn-outline mb-5' to='/nokia'><MdOutlineEMobiledata></MdOutlineEMobiledata> Nokia</NavLink> </li>
            <li><NavLink className='btn btn-outline ' to='/motorola '><MdMobileFriendly></MdMobileFriendly>Motorola </NavLink> </li>
          </ul>
        
        </div>
      </div>
    );
};

export default CtagorySidebar;