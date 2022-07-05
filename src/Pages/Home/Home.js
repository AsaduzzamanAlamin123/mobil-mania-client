import React from 'react';

import Cardh from '../../componants/Cardh/Cardh';

import Landing from '../../componants/Landing';
import PageTitle from '../../componants/Shared/PageTitle/PageTitle';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
             
             
           <Landing></Landing>
           <Cardh></Cardh>
          
           <Footer></Footer>
        </div>
    );
};

export default Home;