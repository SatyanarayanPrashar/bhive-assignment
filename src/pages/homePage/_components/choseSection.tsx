import React from 'react';
import { cn } from "../../../lib/utils";
import { useMediaQuery } from "usehooks-ts";
import { FaArrowRightLong } from "react-icons/fa6";

import c1 from '../../../assets/c1.png';
import c2 from '../../../assets/c2.png';
import c3 from '../../../assets/c3.png';
import c4 from '../../../assets/c4.png';
import c5 from '../../../assets/c5.png';
import c6 from '../../../assets/c6.png';
import c7 from '../../../assets/c7.png';
import c8 from '../../../assets/c8.png';

const tiles = [
    { image: c1, title: 'Community Events' },
    { image: c2, title: 'Gym Facilities' },
    { image: c3, title: 'Highspeed Wifi' },
    { image: c4, title: 'Cafe & Tea Bar' },
    { image: c5, title: 'Affordable' },
    { image: c6, title: 'Comfort Lounges' },
    { image: c7, title: 'Quick Booking' },
    { image: c8, title: 'Sports Area' },
];

const Tile = ({ image, title } : { image: string, title: string }) => (
    <div className='flex flex-col flex-1 gap-5 justify-center items-center px-1 py-5 border-[1px] rounded-md bg-white shadow-[0px_1.08px_8.63px_0px_#E5E5E5]'>
        <img src={image} alt={title} />
        <h5 className='text-[16px]'>{title}</h5>
    </div>
);

export const ChooseSection = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className={cn("px-[120px] mt-[10rem]", isMobile && "px-[20px] mt-[50px]")}>
            <div className='flex justify-between items-center'>
                <h2 className={cn("", isMobile && "text-[32px]")}>Why Choose us?</h2>
                {isMobile && (
                    <FaArrowRightLong color="#FFBB00" size={22} />
                )}
            </div>

            {!isMobile && (
                <>
                    <div className='flex flex-wrap mt-20'>
                        {tiles.slice(0, 4).map((tile, index) => (
                            <div key={index} className={`flex flex-1 gap-5 justify-start items-center px-10 py-5 ${index < 3 ? 'border-r-[1px]' : ''} border-b-[1px]`}>
                                <img src={tile.image} alt={tile.title} />
                                <h5>{tile.title}</h5>
                            </div>
                        ))}
                    </div>
                    <div className='flex mb-20'>
                        {tiles.slice(4).map((tile, index) => (
                            <div key={index} className={`flex flex-1 gap-5 justify-start items-center px-10 py-5 ${index < 3 ? 'border-r-[1px]' : ''}`}>
                                <img src={tile.image} alt={tile.title} />
                                <h5>{tile.title}</h5>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {isMobile && (
                <div className='flex flex-wrap gap-x-3 gap-y-2 text-center mt-7'>
                    {tiles.map((tile, index) => (
                        <React.Fragment key={index}>
                            {index % 2 === 0 && index !== 0 && <div className='w-full' />}
                            <Tile image={tile.image} title={tile.title} />
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ChooseSection;
