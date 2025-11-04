import Link from "next/link";
import ToggleTheme from "../../ui/buttons/toggleThemeBtn";
import { ReactNode } from "react";
import { SubTitle, Title } from "@/components/ui/text/title";

export default function Header() {
    return (
        <HeaderLayout>
            <div className="flex p-1 gap-5 justify-evenly">
                <div className="flex gap-5">
                    <Link href={'/'} className="self-center hover:scale-105">
                        <Title className="self-center ml-3 ">Eliedson Luna</Title>
                    </Link>
                    <SubTitle className="
                        h-7
                        place-content-center
                        self-center   
                        pl-5
                        border-l-1
                        "
                    >
                        Desenvolvedor junior
                    </SubTitle>
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
        backdrop-blur-xs
        "
        >
            {children}
        </header>
    )
}