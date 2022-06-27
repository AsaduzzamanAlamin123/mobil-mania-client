import React from 'react';
import Cardh from '../../componants/Cardh/Cardh';

import Landing from '../../componants/Landing';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
           <Landing></Landing>
           <Cardh></Cardh>
          
           <Footer></Footer>
        </div>
    );
};

export default Home;