import React from 'react';

        
const Infinixxx = () => {
  const handleInfinixUser = event =>{
    event.preventDefault();
    const FirstRelease = event.target.FirstRelease.value;
    console.log(FirstRelease);
    const price = event.target.price.value;
    console.log(price);
    const quantity = event.target.quantity.value;
    console.log(quantity);
    const color = event.target.color.value;
    console.log(color);
    const Network = event.target.Network.value;
    console.log(Network);
    const SIM = event.target.Network.value;
    console.log(SIM);
    const Wlan = event.target.Wlan.value;
    console.log(Wlan);
    const Blutooth = event.target.Blutooth.value;
    console.log(Blutooth);
    const GPS = event.target.GPS.value;
    console.log(GPS);
    const RADIO = event.target.RADIO.value;
    console.log(RADIO);
    const USB = event.target.USB.value;
    console.log(USB);
    const OTG = event.target.OTG.value;
    console.log(OTG);
    // const USBTypeC = event.target.USBTypeC.value;
    // console.log(USBTypeC);
  const NFC = event.target.NFC.value;
    console.log(NFC);
   const Style = event.target.Style.value;
    console.log(Style);
   const Material = event.target.Material.value;
    console.log(Material);
   const WaterResistance = event.target.WaterResistance.value;
    console.log(WaterResistance);
   const Dimensions = event.target.Dimensions.value;
    console.log(Dimensions);
   const Weight = event.target.Weight.value;
    console.log(Weight);
   const Size = event.target.Size.value;
    console.log(Size);
   const Resolution = event.target.Resolution.value;
    console.log(Resolution);
   const Technology = event.target.Technology.value;
    console.log(Technology);
   const Protection = event.target.Protection.value;
    console.log(Protection);
   const Features = event.target.Features.value;
    console.log(Features);
   const BACKCAMERAResolution = event.target.BACKCAMERAResolution.value;
    console.log(BACKCAMERAResolution);
   const BACKCAMERAFeatures = event.target.BACKCAMERAFeatures.value;
    console.log(BACKCAMERAFeatures);
   const BACKCAMERAVideoRecording = event.target.BACKCAMERAVideoRecording.value;
    console.log(BACKCAMERAVideoRecording);
   const FRONTCAMERAResolution = event.target.FRONTCAMERAResolution.value;
    console.log(FRONTCAMERAResolution);
   const FRONTCAMERAFeatures = event.target.FRONTCAMERAFeatures.value;
    console.log(FRONTCAMERAFeatures);
   const FRONTCAMERAVideoRecording = event.target.FRONTCAMERAVideoRecording.value;
    console.log(FRONTCAMERAVideoRecording);
   const TypeandCapacity = event.target.TypeandCapacity.value;
    console.log(TypeandCapacity);
   const FastCharging = event.target.FastCharging.value;
    console.log(FastCharging);
    const WirelessCharging = event.target.WirelessCharging.value;
    console.log(WirelessCharging);
    const OperatingSystem = event.target.OperatingSystem.value;
    console.log(OperatingSystem);
    const Chipset = event.target.OperatingSystem.value;
    console.log(Chipset);
    const RAM = event.target.RAM.value;
    console.log(RAM);
    const Processor = event.target.Processor.value;
    console.log(Processor);
    const GPU = event.target.GPU.value;
    console.log(GPU);
    const ROM = event.target.ROM.value;
    console.log(ROM);
    // const MicroSDSlot = event.target.MicroSDSlot.value;
    // console.log(MicroSDSlot);
    // // const k35mmJack = event.target.k35mmJack.value;
    // console.log(k35mmJack);
    const Featurees = event.target.Featurees.value;
    console.log(Featurees);
    
    
    
    
    const Fingerprint = event.target.Fingerprint.value;
    console.log(Fingerprint);
    const FaceUnlock = event.target.FaceUnlock.value;
    console.log(FaceUnlock);
    const NotificationLight = event.target.NotificationLight.value;
    console.log(NotificationLight);
    const Sensors = event.target.Sensors.value;
    console.log(Sensors);
    const Manufacturedby = event.target.Manufacturedby.value;
    console.log(Manufacturedby);
    const picture = event.target.picture.value;
    console.log(picture);
    const name = event.target.name.value;
    console.log(name);
    const aboutProduct = event.target.aboutProduct.value;
    console.log(aboutProduct);
    const discoveredCountry = event.target.discoveredCountry.value;
    console.log(discoveredCountry);

    const product = {
      FirstRelease,
      price,
      quantity,
      color,
      Network,
      SIM,
      Wlan,
      Blutooth,
      GPS,
      RADIO,
      USB,
      OTG,
      // USBTypeC,
      NFC ,
      Style,
      Material,
      WaterResistance,
      Dimensions,
      Weight,
      Size , 
      Resolution,
      Technology,
      Protection,
      Features,
      BACKCAMERAResolution,
      BACKCAMERAFeatures,
      BACKCAMERAVideoRecording,
      FRONTCAMERAResolution,
      FRONTCAMERAFeatures,
      FRONTCAMERAVideoRecording,
      TypeandCapacity,
      FastCharging,
      WirelessCharging,
      OperatingSystem,
      Chipset,
      RAM,
      Processor,
      GPU,
      ROM,
      // MicroSDSlot,
      // k35mmJack,
      Featurees,
      Fingerprint,
      FaceUnlock ,
      NotificationLight,
      Sensors,
      Manufacturedby,
      picture,
      name,
      aboutProduct,
      discoveredCountry


      }



    // product sent to databse
    fetch('http://localhost:5000/infinix', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(product),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  alert('users added succesfully');
  event.target.reset()
})





    

  }

    return (
        <div className='mb-20 mt-72'>
        <div class="card w-full mx-auto bg-base-100 shadow-xl image-full ">
       <figure><img src="https://cdn.mos.cms.futurecdn.net/Z2MQDmNG2ZNmJpcWdFKe2c.jpg" alt="Shoes" /></figure>
       <div class="card-body">
         <h2 class="card-title">Add Samsung Data</h2>
        <form onSubmit={handleInfinixUser} className='mt-1/2 grid grid-cols-4 gap-5'>
        <div>
        <input type="text" name='FirstRelease' placeholder="First Release Date" class="input input-bordered input-error w-full mx-auto mb-5" />
        <input type="text" name='price' placeholder="Product Price" class="input input-bordered input-error w-full  mx-auto mb-5 " />
        <input type="text" name='quantity' placeholder="quantity" class="input input-bordered input-error w-full mx-auto mb-5" />
        <input type="text" name='color' placeholder="Product Color" class="input input-bordered input-error w-full mx-auto mb-5 " />
        <input type="text" name='color' placeholder="Product Color" class="input input-bordered input-error w-full mx-auto mb-5" />
        <input type="text" name='Network' placeholder="Network" class="input input-bordered input-error w-full mx-auto mb-5" />
        <input type="text" name='SIM' placeholder="SIM" class="input input-bordered input-error w-full mx-auto mb-5" />
        <input type="text" name='Wlan' placeholder="Wlan" class="input input-bordered input-error w-full mx-auto mb-5" />
        <input type="text" name='Blutooth' placeholder="Blutooth" class="input input-bordered input-error w-full mx-auto mb-5" />
        <input type="text" name='GPS' placeholder="GPS" class="input input-bordered input-error w-full mx-auto mb-5" />
        <input type="text" name='RADIO' placeholder="RADIO" class="input input-bordered input-error w-full mx-auto mb-5" />
        <input type="text" name='USB' placeholder="USB" class="input input-bordered input-error w-full mx-auto mb-5" />
        <input type="text" name='OTG' placeholder="OTG" class="input input-bordered input-error w-full mx-auto mb-5" />
        <input type="text" name='USBType-C' placeholder="USBType-C" class="input input-bordered input-error w-full mx-auto mb-5" />
        </div>
      <div>
      <input type="text" name='NFC' placeholder="NFC" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='Style' placeholder="Style" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='Material' placeholder="Material" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='WaterResistance' placeholder="WaterResistance" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='Dimensions' placeholder="Dimensions" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='Weight' placeholder="Weight" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='Size' placeholder="Size" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='Resolution' placeholder="Resolution" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='Technology' placeholder="Technology" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='Protection' placeholder="Protection" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='Features' placeholder="Features" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='BACKCAMERAResolution' placeholder="Back Camera Resulation" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='BACKCAMERAFeatures' placeholder="Back Camera Features" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='BACKCAMERAVideoRecording' placeholder="Back Camerra Recording" class="input input-bordered input-error w-full mx-auto mb-5" />

      </div>
      <div>
      <input type="text" name='FRONTCAMERAResolution' placeholder="Front Camera Resulation" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='FRONTCAMERAFeatures' placeholder="Front Camera Features" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='FRONTCAMERAVideoRecording' placeholder="Front Camera VideoRecording" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='TypeandCapacity' placeholder="TypeandCapacity" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='FastCharging' placeholder="FastCharging" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='WirelessCharging' placeholder="Wireless Charging" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='OperatingSystem' placeholder="Operating System" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='Chipset' placeholder="Chipset" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='RAM' placeholder="RAM" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='Processor' placeholder="Processor" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='GPU' placeholder="GPU" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='ROM' placeholder="ROM" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='3.5mmJack' placeholder="3.5mm Jack" class="input input-bordered input-error w-full mx-auto mb-5" />
<input type="text" name='Featurees' placeholder="Featurees" class="input input-bordered input-error w-full mx-auto mb-5" />
      </div>
      <div>
      <input type="text" name='Fingerprint' placeholder="Fingerprint" class="input input-bordered input-error w-full mx-auto mb-5" />
      <input type="text" name='FaceUnlock' placeholder="FaceUnlock" class="input input-bordered input-error w-full mx-auto mb-5" />
      <input type="text" name='NotificationLight' placeholder="Notification Light" class="input input-bordered input-error w-full mx-auto mb-5" />
      <input type="text" name='Sensors' placeholder="Sensors" class="input input-bordered input-error w-full mx-auto mb-5" />
      <input type="text" name='Manufacturedby' placeholder="Manufactured By" class="input input-bordered input-error w-full mx-auto mb-5" />
      <input type="text" name='picture' placeholder="product picture" class="input input-bordered input-error w-full mx-auto mb-5" />
      <input type="text" name='name' placeholder="product Name" class="input input-bordered input-error w-full mx-auto mb-5" />
      <input type="text" name='aboutProduct' placeholder="about Product" class="input input-bordered input-error w-full mx-auto mb-5" />
      <input type="text" name='discoveredCountry' placeholder="discovered Country" class="input input-bordered input-error w-full mx-auto mb-5" />

      </div>
      <button className='btn w-full btn-outline text-blue-600 font-bold font-mono'>Add Infinix Data in Database</button>
       
        </form>
       </div>
     </div>
      </div>
    );
};

export default Infinixxx;