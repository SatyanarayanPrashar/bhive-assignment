import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

import assistant_direction from '../assets/assistant_direction.png';
import arrow3 from '../assets/arrow3.png';

interface SpaceBoxProps {
    name: string;
    image: string;
    tag: string;
}

export const SpaceBox: React.FC<SpaceBoxProps> = ({ name, image, tag }) => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className="w-[31%] flex flex-col gap-4 py-2 px-3 border-[1px] rounded-lg shadow-[0px_1.08px_8.63px_0px_#E5E5E5]">
            <div className="flex justify-between items-center">
                <h3 className="w-[70%]">{name}</h3>
                <div className="px-3 py-2 flex flex-col gap-2 justify-center items-center bg-[#EEE7E7] border-[1px] border-s_bttn_stroke_light_grey rounded-lg">
                    <img src={assistant_direction} alt="" className="h-[1.5rem] w-[1.5rem]" />
                    <p className="text-[12px]">6 kms</p>
                </div>
            </div>
            <div className="relative h-[70%]">
                <img src={image} alt="" className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 rounded-md text-[12px] bg-p_text text-p_bttn_stroke_dark_yellow py-1 px-3">
                    {tag}
                </div>
                {/* <img src={workspace_tag} alt="Workspace" className="absolute top-2 left-2 h-[2rem]" /> */}
            </div>
            <div className="flex gap-4 relative">
                <div className="flex-1 px-3 py-4 flex gap-2 justify-between items-center bg-[#EEE7E7] border-[1px] border-s_bttn_stroke_light_grey rounded-lg">
                    <div className="text-p_text">
                        <h6 className="mb-1">Day pass</h6>
                        <h5>₹ 249<span className="text-[16px]">/ day</span></h5>
                    </div>
                    <img src={arrow3} alt="" />
                </div>
                <div className="flex-1 px-3 py-4 flex gap-2 justify-between items-center bg-p_bttn_stroke_dark_yellow border-[1px] rounded-lg relative">
                    <div className="text-p_text">
                        <h6 className="mb-1">Bulk pass</h6>
                        <h5>₹2400<span className="text-[16px]">/10 Days</span></h5>
                    </div>
                    <img src={arrow3} alt="" />
                    <div className="absolute top-[-10px] right-[34px] rounded-md text-[12px] bg-p_text text-white py-1 px-3">
                        20% Discount
                    </div>
                </div>
            </div>
        </div>
    );
};
