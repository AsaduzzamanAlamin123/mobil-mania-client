import About from "../Pages/About/About";
import Catagory from "../Pages/Catagory/Catagory";
import Home from "../Pages/Home/Home";


export const publicRoute = [ 
    { path : '/', name :"Home" , Componant : Home },
    { path : '/catagory', name:"Catagory" , Componant : Catagory },
    { path : '/about' , name:"About" , Componant: About }
]