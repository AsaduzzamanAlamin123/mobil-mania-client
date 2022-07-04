import About from "../Pages/About/About";
import Catagory from "../Pages/Catagory/Catagory";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";


export const publicRoute = [ 
    { path : '/', name :"Home" , Componant : Home },
    
    {path : '/login', name:"Login" ,Componant: Login},
    {path : '/signup', name:"Login" ,Componant: SignUp},
]