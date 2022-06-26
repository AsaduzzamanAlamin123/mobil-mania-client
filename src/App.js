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
            <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
          </Route>
        
      </Routes>
      </Navbar>
 
    
    </div>
  );
}

export default App;
