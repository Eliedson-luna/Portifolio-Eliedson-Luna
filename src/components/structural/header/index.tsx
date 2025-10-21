import Link from "next/link";
import ToggleTheme from "./toggleTheme";
import { Title } from "@/components/texts";
import { ReactNode } from "react";

export default function Header() {
    return (
        <HeaderLayout>
            <div className="flex p-1 gap-5 justify-evenly">
                <div className="flex gap-5">
                    <Link href={'/'} className="self-center hover:scale-105">
                        <Title type="title" className="self-center ml-3 ">Eliedson Luna</Title>
                    </Link>
                    <Title type="subTitle" className="
                        h-7
                        place-content-center
                        self-center   
                        pl-5
                        border-l-1
                        "
                    >
                        Desenvolvedor junior
                    </Title>
                </div>
            </div>
            <ToggleTheme />
        </HeaderLayout>
    )

}


// ------------------- COMPONENTS ------------------ //

const HeaderLayout = ({ children }: { children: ReactNode }) => {
    return (
        <header className="
        flex
        fixed
        w-full
        sm:text-[0.5rem] md:text-[1rem] lg:text-md
        h-15 sm:h-7 md:h-12 lg:h-15  
        justify-between 
        text-text
        "
        >
            {children}
        </header>
    )
}