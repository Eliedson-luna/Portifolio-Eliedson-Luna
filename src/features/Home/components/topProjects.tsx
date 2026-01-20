'use client'

import { HorizontalIndicator } from "@/shared/components/structural/scroll/horizontalIndicator";
import { ResponsiveText } from "@/shared/components/ui/text/responsiveText";
import { Title } from "@/shared/components/ui/text/title";
import Image from "next/image";
import Link from "next/link";
import { JSX, ReactNode } from "react";
import { Post, posts } from "#site/content"

export default function TopProjects() {
    const projects: Post[] = posts.slice(0, 3);
    return (
        <div className="h-full w-full mt-15 border-t-border-hover border-t-2">
            <ResponsiveText textSize="medium">Projetos Recentes</ResponsiveText>
            <CardContainer>
                {projects.map((proj: Post, index) => {
                    const image = proj.images ? proj.images[0] : '/not-found-image.png';
                    return (
                        <Card key={index} slug={proj.slugAsParams} title={proj.title} txt={proj.description} imgUrl={image} />
                    )
                })}
            </CardContainer>
            <HorizontalIndicator rootClass=".scroll-card" trace=".card" />
        </div>
    )
}

const CardContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="
        scroll-card
        flex
        h-[85%]
        w-full
        snap-x snap-mandatory
        overflow-x-scroll
        text-center
        py-20 sm:py-10
        gap-10
         
        ">

            {children}

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
            <div className="flex sm:justify-start w-[90vw] h-[60%] relative">
                <Image
                    alt={title!}
                    src={imgUrl!}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
            <div
                className="
                    flex
                    h-[40%]
                    justify-start items-center
                    text-center
                    transition-opacity duration-300
                    z-1
                "
            >
                <Title className="uppercase">
                    {title}
                </Title>
                <ResponsiveText
                    textSize="small"
                    align="justify"
                    className="
                    py-10
                    mt-1
                    ml-10 pl-10
                    border-l border-l-border-subcont
                    hover:text-text-secondary
                    "
                >
                    {txt}
                </ResponsiveText>
            </div>
        </CardLayout>
    );
};


const CardLayout = ({ children, href }: { children: ReactNode, href: string }) => {
    return (
        <Link
            href={href}
            className="
                card
                flex
                snap-center
                cursor-pointer
            "
        >
            <div
                className="
                w-[90%]
                h-[90%]
            "
            >
                {children}
            </div>
        </Link>
    );
};
