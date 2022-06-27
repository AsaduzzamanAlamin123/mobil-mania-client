
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const IphoneDetailes = () => {
    const {iphoneId} = useParams();
    const [detailes , setDetailes] = useState({});
    console.log(detailes);
    useEffect(()=>{
        fetch(`http://localhost:5000/iphones/${iphoneId}`)
        .then(res=>res.json())
        .then(data => setDetailes(data))
    },[])
    return (
        <div class="overflow-x-auto">

           <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
           <div className='flex justify-center'>
                <img src={detailes.picture} alt="" />
            </div>
            <div className='text-6xl font-mono font-serif flex justify-center items-center text-orange-800 '>{detailes.name}</div>
           </div>
        <table class="table w-full ml-20  lg:w-5/6">
          {/* <!-- head --> */}
         
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              
              <td className='text-xl text-primary font-mono'>First Release</td>
              <td className='text-xl text-emerald-500 font-mono'>{detailes.FirstRelease}</td>
             
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
             
              <td className='text-xl text-primary font-mono'>color</td>
              <td className='text-xl text-emerald-500 font-mono'>{detailes.color} </td>
              
            </tr>
            <thead>
          <tr>
             <th className='text-xl text-slate-600 font-bold font-serif'> Connectivity</th>
            </tr>
          </thead>
            <tr>
              
              <td className='text-xl text-primary font-mono'>Network</td>
              <td className='text-xl text-emerald-500 font-mono'>{detailes.Network}</td>
              
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              
            <td className='text-xl text-primary font-mono'>SIM</td>
              <td className='text-xl text-emerald-500 font-mono'>{detailes.SIM}</td>
              
            </tr>
            <tr>
              
            <td className='text-xl text-primary font-mono'>Wlan</td>
              <td className='text-xl text-emerald-500 font-mono'>{detailes.Wlan}</td>
              
            </tr>
            <tr>
              
            <td className='text-xl text-primary font-mono'>Blutooth</td>
              <td className='text-xl text-emerald-500 font-mono'>{detailes.Blutooth}</td>
              
            </tr>
            <tr>
              
            <td className='text-xl text-primary font-mono'>GPS</td>
              <td className='text-xl text-emerald-500 font-mono'>{detailes.GPS}</td>
              
            </tr>
            <tr>
              
            <td className='text-xl text-primary font-mono'>RADIO</td>
              <td className='text-xl text-emerald-500 font-mono'>{detailes.RADIO}</td>
              
            </tr>
            <tr>
              
            <td className='text-xl text-primary font-mono'>USB</td>
              <td className='text-xl text-emerald-500 font-mono'>{detailes.USB}</td>
              
            </tr>
            <thead>
          <tr>
             <th className='text-xl text-slate-600 font-bold font-serif'> Body</th>
            </tr>
          </thead>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Style</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.Style}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Material</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.Material}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>WaterResistance</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.WaterResistance}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Dimensions</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.Dimensions}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Weight</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.Weight}</td>
                
              </tr>
              <thead>
          <tr>
             <th className='text-xl text-slate-600 font-bold font-serif'>Display</th>
            </tr>
          </thead>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Size</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.Size}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Resolution</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.Resolution}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Technology</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.Technology}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Protection</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.Protection}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Features</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.Features}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Resolution</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.Resolution}</td>
                
              </tr>
              <thead>
          <tr>
             <th className='text-xl text-slate-600 font-bold font-serif'> Back Camera</th>
            </tr>
          </thead>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Resolution</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.BACKCAMERAResolution}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Features</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.BACKCAMERAFeatures}</td>
                
              </tr>
          
          <tr>
              
              <td className='text-xl text-primary font-mono'>Video Recording</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.BACKCAMERAVideoRecording}</td>
                
              </tr>

              <thead>
          <tr>
             <th className='text-xl text-slate-600 font-bold font-serif'> Front Camera</th>
            </tr>
          </thead>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Feature</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.FRONTCAMERAFeatures}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Resulation</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.FRONTCAMERAResolution}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Video Recording</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.FRONTCAMERAVideoRecording}</td>
                
              </tr>

              <thead>
          <tr>
             <th className='text-xl text-slate-600 font-bold font-serif'> Battery</th>
            </tr>
          </thead>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Type And Capacity</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.TypeandCapacity}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Fast Charging</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.FastCharging}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Wirless Charging</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.WirelessCharging}</td>
                
              </tr>
        


              
              <thead>
          <tr>
             <th className='text-xl text-slate-600 font-bold font-serif'>Performance</th>
            </tr>
          </thead>

          <tr>
              
              <td className='text-xl text-primary font-mono'>Operating system</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.OperatingSystem}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Chipset</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.Chipset}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>RAM</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.RAM}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Processor</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.Processor}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>GPU</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.GPU}</td>
                
              </tr>
        

 
              <thead>
          <tr>
             <th className='text-xl text-slate-600 font-bold font-serif'>Storagee</th>
            </tr>
          </thead>
          <tr>
              
              <td className='text-xl text-primary font-mono'>ROM</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.ROM}</td>
                
              </tr>
         


              <thead>
          <tr>
             <th className='text-xl text-slate-600 font-bold font-serif'> Security</th>
            </tr>
          </thead>

          <tr>
              
              <td className='text-xl text-primary font-mono'>Fingerprint</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.Fingerprint}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Face Unlock</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.FaceUnlock}</td>
                
              </tr>

              <thead>
          <tr>
             <th className='text-xl text-slate-600 font-bold font-serif'>Others</th>
            </tr>
          </thead>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Notification Light</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.NotificationLight}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Sensors</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.Sensors}</td>
                
              </tr>
          <tr>
              
              <td className='text-xl text-primary font-mono'>Manufactured by</td>
                <td className='text-xl text-emerald-500 font-mono'>{detailes.Manufacturedby}</td>
                
              </tr>


              

          </tbody>
        </table>
        <h2 className='text-center text-3xl font-bold font-mono'>Description</h2>
        <p className='text-red-500 font-thin font-mono ml-10 mr-10'>{detailes.aboutProduct}</p>


        <div>
          <p className='text-center font-thin font-mono text-blue-700 mt-5 mb-5'><Link  to='/iphone'>Back to previus page</Link></p>
        </div>

       
      </div>
      
    );
};

export default IphoneDetailes;