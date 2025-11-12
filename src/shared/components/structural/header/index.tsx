import Link from "next/link";
import ToggleTheme from "../../ui/buttons/toggleThemeBtn";
import { ReactNode } from "react";
import { SubTitle, Title } from "../../ui/text/title";

export default function Header() {
    return (
        <HeaderLayout>
            <div className="flex p-1 gap-5 justify-evenly">
                
            </div>
            <div className="mt-5">
                <ToggleTheme />
            </div>
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

        "
        >
            {children}
        </header>
    )
}