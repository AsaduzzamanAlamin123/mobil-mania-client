import About from "../Pages/About/About";
import Catagory from "../Pages/Catagory/Catagory";
import Iphone from "../Pages/Catagory/Iphone/Iphone";
import IphoneDetailes from "../Pages/Catagory/Iphone/IphoneDetailes";

import Oppo from "../Pages/Catagory/Oppo/Oppo";
import Samsung from "../Pages/Catagory/Samsung/Samsung";
import SamsungDetailes from "../Pages/Catagory/Samsung/SamsungDetailes";



export const privetRoute = [
    { path : '/catagory', name:"Catagory" , Componant : Catagory },
    { path : '/about' , name:"About" , Componant: About },
    { path : '/iphone' , name:"Iphone" , Componant: Iphone },
    { path : '/samsung' , name:"Samsung" , Componant: Samsung },
    { path : '/iphone/:iphoneId' , name:"Samsung" , Componant: IphoneDetailes },
    { path : '/samsung/:samsungId' , name:"IphoneShow" , Componant: SamsungDetailes },
    { path : 'oppo' , name:"Oppo" , Componant: Oppo },
]

// to={`/iphone/${_id}`}