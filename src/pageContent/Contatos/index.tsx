import { Title } from "@/components/texts";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FaFilePdf, FaGithub, FaLinkedin, FaVoicemail } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contacts() {

    const links = [
        { desc: 'Email', icon: <MdEmail size={30} className="text-text" />, href: "/contatos/sendMail" },
        { desc: 'Linkedin', icon: <FaLinkedin size={30} className="text-text" />, href: "https://www.linkedin.com/in/eliedsonluna/" },
        { desc: 'Github', icon: <FaGithub size={30} className="text-text" />, href: "https://github.com/Eliedson-luna" },
        { desc: 'Curriculo', icon: <FaFilePdf size={30} className="text-text" />, href: "/assets/Curriculo_Eliedson_Luna_Dev_Frontend.pdf" }
    ]

    return (
        <ContactsLayout>
            <div className="text-center my-5 border-b-2 px-25 pb-3">
                <Title type="title">
                    O que acha de trabalharmos juntos?
                </Title>
            </div>
            <div className="flex justify-center bg-subcontainer-bg rounded-lg">
                {links.map((links, index) => (
                    <LinkBox>
                        <Link key={index} href={links.href} target="_blank">
                            <div className="flex justify-center group-hover:scale-90">
                                {links.icon}
                            </div>
                            <div>
                                <Title type="title" className="text-center group-hover:border-b-2 group-hover:border-b-text-negative">
                                    {links.desc}
                                </Title>
                            </div>
                        </Link>
                    </LinkBox>
                ))}
            </div>
        </ContactsLayout>

    )
}

const ContactsLayout = ({ children }: { children: ReactNode }) => {
    return (
        <section className="flex flex-col flex-wrap justify-center min-h-screen w-full">
            <div className="jusify-center items-center flex flex-col">

            {children}
            </div>
        </section>
    )
}

const LinkBox = ({ children }: { children: ReactNode }) => {
    return (
        <div className="m-5 h-[60px] transform group hover:scale-110">
            {children}
        </div>
    )

}
