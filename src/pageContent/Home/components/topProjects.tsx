'use client'
import { Paragraph, ResponsiveText, Title } from "@/components/texts/index";
import { allProjects, Project } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { JSX, ReactNode, useState } from "react";


export default function TopProjects() {
    const projects: Project[] = allProjects.slice(0, 3);
    return (
        <CardContainer>
            {projects.map((proj: Project) => {
                const image = proj.images ? proj.images[0] : '/not-found-image.png';
                return (
                    <Card key={proj._id} slug={proj.slug} title={proj.title} txt={proj.description} imgUrl={image} />
                )
            })}
        </CardContainer>
    )
}


const CardContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="
        flex flex-col 
        text-center 
        justify-evenly 
        pt-10 px-60
        gap-10
        border-t-subcontainer-border border-t-2 
        ">  
            <Title type="title">Projetos recentes</Title>
            <div className="flex flex-row gap-15">
                {children}
            </div>
        </div>
    )
}

type CardProps = {
    slug?: string;
    title?: string;
    txt?: string;
    imgUrl?: string;
};

const Card = ({ slug, title, txt, imgUrl }: CardProps): JSX.Element => {
    return (
        <CardLayout href={`/projects/${slug}`}>
            <Image
                width={100}
                height={60}
                alt={title!}
                src={imgUrl!}
                className="transition-all place-self-center duration-300 group-hover:blur-sm"
            />
            <Description>
                <ResponsiveText
                    type="small"
                    className="
                    text-text-negative
                    "
                >
                    {title}
                </ResponsiveText>
                <Paragraph
                    className="
                        px-1 
                        pt-1 
                        text-text-negative
                        text-justify
                        "
                >
                    {txt}
                </Paragraph>
            </Description>
        </CardLayout>
    );
};

const CardLayout = ({ children, href }: { children: ReactNode, href: string }) => {
    return (
        <Link
            href={href}
            className="
            group
            relative
            flex justify-center
            w-60 h-40
            hover:cursor-pointer 
            rounded-md 
            bg-subcontainer-bg 
            hover:shadow-shadow
            hover:bg-subcontainer-shadow
            hover:border
            hover:border-subcontainer-border
            ">
            {children}
        </Link>
    );
};

const Description = ({ children }: { children: ReactNode }) => {
    return (
        <div
            className="
            absolute 
            opacity-0 
            group-hover:opacity-100 
            transition-opacity duration-300 
            p-10 
            inset-0 
            "
        >
            {children}
        </div>
    );
};