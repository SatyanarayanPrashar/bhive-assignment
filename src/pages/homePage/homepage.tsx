import React from 'react';
import { Navbar } from '../../components/navbar';
import { cn } from "../../lib/utils";
import { useMediaQuery } from "usehooks-ts";
import { HeroSection } from './_components/heroSection';

import c1 from '../../assets/c1.png';
import c2 from '../../assets/c2.png';
import c3 from '../../assets/c3.png';
import c4 from '../../assets/c4.png';
import c5 from '../../assets/c5.png';
import c6 from '../../assets/c6.png';
import c7 from '../../assets/c7.png';
import c8 from '../../assets/c8.png';
import { SpaceBox } from '../../components/spacebox';

import space1 from '../../assets/space1.png';
import space2 from '../../assets/space2.png';
import space3 from '../../assets/space3.png';
import space4 from '../../assets/space4.png';
import space5 from '../../assets/space5.png';
import space6 from '../../assets/space6.png';

import appImg from '../../assets/app.png';
import appleImg from '../../assets/applebttn.png';
import googleImg from '../../assets/googleBttn.png';

const spaces = [
    { name: 'HSR Sector 6, Service Road', image: space1, tag: 'Workspace' },
    { name: 'Indiranagar, 100 Feet Road', image: space2, tag: 'Workspace' },
    { name: 'Koramangala, 5th Block', image: space3, tag: 'Workspace' },
    { name: 'MG Road, Brigade Road', image: space4, tag: 'Workspace' },
    { name: 'Whitefield, ITPL', image: space5, tag: 'Workspace' },
    { name: 'Electronic City, Phase 1', image: space6, tag: 'Workspace' },
  ];

const HomePage: React.FC = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex flex-col mt-[4rem] h-screen relative text-p_text">
        <Navbar />
        <HeroSection />
        

        <div className="px-[120px]">
            <h2 >Why Choose us?</h2>
            <div className='flex  mt-20'>
                <div className='flex flex-1 gap-5 justify-start items-center px-10 py-5 border-r-[1px] border-b-[1px]'>
                    <img src={c1} alt="" />
                    <h5 className=''>Community Events</h5>
                </div>
                <div className='flex flex-1 gap-5 justify-start items-center px-10 py-5 border-r-[1px] border-b-[1px]'>
                    <img src={c2} alt="" />
                    <h5 className=''>Gym Facilities</h5>
                </div>
                <div className='flex flex-1 gap-5 justify-start items-center px-10 py-5 border-r-[1px] border-b-[1px]'>
                    <img src={c3} alt="" />
                    <h5 className=''>High-Speed WiFi</h5>
                </div>
                <div className='flex flex-1 gap-5 justify-start items-center px-10 py-5 border-b-[1px]'>
                    <img src={c4} alt="" />
                    <h5 className=''>Cafe & Tea Bar</h5>
                </div>
            </div>
            <div className='flex  mb-20'>
                <div className='flex flex-1 gap-5 justify-start items-center px-10 py-5 border-r-[1px]'>
                    <img src={c5} alt="" />
                    <h5 className=''>Affordable</h5>
                </div>
                <div className='flex flex-1 gap-5 justify-start items-center px-10 py-5 border-r-[1px]'>
                    <img src={c6} alt="" />
                    <h5 className=''>Comfort Lounges</h5>
                </div>
                <div className='flex flex-1 gap-5 justify-start items-center px-10 py-5 border-r-[1px]'>
                    <img src={c7} alt="" />
                    <h5 className=''>Quick Booking</h5>
                </div>
                <div className='flex flex-1 gap-5 justify-start items-center px-10 py-5'>
                    <img src={c8} alt="" />
                    <h5 className=''>Sports Area</h5>
                </div>
            </div>
        </div>


        <div className="px-[120px]">
            <h2>Our Space Overview</h2>
            <div className='flex flex-wrap justify-evenly mt-20 gap-10'>
                {spaces.map((space, index) => (
                    <SpaceBox key={index} name={space.name} image={space.image} tag={space.tag} />
                ))}
            </div>
        </div>

        <div className="mt-20 px-[120px]">
            <h2>Download our app now</h2>
            <div className='relative flex mt-20 w-full h-[18rem] border-[1px] bg-white rounded-lg shadow-[0px_1.08px_8.63px_0px_#E5E5E5]'>
                <img src={appImg} alt="" className='absolute left-5 h-[20rem] -top-[2.1rem]' />
                <div className="ml-[30rem] flex flex-col justify-center px-10">
                    <h5 className="mb-4 text-s_text">Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</h5>
                    <div className="flex gap-4">
                        <img src={googleImg} alt="Google Play" />
                        <img src={appleImg} alt="App Store" />
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-20 bg-p_text text-white flex items-center justify-center py-3">
            <h6>c Copyright 2024. Bhive Private limited</h6>
        </div>


    </div>
  );
};

export default HomePage;