import React from 'react';
import { Navbar } from '../../components/navbar';
import { cn } from "../../lib/utils";
import { useMediaQuery } from "usehooks-ts";
import { HeroSection } from './_components/heroSection';

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
import { ChooseSection } from './_components/choseSection';
import { FaArrowRightLong } from 'react-icons/fa6';

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
    const isTab = useMediaQuery('(max-width: 780px)');

    return (
        <div className="flex flex-col mt-[4rem] h-screen relative text-p_text">
            <Navbar />
            <HeroSection />
            <ChooseSection />

            <div className={cn("px-[120px]", isMobile && "px-[20px] mt-[50px]", isTab && "px-[20px] mt-[50px]")}>
                <div className='flex justify-between items-center'>
                    <h2 className={cn("", isMobile ? "text-[32px]" : "text-[32px]")}>
                        {isMobile ? "Our Spaces" : "Our Space Overview"}
                    </h2>
                    {isMobile && (
                        <FaArrowRightLong color="#FFBB00" size={22} />
                    )}
                </div>
                <div className={cn('grid gap-4 mt-10', {
                    'grid-cols-1': isMobile,
                    'grid-cols-2': !isMobile && isTab,
                    'grid-cols-3': !isMobile && !isTab
                })}>
                    {spaces.map((space, index) => (
                        <SpaceBox key={index} name={space.name} image={space.image} tag={space.tag} />
                    ))}
                </div>
            </div>

            <div className={cn("px-[120px]", isMobile && "px-[20px] mt-[50px]")}>
                <div className='flex justify-between items-center'>
                    <h2 className={cn("", isMobile ? "text-[32px]" : "text-[32px]")}>
                        Download our app now
                    </h2>
                    {isMobile && (
                        <FaArrowRightLong color="#FFBB00" size={22} />
                    )}
                </div>
                <div className={cn('relative flex mt-20 w-full min-h-[18rem] border-[1px] bg-white rounded-lg shadow-[0px_1.08px_8.63px_0px_#E5E5E5]', isMobile && 'flex-col items-center justify-center h-[32rem] px-5')}>
                    <img src={appImg} alt="" className={cn('absolute left-5 h-[20rem] -top-[2.1rem]', isMobile && 'static h-auto w-full')} />
                    <div className={cn("ml-[20rem] flex flex-col justify-center px-10", isMobile && "ml-0 mt-4 items-center")}>
                        {!isMobile && (
                            <h5 className={cn("mb-4 text-s_text", isMobile && "text-center")}>
                                Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
                            </h5>
                        )}
                        <div className={cn("flex gap-4", isMobile && "justify-center")}>
                            <img src={googleImg} alt="Google Play" className={cn(isMobile && "flex-1")} />
                            <img src={appleImg} alt="App Store" className={cn(isMobile && "flex-1")} />
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