import React from 'react';
import Achievement from '../../components/Achievement/Achievement';
import Navbar from '../../components/Navbar/Navbar';
import RunningProject from '../../components/RunningProject/RunningProject';
import Team from '../../components/Teams/Team';

const Home = () => {
    return (
        <>
            <Navbar />
            <RunningProject />
            <Achievement />
            <Team/>
        </>
    );
};

export default Home;