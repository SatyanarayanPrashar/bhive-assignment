import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { cn } from '../lib/utils';
import assistant_direction from '../assets/assistant_direction.png';
import arrow3 from '../assets/arrow3.png';
import { Workspace } from '../lib/datatypes';

export const SpaceBox: React.FC<{ space: Workspace }> = ({ space }) => {
    const isDesktop = useMediaQuery('(max-width: 781px)');
    const isTab = useMediaQuery('(min-width: 550px)');
    const isMobile = useMediaQuery('(max-width: 580px)');

    return (
        <div className={cn(
            "flex flex-col gap-4 py-2 px-3 border-[1px] rounded-lg shadow-[0px_1.08px_8.63px_0px_#E5E5E5]",
            isDesktop && "min-w-[30%]",
            isTab && "min-w-[48%]",
            isMobile && "min-w-full",
        )}>
            <a href={space.google_maps_url}>
                <div className="flex justify-between items-center">
                    <h3 className="w-[70%]">{space.name}</h3>
                    <div className="px-3 py-2 flex flex-col gap-2 justify-center items-center bg-[#EEE7E7] border-[1px] border-s_bttn_stroke_light_grey rounded-lg">
                        <img src={assistant_direction} alt="" className="h-[1.5rem] w-[1.5rem]" />
                        <p className="text-[12px]">6 kms</p>
                    </div>
                </div>
            </a>

            <div className="relative">
                <img src={`https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/${space.images[0]}`} alt="" className="w-full object-cover rounded-md h-[14rem]" />
            </div>

            <div className="flex gap-4 relative">
                <div className="flex-1 px-3 py-4 flex gap-2 justify-between items-center bg-[#EEE7E7] border-[1px] border-s_bttn_stroke_light_grey rounded-lg">
                    <div className="text-p_text">
                        <h6 className={cn("mb-1", isMobile && "text-[14px]")}>Day pass</h6>
                        <h5>₹{space.day_pass_price} <span className="text-[16px]">/ day</span></h5>
                    </div>
                    <img src={arrow3} alt="" />
                </div>
                <div className="flex-1 px-3 py-4 flex gap-2 justify-between items-center bg-p_bttn_stroke_dark_yellow border-[1px] rounded-lg relative">
                    <div className="text-p_text">
                        <h6 className={cn("mb-1", isMobile && "text-[14px]")}>Bulk pass</h6>
                        <h5>₹2400<span className="text-[16px]">/10 Days</span></h5> {/* Adjust this to show actual bulk price */}
                    </div>
                    <img src={arrow3} alt="" />
                    <div className="absolute top-[-10px] right-[42px] rounded-md text-[12px] bg-p_text text-white py-1 px-3">
                        {space.day_pass_discounts_percentage['10'].value}% Discount
                    </div>
                </div>
            </div>
        </div>
    );
};