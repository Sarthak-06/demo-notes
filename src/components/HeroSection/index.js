import React from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer,HeroBg,VideoBg} from './HeroElements';

const HeroSection  = () => {
    return (
        <HeroContainer id ="home">
            <HeroBg>
                <video className='videoTag' autoPlay loop muted>
    <source src={Video} type='video/mp4' />
</video>
                <VideoBg  autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection 
