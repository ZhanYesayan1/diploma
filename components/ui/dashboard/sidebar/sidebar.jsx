'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
} from "react-icons/md"
import MenuLink from "./menuLink/menuLink";

const menuItems = [
    {
        title: "Pages",
        list: [
            {
            title:"Dashboard",
            path: "/dashboard",
            icon:<MdDashboard/>
            } ,
            {
            title:"Users",
            path: "/dashboard/users",
            icon:<MdSupervisedUserCircle/>
            } ,
            {
                title:"Products",
                path: "/dashboard/products",
                icon:<MdShoppingBag/>
            } ,
            {
                title:"Transactions",
                path: "/dashboard/transactions",
                icon:<MdAttachMoney/>
            } ,
        ],
    },
    {
        title:"Analytics",
        list:[
            {
                title:"Revenue",
                path: "/dashboard/marketing-revenue",
                icon:<MdWork/>
            },
            {
                title:"Report",
                path: "/dashboard/marketing-report",
                icon:<MdAnalytics/>
            },
        ]
    },
    {
        title:"User",
        list:[
            {
                title:"Settings",
                path: "/dashboard/settings",
                icon:<MdOutlineSettings/>
            },
            {
                title:"Help",
                path: "/dashboard/help",
                icon:<MdHelpCenter/>
            },
        ]
    },
];


const Sidebar =() =>{
    const router = useRouter(); 

    const handleLogout = () => {
      router.push('/login');
    };
    return(
        <div  className="sticky top-10">
            <div className="flex items-center gap-5 mb-5">
                <Image className="w-10 h-10 rounded-full object-cover" src="/user.png" alt="" width="50" height="50"/>
                <div className="flex flex-col">
                    <span className="font-medium">Zhanna Yesayan</span>
                    <span className="text-sm text-gray-400">Administrator</span>
                </div>
            </div>
            <ul className="list-none"> 
            {menuItems.map(cat=>(
                <li key={cat.title}>
                    <span className="font-semibold text-sm text-gray-400 mb-2">{cat.title} </span>
                    {cat.list.map(item=>(
                        <MenuLink item={item} key={item.title}/>
                    ))}
                    </li>
            ))}
            </ul>
            <button onClick={handleLogout} className="p-5 flex items-center gap-2.5 mb-2 cursor-pointer rounded-lg w-full bg-transparent text-white hover:bg-[#64677c]" >
                <MdLogout/>
                LogOut</button>
         </div>
    )
}
export default Sidebar