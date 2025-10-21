import { Title } from "@/components/texts";
import Link from "next/link";
import { Key, ReactNode } from "react";
import { FaBook, FaPortrait, FaProjectDiagram } from "react-icons/fa";

const menuData = [
    {
        title: 'Sobre mim',
        description: 'Saiba um pouco sobre mim',
        link: '/sobre',
        icon: <FaPortrait className="text-text" size={50} />
    },
    {
        title: 'Projetos',
        description: 'Confira minha lista de projetos',
        link: '/projetos',
        icon: <FaProjectDiagram className="text-text" size={50} />
    },
    {
        title: 'Contatos',
        description: 'Entre em contato.',
        link: '/contatos',
        icon: <FaBook className="text-text" size={50} />
    }
]


export default function HomePageMenu() {
    return (
        <nav className=" py-1 max-h-50 bg-contain ">
            <div className="flex justify-evenly">
                {menuData.map((item) => (
                    <ItemLayout key={item.title} href={item.link}>
                        <IconLayout>
                            {item.icon}
                        </IconLayout>
                        <TitleBox>
                            <Title type="title" className="self-center">
                                {item.title}
                            </Title>
                            <Title type="subTitle" className="self-center text-center">
                                {item.description}
                            </Title>
                        </TitleBox>
                    </ItemLayout>
                ))}
            </div>
        </nav>
    )
}

const ItemLayout = ({ children, key, href }: { children: ReactNode, key: Key, href: string }) => {
    return (
        <Link
            href={href}
            className="
                flex flex-col 
                w-70 h-40 
                pt-5 
                rounded-md
                group
                "
            key={key}>
            {children}
        </Link>
    )
}

const IconLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="
                place-self-center
                w-[4rem]
                rounded-md
                justify-center
                overflow-hidden
                group-hover:animate-bounce
            ">
            {children}
        </div>
    )
}

const TitleBox = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col group-active:scale-110">
            <div className="flex flex-col mt-3 gap-1">
                {children}
            </div>
        </div>
    )
}