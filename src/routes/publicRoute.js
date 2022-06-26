import About from "../Pages/About/About";
import Catagory from "../Pages/Catagory/Catagory";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";


export const publicRoute = [ 
    { path : '/', name :"Home" , Componant : Home },
    
    {path : '/login', name:"Login" ,Componant: Login}
]