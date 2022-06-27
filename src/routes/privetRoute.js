import About from "../Pages/About/About";
import Catagory from "../Pages/Catagory/Catagory";
import Iphone from "../Pages/Catagory/Iphone/Iphone";
import IphoneDetailes from "../Pages/Catagory/Iphone/IphoneDetailes";

import Samsung from "../Pages/Catagory/Samsung";

export const privetRoute = [
    { path : '/catagory', name:"Catagory" , Componant : Catagory },
    { path : '/about' , name:"About" , Componant: About },
    { path : '/iphone' , name:"Iphone" , Componant: Iphone },
    { path : '/samsung' , name:"Samsung" , Componant: Samsung },
    { path : '/iphone/:iphoneId' , name:"Samsung" , Componant: IphoneDetailes },
]

// to={`/iphone/${_id}`}