'use client'
import ToggleTheme from "../../ui/buttons/toggleThemeBtn";
import { Key, ReactNode, useState } from "react";
import { ResponsiveText } from "../../ui/text/responsiveText";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { ThemeProvider, useTheme } from "@/context/themeContext";

const menuData = [
    {
        title: 'Sobre mim',
        link: '/sobre',
    },
    {
        title: 'Projetos',
        link: '/projetos',
    },
    {
        title: 'Contatos',
        link: '/contatos',
    }
]

export default function Header() {
    return (
        <ThemeProvider>
            <HeaderLayout>
                <div className="flex p-1 gap-5 justify-evenly">
                    <NavButtons />
                </div>
                <div className="self-center">
                    <ToggleTheme />
                </div>
            </HeaderLayout>
        </ThemeProvider>
    )

}

// ------------------- COMPONENTS ------------------ //

const HeaderLayout = ({ children }: { children: ReactNode }) => {
    return (
        <header className="
        absolute
        w-full
        justify-between
        "
        ><div
        className="
        my-2 mx-2
        border rounded-xl
        border-border-subcont
        flex
        sm:text-[0.5rem] md:text-[1rem] lg:text-md
        h-10 
        justify-end
        backdrop-blur-md
        "
        >
            {children}
        </div>
        </header>
    )
}

const NavButtons = () => {
    const pathname = usePathname();
    const { theme } = useTheme();
    const [icon] = useState<ReactNode>((theme === 'light' ? <FaHome className="self-center text-text group-hover:text-text-secondary uppercase" /> : <FaHome className="self-center text-text group-hover:text-text-secondary uppercase" />))

    return (
        <nav className="flex justify-start">
            <div className=" flex justify-evenly">
                {pathname != '/' &&
                    <HomeButtonBox href={'/'}>
                        {icon}
                    </HomeButtonBox>
                    }
                {menuData.map((item) => (
                    <ButtonLayout key={item.title} href={item.link}>
                        <ResponsiveText textSize="tiny" className={`self-center group-hover:text-text-secondary uppercase px-3 ${pathname === item.link ? 'border-b border-border-subcont text-text-secondary' : ''}`}>
                            {item.title}
                        </ResponsiveText>
                    </ButtonLayout>
                ))}
            </div>
        </nav>
    )
}

const ButtonLayout = ({ children, href }: { children: ReactNode, href: string }) => {
    return (
        <Link
            href={href}
            className="
                px-5
                self-center
                group
                ">
            {children}
        </Link>
    )
}

const HomeButtonBox = ({ children, href }: { children: ReactNode, href: string }) => {
    return (
        <Link  href={href} className="
            h-8 w-8
            flex flex-col
            justify-center items-center self-center
            hover:scale-105
            active:scale-100
            group 
            subContainer
            border
            rounded-full
            cursor-pointer
            ">
            {children}
        </Link>
    )
}