import React from 'react';
import bg from '../images/pexels-photo-2769274.webp'
import { FaHourglassStart } from 'react-icons/fa';


const Landing = () => {
    return (
        <div class="hero min-h-screen " style={{
            
           
            background: `url(${bg}) no-repeat`,
            backgroundPosition: "center",
            
     
      backgroundSize: 'cover'
        }} >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="">
            <h1 data-aos="fade-up"
     data-aos-duration="1000" class="mb-5 text-5xl font-bold font-mono"><span className='text-pink-600'>Hello</span> Dude!! <br /> <span className='text-yellow-600'>Welcome</span> fancy <span className='text-pink-600'>Mobile</span>  Mania</h1>
            <p data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="1000" class="mb-5 text-justify font-mono">This is our mobile werehouse Website if you need any phone you just <br />  follow and eplement our website i beleive that you have choose a great mobailefollow and eplement our website i beleive that you have choose a great mobailefollow and eplement our website i beleive that you have choose a great mobailefollow and eplement our website i beleive that you have choose a great mobaile</p>
            <button data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" class="btn btn-primary font-bold font-mono text-accent">Get Started <FaHourglassStart></FaHourglassStart></button>
          </div>
        </div>
      </div>
    );
};

export default Landing;