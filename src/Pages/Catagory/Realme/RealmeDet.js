import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const RealmeDet = () => {
    const {realmeId} = useParams()
    const [detailes , setDetailes] = useState({});
    console.log(detailes);
   

    useEffect(()=>{

        fetch(`https://afternoon-journey-31295.herokuapp.com/realmes/${realmeId}`)
        .then(res=>res.json())
        .then(data=>setDetailes(data))
    },[])
    return (
        <div>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
          <div className='flex justify-center'>
               <img src={detailes.picture} alt="" />
           </div>
           <div className='text-6xl font-mono  flex justify-center items-center text-orange-800 '>{detailes.name}</div>
          </div>
        <div className='flex  justify-center items-center mb-32'>
           <div class="mockup-window border border-red-900 mt-8 w-5/6 h-full  ml-16 mr-16">
       <div class="ml-4 mr-4 px-2 py-16 border-t border-base-300">
      
      {/* table */}
      <h2 className='text-6xl font-serif text-center uppercase mb-10'>Spacification</h2>
      <div class="overflow-x-auto">
 <table class="table w-full">
  
  
   <tbody>
    
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>First Release</td>
       <td className='text-xl text-accent font-mono'>{detailes.FirstRelease}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Colors</td>
       <td className='text-xl text-accent font-mono'>{detailes.color}</td>
      
     </tr>
     <thead>
     <tr>
      
       <th className='text-2xl font-serif'>Connectivity</th>
      
       
     </tr>
   </thead>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Network</td>
       <td className='text-xl text-accent font-mono'>{detailes.Network}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>SIM</td>
       <td className='text-xl text-accent font-mono'>{detailes.SIM}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Wlan</td>
       <td className='text-xl text-accent font-mono'>{detailes.Wlan}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Blutooth</td>
       <td className='text-xl text-accent font-mono'>{detailes.Blutooth}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>GPS</td>
       <td className='text-xl text-accent font-mono'>{detailes.GPS}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>RADIO</td>
       <td className='text-xl text-accent font-mono'>{detailes.RADIO}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>USB</td>
       <td className='text-xl text-accent font-mono'>{detailes.USB}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>OTG</td>
       <td className='text-xl text-accent font-mono'>{detailes.OTG}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>USB Type-C</td>
       <td className='text-xl text-accent font-mono'>{}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>NFC</td>
       <td className='text-xl text-accent font-mono'>{detailes.NFC}</td>
      
     </tr>

     <thead>
     <tr>
      
       <th className='text-2xl font-serif'>Body</th>
      
       
     </tr>
   </thead>
   <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Style</td>
       <td className='text-xl text-accent font-mono'>{detailes.Style}</td>
      
     </tr>
   <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Material</td>
       <td className='text-xl text-accent font-mono'>{detailes.Material}</td>
      
     </tr>
   <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Water Resistance</td>
       <td className='text-xl text-accent font-mono'>{detailes.WaterResistance}</td>
      
     </tr>
   <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Dimensions</td>
       <td className='text-xl text-accent font-mono'>{detailes.Dimensions}</td>
      
     </tr>
   <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Weight</td>
       <td className='text-xl text-accent font-mono'>{detailes.Weight}</td>
      
     </tr>
 

     <thead>
     <tr>
      
       <th className='text-2xl font-serif'>Display</th>

   
      
       
     </tr>
     </thead>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Size</td>
       <td className='text-xl text-accent font-mono'>{detailes.Size}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Resolution</td>
       <td className='text-xl text-accent font-mono'>{detailes.Resolution}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Technology</td>
       <td className='text-xl text-accent font-mono'>{detailes.Technology}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Protection</td>
       <td className='text-xl text-accent font-mono'>{detailes.Protection}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Features</td>
       <td className='text-xl text-accent font-mono'>{detailes.Features}</td>
      
     </tr>

     <thead>
     <tr>
      
       <th className='text-2xl font-serif'>Back Camera</th>

     </tr>
     </thead>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Back Camera Resulation</td>
       <td className='text-xl text-accent font-mono'>{detailes.BACKCAMERAResolution}</td>
      
     </tr>

     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Back Camera Features</td>
       <td className='text-xl text-accent font-mono'>{detailes.BACKCAMERAFeatures}</td>
      
     </tr>

     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Back Camera Video Recording</td>
       <td className='text-xl text-accent font-mono'>{detailes.BACKCAMERAVideoRecording}</td>
      
     </tr>
     <thead>
     <tr>
      
       <th className='text-2xl font-serif'>Front Camera</th>

     </tr>
     </thead>

     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Back Camera Resulation</td>
       <td className='text-xl text-accent font-mono'>{detailes.FRONTCAMERAResolution}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Back Camera Feature</td>
       <td className='text-xl text-accent font-mono'>{detailes.FRONTCAMERAFeatures}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Back Camera Video Recording</td>
       <td className='text-xl text-accent font-mono'>{detailes.FRONTCAMERAVideoRecording}</td>
      
     </tr>
   

     <thead>
     <tr>
      
       <th className='text-2xl font-serif'>Battery</th>

     </tr>
     </thead>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Type and Capacity</td>
       <td className='text-xl text-accent font-mono'>{detailes.TypeandCapacity}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Fast Charging</td>
       <td className='text-xl text-accent font-mono'>{detailes.FastCharging}</td>
      
     </tr>
    
     <thead>
     <tr>
      
       <th className='text-2xl font-serif'>Performance</th>

     </tr>
     </thead>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Operating System</td>
       <td className='text-xl text-accent font-mono'>{detailes.OperatingSystem}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Chipset</td>
       <td className='text-xl text-accent font-mono'>{detailes.Chipset}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>RAM</td>
       <td className='text-xl text-accent font-mono'>{detailes.RAM}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Processor</td>
       <td className='text-xl text-accent font-mono'>{detailes.Processor}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>GPU</td>
       <td className='text-xl text-accent font-mono'>{detailes.GPU}</td>
      
     </tr>

     <thead>
     <tr>
      
       <th className='text-2xl font-serif'>Storage</th>

     </tr>
     </thead>

     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>ROM</td>
       <td className='text-xl text-accent font-mono'>{detailes.ROM}</td>
      
     </tr>
     <thead>
     <tr>
      
       <th className='text-2xl font-serif'>Sound</th>

     </tr>
     </thead>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>3.5mm Jack</td>
       <td className='text-xl text-accent font-mono'>Available</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Features</td>
       <td className='text-xl text-accent font-mono'>{detailes.Featurees}</td>
      
     </tr>

     <thead>
     <tr>
      
       <th className='text-2xl font-serif'>Security</th>

     </tr>
     </thead>

     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Fingerprint</td>
       <td className='text-xl text-accent font-mono'>{detailes.Fingerprint}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Face Unlock</td>
       <td className='text-xl text-accent font-mono'>{detailes.FaceUnlock}</td>
      
     </tr>

     <thead>
     <tr>
      
       <th className='text-2xl font-serif'>Others</th>

     </tr>
     </thead>

     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Notification Light</td>
       <td className='text-xl text-accent font-mono'>{detailes.NotificationLight}</td>
      
     </tr>

     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Sensors</td>
       <td className='text-xl text-accent font-mono'>{detailes.Sensors}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>Manufactured by</td>
       <td className='text-xl text-accent font-mono'>{detailes.Manufacturedby}</td>
      
     </tr>
     <tr>
       
       <td className='text-xl text-primary uppercase font-mono'>discovered Country</td>
       <td className='text-xl text-accent font-mono'>{detailes.discoveredCountry}</td>
      
     </tr>
   
    
   </tbody>
 </table>

 
</div>
      {/* table */}
       </div>
       <div >
 
<label  for="my-modal-3" class="btn modal-button w-full mx-auto">Click&see About This Product</label>


<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
 <div class="modal-box relative">
   <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
   <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
   <p class="py-10 text-justify text-primary font-mono ">
       {detailes.aboutProduct}
   </p>
 </div>
</div>
 </div>
     </div>
     
       </div>
       <div>
         <p className='text-center font-thin font-mono text-blue-700 mt-5 mb-5 link link-secondary'><Link  to='/samsung'>Back to previus page</Link></p>
       </div>
       
      </div>
    );
};

export default RealmeDet;