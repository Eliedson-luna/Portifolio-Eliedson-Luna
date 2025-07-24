import Image from "next/image";
import Link from "next/link";
import ToggleTheme from "./toggleTheme";
import { StyledTitle } from "@/components/texts";

export default function Header() {
    return (
        <header className="
        flex
        sm:text-[0.5rem] md:text-[1rem] lg:text-md
        h-15 sm:h-7 md:h-12 lg:h-15  
        justify-between 
        text-amber-50 mb-5 
        bg-[#1c0f4aef]"
        >
            <div className="flex p-1 gap-5 justify-evenly">
                <div className=" relative aspect-square h-full w-fit">
                    <Image
                        src="/images/header/perfil.jpg"
                        alt="img"
                        fill
                        className=" rounded-full object-cover"
                        sizes="(max-width: 768px) 32px, (max-width: 1024px) 40px, 56px"
                    />
                </div>
                <div className="flex gap-5">
                    <Link href={'/'} className="self-center hover:animate-pulse ">
                        <StyledTitle type="title" className="self-center hover:animate-pulse ">Eliedson Luna</StyledTitle>
                    </Link>
                    <StyledTitle type="subTitle" className="
                    h-7
                    place-content-center
                    self-center   
                    pl-5
                    border-l-1
                    "
                    >
                        Desenvolvedor junior
                    </StyledTitle>
                </div>
            </div>
            <ToggleTheme />
        </header>
    )

}