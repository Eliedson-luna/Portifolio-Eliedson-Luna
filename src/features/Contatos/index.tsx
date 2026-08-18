import ContentWrapper from "@/shared/components/structural/wrappers/contentWrapper";
import { SubTitle, Title } from "@/shared/components/ui/text/title";
import Link from "next/link";
import { ReactNode } from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function PageContactsBody() {

    const links = [
        { desc: 'Mensagem', icon: <MdEmail size={30} className="text-text" />, href: "/contatos/enviar-email" },
        { desc: 'Linkedin', icon: <FaLinkedin size={30} className="text-text" />, href: "https://www.linkedin.com/in/eliedsonluna/" },
        { desc: 'Github', icon: <FaGithub size={30} className="text-text" />, href: "https://github.com/Eliedson-luna" },
        { desc: 'Curriculo', icon: <FaFilePdf size={30} className="text-text" />, href: "/assets/Curriculo_Eliedson_Luna.pdf" }
    ]

    return (
        <ContentWrapper>
            <div className="sm:px-25 sm:pb-3 flex w-full">
                <Title>
                    Contatos
                </Title>
            </div>
            <div className="h-80 flex">
                <div
                    className="self-center
                        grid grid-cols-2 grid-rows-2
                        lg:flex lg:justify-center lg:w-full
                ">
                    {links.map((item, index) => (
                        <LinkBox key={index} >
                            <Link href={item.href} id={`contact-${index + 1}`} target={item.desc == 'Mensagem' ? '' : '_blank'}>
                                <div className="flex justify-center pt-2">
                                    {item.icon}
                                </div>
                                <SubTitle
                                    className="
                                text-center 
                                rounded-xl
                                pb-2
                                "
                                >
                                    {item.desc}
                                </SubTitle  >
                            </Link>
                        </LinkBox>
                    ))}
                </div>
            </div>
        </ContentWrapper>
    )
}

const LinkBox = ({ children }: { children: ReactNode }) => {
    return (
        <div className="
            min-w-40 min-h-20
            max-w-50 max-h-25
            my-2 mx-2
            md:my-15 md:mx-15
            hover:scale-105
            active:scale-100
            group 
            subContainer
            border
            rounded-xl
            cursor-pointer
            ">
            <div className="
                flex flex-col
                justify-center items-center
                h-full w-full
                ">
                {children}
            </div>
        </div>
    )

}
