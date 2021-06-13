import React,{useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import { homeObjTwo } from '../components/InfoSection copy/Data';
import { homeObjThree } from '../components/InfoSection copy 2/Data';
import InfoSectioncopy from '../components/InfoSection copy';
import InfoSectioncopy2 from '../components/InfoSection copy 2';
const Home = () => {
    const[isOpen,setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSectioncopy {...homeObjTwo}/>
            <InfoSectioncopy2 {...homeObjThree}/>
        </>
    )
}

export default Home
