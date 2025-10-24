import Carrousel from "@/components/structural/carrousel";
import Image from "next/image";
import Link from "next/link";
import { allProjects, Project } from 'contentlayer/generated';
import SubContainer from '@/components/structural/containers/subContainer';
import { SubTitle } from "@/components/texts/title";
import { Paragraph } from "@/components/texts/paragraph";

export default function ProjectList() {
    return (
        <div
            className="
            overflow-scroll
        ">
            {
                allProjects.map((proj: Project, index: number) => {
                    return (
                        <ProjectCard key={index} slug={proj.slug!} index={index}>
                            <div
                                className='
                                flex flex-row 
                                '
                            >
                                <div className="w-[50%] transition-colors">
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
                                {proj.images &&
                                    proj.images.map((image: string, index) => (
                                        <div key={index} className="flex w-[50%] justify-center ml-2 align-middle">
                                            <Carrousel>
                                                <Image
                                                    src={`${image.trimEnd()}`}
                                                    alt=""
                                                    height={100}
                                                    width={250}
                                                />
                                            </Carrousel>
                                        </div>
                                    ))
                                }
                            </div>
                            <div
                                className='
                                flex flex-row justify-start gap-2 mt-2 overflow-x-scroll'
                            >
                                {proj.tags?.map((tag: string, index) => (
                                    <SubTitle
                                        key={index}
                                        className='
                                            text-[#a78bfa] hover:text-white
                                            px-1
                                        '>
                                        {tag.trimEnd()}
                                    </SubTitle>
                                ))}
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
            className='hover:scale-105'
        >
            <SubContainer>
                {children}
            </SubContainer>
        </Link>
    )
}