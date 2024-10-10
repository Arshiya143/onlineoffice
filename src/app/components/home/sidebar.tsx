"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Sidebar(props:any){
    const pathname = usePathname()

    return(
        <>
        <nav className="w-20 ">
            <div>
                <ul>
                {props.sidebar.map((item:any, index:any) => (   
                    <li key={index}>
                        <Link href={item.url} className={`link flex justify-center items-center flex-col p-4 gap-1 ${pathname === item.url ? 'active' : ''}`} >
                            <i className={`${item.icon} ri-xl ${pathname === item.url ? 'bg-black text-white py-4 px-3 rounded-lg' : ''}`}></i>                       
                            <p className="text-xs">{item.name}</p>
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
        </nav>
        </>
    );
};