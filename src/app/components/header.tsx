import { Input } from "@/components/ui/input"
import Image from "next/image"
export default function Header(){
    return(
        <>
        <header className="flex items-center justify-between px-8 h-20">
            <div className="flex items-center">
                <span className="text-xl font-semibold">Logo</span>
            </div>
            <div className="flex-1 max-w-xl px-4">
                <div className="relative">
                < i className="ri-search-line absolute left-2 top-1.5 h-4 w-4 text-muted-foreground"></i>
                <Input type="search" placeholder="Search for slides, themes and designs..." className="pl-8 bg-lightwhite" />
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex flex-col">
                <span className="mr-2 text-sm font-semibold">Hello JohnDoe!</span>
                <span className="mr-2 text-sm font-medium">Welcome to Office Suit</span>
                </div>
                <Image
                src="/profile.png"
                alt="User avatar"
                width={32}
                height={32}
                className="rounded-full"
                />
            </div>
        </header>
        </>
    )
}