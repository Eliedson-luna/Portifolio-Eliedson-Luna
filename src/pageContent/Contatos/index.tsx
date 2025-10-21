import Container from "@/components/structural/container";
import { Title } from "@/components/texts";
import Image from "next/image";
import Link from "next/link";

export default function Contatos() {

    const links = [
        { desc: 'Email', src: "/images/contacts/mail.png", href: "/contatos/sendMail" },
        { desc: 'Linkedin', src: "/images/contacts/linkedin.png", href: "https://www.linkedin.com/in/eliedsonluna/" },
        { desc: 'Github', src: "/images/contacts/github-logo.png", href: "https://github.com/Eliedson-luna" },
        { desc: 'Curriculo', src: "/images/file.svg", href: "/assets/Curriculo_Eliedson_Luna_Dev_Frontend.pdf" }
    ]

    return (
        <Container className="bg-[#D9D9D9]">
            <div className="text-center my-5">
                <Title type="title">
                    O que acha de trabalharmos juntos?
                </Title>
            </div>
            <div id="contact-list" className="flex justify-center">
                {links.map((links, index) => (
                    <Container className="m-5 h-[60px] transform group hover:scale-110">
                        <Link key={index} href={links.href} target="_blank">
                            <div className="flex justify-center group-hover:scale-90">
                                <Image
                                    alt={links.desc}
                                    src={links.src}
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <div>
                                <Title type="title" className="text-center group-hover:border-b-2 group-hover:border-b-slate-900">
                                    {links.desc}
                                </Title>
                            </div>
                        </Link>
                    </Container>
                ))}
            </div>
        </Container>
    )
}