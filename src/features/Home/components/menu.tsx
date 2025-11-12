
import { Paragraph } from "@/shared/components/ui/text/paragraph";
import { ResponsiveText } from "@/shared/components/ui/text/responsiveText";
import { SubTitle, Title } from "@/shared/components/ui/text/title";
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
        description: 'Entre em contato comigo.',
        link: '/contatos',
        icon: <FaBook className="text-text" size={50} />
    }
]


export default function HomePageMenu() {
    return (
        <div className="flex w-full h-full">
            <div className="flex flex-col justify-evenly  w-[60%] h-full">
                <div className="place-content-start flex flex-col justify-center">
                    <Title className="mb-10">
                        ELIEDSON LUNA,
                    </Title>
                    <Title>
                        DESENVOLVIMENTO DE SOFTWARE.
                    </Title>
                </div>
                <NavButtons />
            </div>
            <div className="flex flex-col justify-center h-full w-[25%] ">
                <div className="flex flex-col justify-center gap-5 border-l-border-subcont border-l h-[70%] pl-5">
                    <Paragraph align="justify">
                        Opa tudo bom? Seja bem vindo ao DEV LUNA, meu portifólio profissional!
                    </Paragraph>
                    <Paragraph align="justify">
                        Me chamo Eliedson e te convido à conhecer um pouco do meu trabalho.
                    </Paragraph>
                    <Paragraph align="justify">
                        Sinta-se à vontade para navegar pelo meu site!
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}


const NavButtons = () => {
    return (
        <div className="flex justify-start">
            <div className="w-[50%] flex justify-evenly">
                {menuData.map((item) => (
                    <ButtonLayout key={item.title} href={item.link}>
                        <ResponsiveText textSize="medium" className="self-center group-hover:text-text-secondary">
                            {item.title}
                        </ResponsiveText>
                    </ButtonLayout>
                ))}
            </div>

        </div>
    )
}


const ButtonLayout = ({ children, key, href }: { children: ReactNode, key: Key, href: string }) => {
    return (
        <Link
            href={href}
            className="
                flex flex-col
                relative
                rounded-md
                border
                subContainer px-5 py-3
                group
                "
            key={key}>
            {children}
        </Link>
    )
}
