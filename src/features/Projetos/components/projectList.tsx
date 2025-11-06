
import Image from "next/image";
import Link from "next/link";

import { SubTitle } from "@/shared/components/ui/text/title";
import { Paragraph } from "@/shared/components/ui/text/paragraph";
import Carrousel from "@/shared/components/layout/carrousel";
import { allProjects, Project } from "contentlayer/generated";

export default function ProjectList() {
    return (
        <div
            className="
            h-[70vh]
            flex flex-col gap-10 sm:gap-0
            sm:grid sm:grid-cols-3 sm:grid-rows-5
            overflow-y-scroll
        ">
            {
                allProjects.map((proj: Project, index: number) => {
                    return (
                        <ProjectCard key={index} slug={proj.slug!} index={index}>
                            <div
                                className='
                                items-center
                                flex flex-row 
                                justify-around
                                group
                                '
                            >
                                <div className="w-[65%] transition-colors">
                                    <SubTitle className="mb-3">
                                        {proj.title}
                                    </SubTitle>
                                    <Paragraph className='
                                 
                                        text-justify
                                    '>
                                        {proj.description}
                                    </Paragraph>
                                </div>

                                {proj.thumbnail &&
                                    <div key={index}
                                        className="
                                        relative 
                                        h-20 w-20 
                                        overflow-hidden 
                                        rounded-full 
                                        flex 
                                        items-center 
                                        justify-center
                                        ">
                                        <Image
                                            src={proj.thumbnail.trimEnd()}
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                }
                            </div>
                        </ProjectCard>
                    )
                })}
        </div>
    )
}


// ---------- components -------------------- //

const ProjectCard = ({ children, slug, index }: { children: React.ReactNode, slug: string, index: number }) => {
    return (
        <Link
            href={`/projetos/${slug.trimEnd()}`}
            id={`Project-${index + 1}`}
            key={index}
        >
            <div
                className="
                p-5 my-5 
                h-35 w-150
                scale-95 
                hover:scale-100 
                rounded-md 
                border-b
                cursor-pointer
                border-border-subcont
                bg-bg-subcont
                hover:shadow hover:shadow-shadow-subcont
                active:scale-95
                "
            >

                {children}
            </div>
        </Link>
    )
}

