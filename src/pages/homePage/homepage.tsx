import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/navbar';
import { cn } from "../../lib/utils";
import { useMediaQuery } from "usehooks-ts";
import { HeroSection } from './_components/heroSection';

import { SpaceBox } from '../../components/spacebox';

import appImg from '../../assets/app.png';
import appleImg from '../../assets/applebttn.png';
import googleImg from '../../assets/googleBttn.png';
import { ChooseSection } from './_components/choseSection';
import { FaArrowRightLong } from 'react-icons/fa6';

import { RootState } from "../../store/store";
import { useDispatch, useSelector } from 'react-redux';

import { SpaceDetailModel } from '../../components/spaceDetailModel';
import { pageOpened } from '../../store/pageSlice';

const HomePage: React.FC = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isTab = useMediaQuery('(max-width: 780px)');
    const [data, setData] = useState([]);

    const pageState = useSelector((state: RootState) => state.openpage.value);
    const spaceState = useSelector((state: RootState) => state.space.value);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col mt-[4rem] h-screen relative text-p_text">
            <Navbar />
            <HeroSection />
            <ChooseSection />

            <div className={cn("px-[120px] mt-[1rem]", isMobile && "px-[20px] mt-[50px]", isTab && "px-[20px] mt-[50px]")}>
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
                    {data.map((sp, index) => (
                        <SpaceBox key={index} space={sp} />
                    ))}
                </div>
            </div>

            <div className={cn("px-[120px] mt-[7rem]", isMobile && "px-[20px] mt-[50px]")}>
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
                <h6>© 2024 Bhive Private limited</h6>
            </div>

            {pageState && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto cursor-default"
                    role="button"
                    onClick={(e) => {
                        // Check if the click happened on the container itself, not on the SpaceDetailModel
                        if (e.target === e.currentTarget) {
                            dispatch(pageOpened(!pageState));
                        }
                    }}
                >
                    <SpaceDetailModel />
                </div>
            )}


        </div>
    );
};

export default HomePage;