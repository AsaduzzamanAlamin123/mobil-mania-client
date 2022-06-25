import React from 'react';
import mobile1 from '../../images/mobile2.webp'
import mobile2 from '../../images/mobile3.jpeg'
import mobile3 from '../../images/mobile4.webp'

const Cardh = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5   mt-10 mb-20 sm:mb-10 ml-24'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={mobile3} className='h-56 w-96' alt="Shoes" /></figure>
  <div class="card-body">
  <h2 className="text-center text-4xl font-mono text-accent">Camera!</h2>
    <p className='font-mono'>Phone Camera is a very important things for all public.because now all public use facebook , instagram and other social media.so we need upload our nice moment for nice memory.other wise camera is important for our other important work.as like:passport size pic for our school ,college and office</p>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={mobile1} className='h-56 w-96' alt="Shoes" /></figure>
  <div class="card-body">
    <h2 className="text-center text-4xl font-mono text-accent">Head Phone</h2>
    <p className='font-mono'>headphone such a things which we use our importantr all work.we hear song.thats why we need headphone.we hear some important speak any noisable place .sp we need headphone.so i think headphone is very important for us</p>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={mobile2} className='h-56 w-96' alt="Shoes" /></figure>
  <div class="card-body">
  <h2 className="text-center text-4xl font-mono text-accent">information share!</h2>
    <p className='font-mono'>if we need to do comunicate our father, mother, client ,teacher,coligue, boss,wife,girldfriend e.t.then we need mobile phone .we can share any information any place with our mobile phone.gor example:we shaere our picture ,our document,we are doing communication with all public with mobile.</p>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Cardh;