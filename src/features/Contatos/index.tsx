import ContentWrapper from "@/shared/components/structural/wrappers/contentWrapper";
import { SubTitle, Title } from "@/shared/components/ui/text/title";
import Link from "next/link";
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
            <div className="border-b border-border-subcont">
                <Title>
                    Contatos
                </Title>
            </div>
            <article className="flex justify-evenly items-center h-100" >
                {links.map((item, index) => (
                    <Link
                        href={item.href}
                        id={`contact-${index + 1}`}
                        target={item.desc == 'Mensagem' ? '' : '_blank'}
                        className="
                        rounded-lg 
                        subContainer 
                        py-1 
                        w-[20%] md:w-[15%] 
                        border
                        hover:border-border-hover
                        "
                    >
                        <div className="flex p-2 place-content-center">
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
                ))}
            </article>

        </ContentWrapper>
    )
}
