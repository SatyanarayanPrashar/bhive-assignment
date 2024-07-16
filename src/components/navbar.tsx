import { cn } from "../lib/utils";
import { useMediaQuery } from "usehooks-ts";
import logo from "../assets/logo-nav.png";
import contact from "../assets/contact.png";

export const Navbar = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className={cn("z-50 fixed top-0 flex items-center justify-between bg-white w-full px-[120px] py-[36px] ", isMobile && "px-[20px] py-[18px] shadow-[0px_1.08px_8.63px_0px_#E5E5E5]")}>
            <img src={logo} alt="" className="h-[40px]"/>
            <div className="p-2 rounded-md border-[#FFBB00] border-[1px]">
                <img src={contact} alt="" className="h-[20px]"/>
            </div>
        </div>
    )
}