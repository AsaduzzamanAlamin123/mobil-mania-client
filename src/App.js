
import './App.css';
import Navbar from './componants/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { publicRoute } from './routes/publicRoute';
import { Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';



function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      
      <Navbar>
      <Routes>
        {
          publicRoute.map((route , index) => <Route path={route.path} key={index} element={<route.Componant></route.Componant>}></Route>)
        }
      </Routes>
      </Navbar>
 
    
    </div>
  );
}

export default App;
