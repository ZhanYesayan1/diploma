import Sidebar from "@/components/ui/dashboard/sidebar/sidebar";
import Navbar from "@/components/ui/dashboard/navbar/navbar";
const Layout =({children}) =>{
    return(
        <div className="flex">
            <div className="flex-1 bg-bgSoft p-5 h-screen ">
                <Sidebar/>
            </div>
            <div className="flex-[4] p-5">
                <Navbar/>
                {children}
            </div>  
        </div>
    )
}
export default Layout