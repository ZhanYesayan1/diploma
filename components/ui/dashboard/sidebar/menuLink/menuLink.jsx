"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const MenuLink = ({ item }) => {
    const pathname = usePathname();
    return (
        <Link
            href={item.path}
            className={clsx(
                "flex items-center gap-2.5 p-2.5 rounded-lg", 
                pathname === item.path && "bg-[#2e374a]" 
            )}
        >
            {item.icon}
            {item.title}
        </Link>
    );
}

export default MenuLink;