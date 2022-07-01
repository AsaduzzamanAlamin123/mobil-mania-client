import './App.css';
import Navbar from './componants/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { publicRoute } from './routes/publicRoute';
import { Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import RequireAuth from './routes/RequireAuth';
import { privetRoute } from './routes/privetRoute';
import AdminRoute from './routes/AdminRoute';
import DashBoard from './Pages/DashBoard/DashBoard';

import AddAdmin from './Pages/DashBoard/AddAdmin';
import Iphoneee from './Pages/DashBoard/AddService/Iphoneee';
import Samsunggg from './Pages/DashBoard/AddService/Samsunggg';
import Xiomiii from './Pages/DashBoard/AddService/Xiomiii';
import Nokiaaa from './Pages/DashBoard/AddService/Nokiaaa';
import Infinixxx from './Pages/DashBoard/AddService/Infinixxx';
import Waltonnn from './Pages/DashBoard/AddService/Waltonnn';
import Realmeee from './Pages/DashBoard/AddService/Realmeee';
import OnePlusss from './Pages/DashBoard/AddService/OnePlusss';
import Itelll from './Pages/DashBoard/AddService/Itellll';
import Vivooo from './Pages/DashBoard/AddService/Vivooo';
import Tecnooo from './Pages/DashBoard/AddService/Tecnooo';
import Motorolaaa from './Pages/DashBoard/AddService/Motorolaaa';
import Footer from './Pages/Home/Footer';
import Oppo from './Pages/DashBoard/AddService/Oppo';



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

        <Route element={<RequireAuth></RequireAuth>}>
          {
            privetRoute.map((proute , index) => <Route path={proute.path} element={<proute.Componant></proute.Componant>}></Route>)
            
          }
          </Route>
          <Route element={<AdminRoute></AdminRoute>}>
            <Route path='/dashboard' element={<DashBoard></DashBoard>}>
              <Route path='iphoneee' element={<Iphoneee></Iphoneee>}></Route>
              <Route path='samsunggg' element={<Samsunggg></Samsunggg>}></Route>
              <Route path='oppo' element={<Oppo></Oppo>}></Route>
              <Route path='xiomiii' element={<Xiomiii></Xiomiii>}></Route>
              <Route path='nokiaaa' element={<Nokiaaa></Nokiaaa> }></Route>
              <Route path='infinixxx' element={<Infinixxx></Infinixxx>}></Route>
              <Route path='waltonnn' element={<Waltonnn></Waltonnn>}></Route>
              <Route path='realmeee' element={<Realmeee></Realmeee>}></Route>
              <Route path='oneplusss' element={<OnePlusss></OnePlusss>}></Route>
              <Route path='itelll' element={<Itelll></Itelll>}></Route>
              <Route path='vivooo' element={<Vivooo></Vivooo>}></Route>
              <Route path='tecnooo' element={<Tecnooo></Tecnooo>}></Route>
              <Route path='motorolaaa' element={<Motorolaaa></Motorolaaa>}></Route>
              
              <Route path='add-admin' element={<AddAdmin></AddAdmin>}></Route>
            </Route>
          </Route>
        
      </Routes>
      
      </Navbar>
 
    
    </div>
  );
}

export default App;
