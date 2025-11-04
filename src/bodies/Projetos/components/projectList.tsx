import Carrousel from "@/components/layout/carrousel";
import Image from "next/image";
import Link from "next/link";
import { allProjects, Project } from 'contentlayer/generated';
import { SubTitle } from "@/components/ui/text/title";
import { Paragraph } from "@/components/ui/text/paragraph";

export default function ProjectList() {
    return (
        <div
            className="
            h-[70vh]
            grid grid-cols-3 grid-rows-5
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
                                '
                            >
                                <div className="w-[65%] transition-colors">
                                    <SubTitle className="mb-3 group-hover:text-text-inverted">
                                        {proj.title}
                                    </SubTitle>
                                    <Paragraph className='
                                        group-hover:text-text-inverted
                                        text-justify
                                    '>
                                        {proj.description}
                                    </Paragraph>
                                </div>

                                {proj.thumbnail &&
                                    <div key={index} className="flex w-[50%] justify-center ml-2 align-middle">
                                        <Carrousel>
                                            <Image
                                                src={`${proj.thumbnail.trimEnd()}`}
                                                alt=""
                                                height={50}
                                                width={100}
                                            />
                                        </Carrousel>
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

