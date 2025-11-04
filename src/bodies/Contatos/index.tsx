import { SubTitle, Title } from "@/components/ui/text/title";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function PageContactsBody() {

    const links = [
        { desc: 'Email', icon: <MdEmail size={30} className="text-text" />, href: "/contatos/mail-formulary" },
        { desc: 'Linkedin', icon: <FaLinkedin size={30} className="text-text" />, href: "https://www.linkedin.com/in/eliedsonluna/" },
        { desc: 'Github', icon: <FaGithub size={30} className="text-text" />, href: "https://github.com/Eliedson-luna" },
        { desc: 'Curriculo', icon: <FaFilePdf size={30} className="text-text" />, href: "/assets/Curriculo_Eliedson_Luna_Dev_Frontend.pdf" }
    ]

    return (
        <ContactsLayout>
            <div className="px-25 pb-3">
                <Title>
                    O que acha de trabalharmos juntos?
                </Title>
            </div>
            <div
                className="
                    flex flex-col 
                    justify-cente
                    rounded-lg
                    ">
                {links.map((links, index) => (
                    <LinkBox>
                        <Link key={index} href={links.href} target="_blank">
                            <div className="flex justify-center pt-2">
                                {links.icon}
                            </div>
                            <SubTitle
                                className="
                                    text-center 
                                    rounded-xl
                                    pb-2
                                    group-hover:border-b-2 
                                    group-hover:border-b-border-subcont
                                "
                            >
                                {links.desc}
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
        <section className="flex flex-col flex-wrap justify-center h-[80vh] w-full">
            <div className="jusify-center items-center flex flex-col">
                {children}
            </div>
        </section>
    )
}

const LinkBox = ({ children }: { children: ReactNode }) => {
    return (
        <div className="
            m-2 p-1
            w-200 
            hover:scale-105
            active:scale-100
            group 
            bg-bg-subcont
            rounded-xl
            ">
            {children}
        </div>
    )

}
