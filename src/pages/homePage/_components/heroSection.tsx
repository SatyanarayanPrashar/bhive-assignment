import { cn } from "../../../lib/utils";
import { useMediaQuery } from "usehooks-ts";
import bg1 from '../../../assets/bg-h-h.png';
import bg2 from '../../../assets/bg-h-h-r.png';
import coworking from '../../../assets/coworking.png';

export const HeroSection = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>
        <div className={cn("absolute w-full h-full flex gap- justify-between top-0 overflow-hidden", isMobile && "")}>
            <img src={bg1} alt="" className={cn("w-[100%] h-[70%] object-cover z-[-999]", isMobile && "hidden")}/>
            <img src={bg2} alt="" className={cn("w-[35%] h-[70%] object-cover z-[-999]", isMobile && "w-full")}/>
        </div>
        <div className={cn("relative flex items-center justify-between bg-transparent w-full px-[120px] py-[36px]", isMobile && "px-[20px] py-[18px] flex-col-reverse px-0")}>
            <h1 className={cn('w-[55%] text-p_text lg:text-[54px] md:text-[36px] sm:text-[32px]', isMobile && "mt-4 text-[20px] text-center leading-6 w-full")}>Host your meeting with world-class amenities. Starting at <span className='text-p_logo2'>₹199/-!</span></h1>
            <div className={cn("w-[35%] h-[100%] pointer-events-none mt-20", isMobile && "w-full")}>
                <img src={coworking} alt="" className="w-full h-full object-cover"/>
                {/* <video src={videoSrc} autoPlay muted loop className="w-full h-full object-cover"></video> */}
            </div>
        </div>
        </>
    )
}