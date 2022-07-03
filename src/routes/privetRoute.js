import Test from "../componants/Test/Test";
import About from "../Pages/About/About";
import Catagory from "../Pages/Catagory/Catagory";
import Infinix from "../Pages/Catagory/Infinix/Infinix";
import InfinixDet from "../Pages/Catagory/Infinix/InfinixDet";
import Iphone from "../Pages/Catagory/Iphone/Iphone";
import IphoneDetailes from "../Pages/Catagory/Iphone/IphoneDetailes";
import Itel from "../Pages/Catagory/Itel/Itel";
import ItelDet from "../Pages/Catagory/Itel/ItelDet";
import OnePlus from "../Pages/Catagory/OnePlus/OnePlus";
import OnePlusDet from "../Pages/Catagory/OnePlus/OnePlusDet";
import Oppo from "../Pages/Catagory/Oppo/Oppo";
import OppoShowDetailes from "../Pages/Catagory/Oppo/OppoShowDetailes";
import Realme from "../Pages/Catagory/Realme/Realme";
import RealmeDet from "../Pages/Catagory/Realme/RealmeDet";
import Samsung from "../Pages/Catagory/Samsung/Samsung";
import SamsungDet from "../Pages/Catagory/Samsung/SamsungDet";
import Symphony from "../Pages/Catagory/Symphony/Symphony";
import SymphonyDet from "../Pages/Catagory/Symphony/SymphonyDet";
import Tecno from "../Pages/Catagory/Tecno/Tecno";
import TecnoDet from "../Pages/Catagory/Tecno/TecnoDet";
import Vivo from "../Pages/Catagory/Vivo/Vivo";
import VivoShowDet from "../Pages/Catagory/Vivo/VivoShowDet";
import Walton from "../Pages/Catagory/Walton/Walton";
import WaltonDet from "../Pages/Catagory/Walton/WaltonDet";
import Xiomi from "../Pages/Catagory/Xiomi/Xiomi";
import XiomiDet from "../Pages/Catagory/Xiomi/XiomiDet";




export const privetRoute = [
    { path : '/catagory', name:"Catagory" , Componant : Catagory },
    { path : '/about' , name:"About" , Componant: About },
    { path : '/iphone' , name:"Iphone" , Componant: Iphone },
    { path : '/iphone/:iphoneId' , name:"Samsung" , Componant: IphoneDetailes },
    { path : '/test' , name:"test" , Componant: Test },
    { path : '/samsung' , name:"Samsung" , Componant: Samsung },
    { path : '/samsung/:samsungId' , name:"SamsungDet" , Componant: SamsungDet },
    { path : '/xiomi' , name:"Xiomi" , Componant: Xiomi },
    { path : '/xiomi/:xiomiId' , name:"Samsung" , Componant: XiomiDet },
    { path : '/oppo' , name:"Oppo" , Componant: Oppo },
    { path : '/oppo/:oppoId' , name:"SamsungDet" , Componant: OppoShowDetailes },
    { path : '/vivo' , name:"Vivo" , Componant: Vivo },
    { path : '/vivo/:vivoId' , name:"SamsungDet" , Componant: VivoShowDet },
    { path : '/realme' , name:"Realme" , Componant: Realme },
    { path : '/realme/:realmeId' , name:"RealmeDet" , Componant: RealmeDet },
    { path : '/walton' , name:"Walton" , Componant: Walton},
    { path : '/walton/:waltonId' , name:"WaltonDet" , Componant: WaltonDet },
    { path : '/symphony' , name:"Symphony" , Componant: Symphony},
    { path : '/symphony/:symphonyId' , name:"SymphonyDet" , Componant: SymphonyDet},
    { path : '/tecno' , name:"Tecno" , Componant: Tecno},
    { path : '/tecno/:tecnoId' , name:"TecnoDet" , Componant: TecnoDet},
    { path : '/oneplus' , name:"OnePlus" , Componant: OnePlus},
    { path : '/oneplus/:oneplusId' , name:"OnePlusDet" , Componant: OnePlusDet},
    { path : '/itel' , name:"Itel" , Componant: Itel},
    { path : '/itel/:itelId' , name:"ItelDet" , Componant: ItelDet},
    { path : '/infinix' , name:"Infinix" , Componant: Infinix},
    { path : '/infinix/:infinixId' , name:"InfinixDet" , Componant: InfinixDet},
    
]

// to={`/iphone/${_id}`}