import React from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { cn } from '../lib/utils';

import { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { pageOpened } from "../store/pageSlice";
import { FaMapLocation } from 'react-icons/fa6';

export const SpaceDetailModel: React.FC = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    const pageState = useSelector((state: RootState) => state.openpage.value);
    const spaceState = useSelector((state: RootState) => state.space.value);
    const dispatch = useDispatch();

    return (
        <div className="bg-white  rounded-lg shadow-lg h-[80%] w-[70%] z-[999999] overflow-y-auto">
            <div className='w-full flex items-ends justify-end font-bold mt-[-10px] bg-[#EEE7E7] p-4'>
                <div role='button'
                onClick={() => { dispatch(pageOpened(!pageState)); }}>X</div>
            </div>
            <div className={cn('flex m-5', isMobile && "flex-col-reverse")}>
                <div className='flex-1 flex flex-col gap-5'>
                    <h1 className="text-2xl font-bold">{spaceState.name}</h1>
                    <p className="mt-">{spaceState.description}</p>
                    <div className='flex flex-col gap-2'>
                        <h4>Address</h4>
                        <h6>{spaceState.address}</h6>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4>Amenities</h4>
                        <h6>
                            {spaceState.amenities.map((amenity, index) => (
                                <p key={index}>{amenity}</p>
                            ))}
                        </h6>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h4>Working hours: </h4>
                        <h6>{spaceState.working_hours_start} to</h6>
                        <h6>{spaceState.working_hours_end}</h6>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h4>Contact Person: </h4>
                        <h6>{spaceState.contact_person_name}</h6>
                    </div>
                    <div className='flex items-center gap-2 hover:text-blue-500 hover:cursor-pointer'>
                        <FaMapLocation />
                        <a href={spaceState.google_maps_url} target="_blank" rel="noopener noreferrer">Locate on Map</a>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-3'>
                    <img src={`https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/${spaceState.images[0]}`} alt="" className="w-full object-cover rounded-md" />
                    <div className="flex gap-4 relative hover:cursor-pointer">
                        <div className="flex-1 px-3 py-4 flex gap-2 justify-between items-center bg-[#EEE7E7] border-[1px] border-s_bttn_stroke_light_grey rounded-lg">
                            <div className="text-p_text">
                                <h6 className={cn("mb-1", isMobile && "text-[14px]")}>Day pass</h6>
                                <h5>₹{spaceState.day_pass_price} <span className="text-[16px]">/ day</span></h5>
                            </div>
                        </div>
                        <div className="flex-1 px-3 py-4 flex gap-2 justify-between items-center bg-p_bttn_stroke_dark_yellow border-[1px] rounded-lg relative">
                            <div className="text-p_text">
                                <h6 className={cn("mb-1", isMobile && "text-[14px]")}>Bulk pass</h6>
                                <h5>₹{spaceState.day_pass_price * 8}<span className="text-[16px]">/10 Days</span></h5>
                            </div>
                            {!isMobile && (
                                <div className="absolute top-[-10px] right-[75px] rounded-md text-[12px] bg-p_text text-white py-1 px-3">
                                    {spaceState.day_pass_discounts_percentage && (
                                        <div>
                                            {spaceState.day_pass_discounts_percentage['10'].value}% Discount
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    {spaceState.day_pass_discounts_percentage && (
                        <h5 className={cn("", isMobile && "text-[14px] mb-4")}>
                            {spaceState.day_pass_discounts_percentage['10'].message}
                        </h5>
                    )}
                </div>
            </div>
        </div>
    );
};