import Test from "../componants/Test/Test";
import About from "../Pages/About/About";
import Catagory from "../Pages/Catagory/Catagory";
import Iphone from "../Pages/Catagory/Iphone/Iphone";
import IphoneDetailes from "../Pages/Catagory/Iphone/IphoneDetailes";

import Oppo from "../Pages/Catagory/Oppo/Oppo";
import OppoShowDetailes from "../Pages/Catagory/Oppo/OppoShowDetailes";
import Samsung from "../Pages/Catagory/Samsung/Samsung";
import SamsungDet from "../Pages/Catagory/Samsung/SamsungDet";
import Xiomi from "../Pages/Catagory/Xiomi/Xiomi";

import XiomiDet from "../Pages/Catagory/Xiomi/XiomiDet";




export const privetRoute = [
    { path : '/catagory', name:"Catagory" , Componant : Catagory },
    { path : '/about' , name:"About" , Componant: About },
    { path : '/iphone' , name:"Iphone" , Componant: Iphone },
    { path : '/test' , name:"test" , Componant: Test },
    { path : '/samsung' , name:"Samsung" , Componant: Samsung },
    { path : '/xiomi' , name:"Xiomi" , Componant: Xiomi },
    { path : '/iphone/:iphoneId' , name:"Samsung" , Componant: IphoneDetailes },
    { path : '/xiomi/:xiomiId' , name:"Samsung" , Componant: XiomiDet },
    { path : '/samsung/:samsungId' , name:"SamsungDet" , Componant: SamsungDet },
    { path : '/oppo/:oppoId' , name:"SamsungDet" , Componant: OppoShowDetailes },
    { path : 'oppo' , name:"Oppo" , Componant: Oppo },
]

// to={`/iphone/${_id}`}