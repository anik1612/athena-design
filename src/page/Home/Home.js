import React from 'react';
import Achievement from '../../components/Achievement/Achievement';
import Contact from '../../components/Contact/Contact';
<<<<<<< HEAD
import Footer from '../../components/Footer/Footer';
=======
import HomeBanner from '../../components/HomeBanner/HomeBanner';
>>>>>>> master
import Navbar from '../../components/Navbar/Navbar';
import RunningProject from '../../components/RunningProject/RunningProject';
import Team from '../../components/Teams/Team';
import WhatToDo from '../../components/WhatToDo/WhatToDo';

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeBanner />
            <WhatToDo />
            <RunningProject />
            <Achievement />
            <Team/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;