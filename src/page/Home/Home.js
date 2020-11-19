import React from 'react';
import Achievement from '../../components/Achievement/Achievement';
import Navbar from '../../components/Navbar/Navbar';
import RunningProject from '../../components/RunningProject/RunningProject';

const Home = () => {
    return (
        <>
            <Navbar />
            <RunningProject />
            <Achievement />
        </>
    );
};

export default Home;