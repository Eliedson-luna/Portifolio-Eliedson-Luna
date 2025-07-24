'use client'
import Container from "@/components/structural/container"
import { Paragraph, StyledTitle, Text } from "@/components/texts/index";
import Image from "next/image";
import Link from "next/link";
import { JSX, useEffect, useState } from "react";


export default function TopProjects() {
    const [projects, setProjects] = useState([])

    const getProjects = async () => {
        try {
            const response = await fetch("/api/projects", { method: "GET" });

            if (!response.ok) {
                throw new Error("Erro ao buscar os projetos");
            }

            const data = await response.json();
            setProjects(data.slice(0, 3));

        } catch (err: any) {
            alert(err.message)
            setProjects([])
        }
    }

    useEffect(() => {
        getProjects();
    }, [])

    return (
        <>
            <StyledTitle
                type="title"
                className="
                absolute 
                -translate-y-5 sm:-translate-y-5 md:-translate-y-5 lg:-translate-y-5
                text-[#b8c9f0e0]
                ">
                Top 3 Projetos
            </StyledTitle>
            <Container id="topProjects">
                <div className="flex justify-evenly p-5 mb-2 inset-shadow-amber-50">
                    {projects.map((item: any) => (
                        <Card key={item.id} id={item.id} title={item.title} txt={item.description} imgUrl={item.img[0]} />
                    ))}
                </div>
            </Container>
        </>
    )
}

type CardProps = {
    id: number;
    title: string;
    txt: string;
    imgUrl: string;
};

const Card = ({ id, title, txt, imgUrl }: CardProps): JSX.Element => {
    return (
        <Link href={`/projetos/${id}`} className="group mr-1">
            <div key={id} className="
                bg-[#b8c9f0e0] 
                flex flex-col 
                w-35 sm:w-35 md:w-40 lg:w-70 
                h-50 sm:h-55 md:h-60 lg:h-100
                rounded-md 
                transition-transform
                [filter:drop-shadow(0_10px_10px_#0000003f)]
                group-hover:[filter:drop-shadow(0_10px_10px_#6200ff66)]
                group-hover:scale-105
                group-active:scale-105
                "
            >
                <div className="bg-[#D9D9D9]
                flex  
                justify-center
                rounded-t-md 
                h-25 sm:h-30 md:h-35 lg:h-45
                px-8 sm:px-5 md:px-5 lg:px-5
                py-3 sm:py-5 md:py-5 lg:py-5
                [filter:drop-shadow(0_10px_10px_#0000003f)]
                group-hover:[filter:drop-shadow(0_10px_10px_#6200ff66)]
                ">
                    <Image width={140} height={100} alt={title} src={imgUrl} />
                </div>
                <div className="
                    bg-[#D9D9D9] 
                    absolute
                    top-47 sm:top-52 md:top-56 lg:top-66 
                    left-1/2 
                    -translate-x-1/2 
                    -translate-y-24 
                    rounded-b-lg
                    w-22 sm:w-26 md:w-24 lg:w-32
                    text-center
                    ">
                    <Text>{title}</Text>
                </div>
                <Paragraph className="
                px-3 
                pt-4 
                text-justify 
                overflow-scroll
                ">{txt}</Paragraph>
            </div>
        </Link>
    );
};