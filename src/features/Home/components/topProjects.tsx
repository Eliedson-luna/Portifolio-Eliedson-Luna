'use client'

import { ResponsiveText } from "@/shared/components/ui/text/responsiveText";
import { Title } from "@/shared/components/ui/text/title";
import { allProjects, Project } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { JSX, ReactNode } from "react";

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
            <Title>Projetos recentes</Title>
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
        <CardLayout href={`/projetos/${slug}`}>
            <Image
                alt={title!}
                src={imgUrl!}
                fill
                className="object-cover transition-all duration-300 group-hover:blur-sm"
            />
            <Description>
                <Title>
                    {title}
                </Title>
                <ResponsiveText
                    textSize="tiniest"
                    align="justify"
                    className="
                    px-1
                    text-text
                    "
                >
                    {txt}
                </ResponsiveText>
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
            w-60 h-40
            overflow-hidden
            rounded-lg
            cursor-pointer
            transition-all duration-300
            shadow-md
            hover:shadow-xl
            hover:scale-110
            "
        >
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                    {children}
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        </Link>
    );
};

const Description = ({ children }: { children: ReactNode }) => {
    return (
        <div
            className="
            absolute inset-0
            flex flex-col justify-center items-center
            p-4
            text-center
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-300
            z-10
            "
        >
            {children}
        </div>
    );
};
