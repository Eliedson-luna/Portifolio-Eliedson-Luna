'use client'
import ToggleTheme from "../../ui/buttons/toggleThemeBtn";
import { Key, ReactNode } from "react";
import { ResponsiveText } from "../../ui/text/responsiveText";
import Link from "next/link";
import { usePathname } from "next/navigation";


const menuData = [
    {
        title: 'Sobre mim',
        description: 'Saiba um pouco sobre mim',
        link: '/sobre',
    },
    {
        title: 'Projetos',
        description: 'Confira minha lista de projetos',
        link: '/projetos',
    },
    {
        title: 'Contatos',
        description: 'Entre em contato comigo.',
        link: '/contatos',
    }
]



export default function Header() {
    return (
        <HeaderLayout>
            <div className="flex p-1 gap-5 justify-evenly">
                <NavButtons/>
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
        absolute
        w-full
        sm:text-[0.5rem] md:text-[1rem] lg:text-md
        h-15 
        justify-between
        backdrop-blur-md
        "
        >
            {children}
        </header>
 )
}


const NavButtons = () => {
    const pathname = usePathname();

    return (
        <nav className="flex justify-start">
            <div className=" flex justify-evenly">
                {pathname != '/' && 
                <ButtonLayout href={'/'}>
                        <ResponsiveText textSize="tiny" className="self-center group-hover:text-text-secondary uppercase">
                            Home
                        </ResponsiveText>
                    </ButtonLayout>}
                {menuData.map((item) => (
                    <ButtonLayout key={item.title} href={item.link}>
                        <ResponsiveText textSize="tiny" className={`self-center group-hover:text-text-secondary uppercase px-3 ${pathname === item.link ? 'border-b border-border-subcont text-text-secondary': ''}`}>
                            {item.title}
                        </ResponsiveText>
                    </ButtonLayout>
                ))}
            </div>

        </nav>
    )
}


const ButtonLayout = ({ children, key, href }: { children: ReactNode, key?: Key, href: string }) => {
    return (
        <Link
            href={href}
            className="                
                rounded-md
                px-5 py-3
                group
                "
            key={key}>
            {children}
        </Link>
    )
}
