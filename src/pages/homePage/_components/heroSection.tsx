import { cn } from "../../../lib/utils";
import { useMediaQuery } from "usehooks-ts";
// import bg1 from '../../../assets/bg-h-h.png';
// import bg2 from '../../../assets/bg-h-h-r.png';
import videoSrc from '../../../assets/bg-h-h-v.mp4';

export const HeroSection = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>
        {/* <div className="absolute w-full h-full flex gap-5 justify-between top-0">
            <img src={bg1} alt="" className="w-[65%] h-full object-cover"/>
            <img src={bg2} alt="" className="w-[32%] h-[70%] object-fill"/>
        </div> */}
        <div className={cn("relative flex items-center justify-between bg-transparent w-full px-[120px] py-[36px]", isMobile && "px-[20px] py-[18px]")}>
            <h1 className='w-[55%] text-p_text'>Host your meeting with world-class amenities. Starting at <span className='text-p_logo2'>₹199/-!</span></h1>
            {/* <img src={coworking} alt="" className="w-[32%] h-[70%] object-fill"/> */}
            <div className="w-[42%] h-[100%] pointer-events-none">
                <video src={videoSrc} autoPlay muted loop className="w-full h-full object-cover"></video>
            </div>
        </div>
                {/* <video src={videoSrc} autoPlay muted loop className="w-full h-full object-cover"></video> */}
        </>
    )
}