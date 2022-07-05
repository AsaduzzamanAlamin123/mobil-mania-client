import React from 'react';
import PageTitle from '../../componants/Shared/PageTitle/PageTitle';
import CtagorySidebar from './CtagorySidebar';


const Catagory = () => {
    return (
        <div>
            <PageTitle title='catagory'></PageTitle>
          
             
            

              <CtagorySidebar>
              
              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='grid sm:grid-cols-1 lg:grid-cols-2 mb-4 sm:mb-0'> 
     <div className='mt-16 ml-5'><h2 className=' flex justify-center  text-6xl font-mono text-primary mb-5'>This is catagory page <br /> Choose Your Favourite Catageroy</h2></div>
     <div>
        <img className='rounded-lg' src="https://media.wired.com/photos/622273c19e8883344f3ae359/master/pass/Gear-Twelve-South-PowerPic-Mod-Wireless-Charger-Twelve-South.jpg" alt="" />
     </div>
     </div>
             
              </CtagorySidebar>
          
        
        </div>
    );
};

export default Catagory;