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
        { desc: 'Curriculo', icon: <FaFilePdf size={30} className="text-text" />, href: "/assets/Curriculo_Eliedson_Luna_Dev_Frontend.pdf" }
    ]

    return (
        <ContactsLayout>
            <div className="px-25 pb-3">
                <Title>
                    Contatos
                </Title>
            </div>
            <div
                className="
                    flex
                    justify-center w-full
                    rounded-lg
                    ">
                {links.map((item, index) => (
                    <LinkBox key={index} >
                        <Link href={item.href} id={`contact-${index+1}`} target={item.desc == 'Mensagem' ? '' : '_blank'}>
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
        </ContactsLayout>

    )
}

const ContactsLayout = ({ children }: { children: ReactNode }) => {
    return (
        <section className="flex flex-wrap flex-col items-center justify-center h-[90vh] w-full">
            {children}
        </section>
    )
}

const LinkBox = ({ children }: { children: ReactNode }) => {
    return (
        <div className="
            p-1 my-25 mx-15
            w-50 h-25
            flex flex-col
            justify-center items-center 
            hover:scale-105
            active:scale-100
            group 
            subContainer 
            border
            rounded-xl
            cursor-pointer
            ">
            {children}
        </div>
    )

}
