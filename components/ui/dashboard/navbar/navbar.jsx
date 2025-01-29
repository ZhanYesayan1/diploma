"use client"
import { usePathname } from "next/navigation"
import { MdNotifications, MdOutlineChat,MdPublic,MdSearch } from "react-icons/md"

const Navbar =() =>{
    const pathname = usePathname();
    return(
        <div className="flex justify-between items-center p-5 rounded-lg bg-bgSoft">
            <div className="text-textSoft font-bold capitalize">{pathname.split("/").pop()}</div>
            <div className="menu flex items-center gap-5">
                <div className="search flex items-center gap-2.5 bg-[#64677c] p-2.5 rounded-lg">
                    <MdSearch/>
                    <input type="text" placeholder="Search..." className="bg-transparent border-none text-text outline-none" />
                </div>
                <div className="icons flex gap-5">
                    <MdOutlineChat size={20}/>
                    <MdNotifications size={20}/>
                    <MdPublic size={20}/> 
                </div>
            </div>
        </div>
    )
}
export default Navbar