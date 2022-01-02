import React, { useState } from 'react';
import Footer from '../../components/footer';
import HeroSection from '../../components/hero';
import InfoSection from '../../components/info-section';
import { homeObjOne, homeObjThree, homeObjTwo } from '../../components/info-section/data';
import Navbar from '../../components/navbar';
import Services from '../../components/services';
import Sidebar from '../../components/sidebar';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={ isOpen } toggle={ toggle } />
            <Navbar toggle={ toggle } />
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            <Footer/>
        </>
    )
}

export default HomePage
