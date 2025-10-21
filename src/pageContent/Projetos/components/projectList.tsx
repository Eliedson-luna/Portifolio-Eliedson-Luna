import { Paragraph, Title } from '@/components/texts/index'
import Carrousel from "@/components/structural/carrousel";
import Image from "next/image";
import Link from "next/link";
import { allProjects, Project } from 'contentlayer/generated';

export default function ProjectList() {
    return (
        <div id="project-box"
            className="
            grid grid-cols-3 
            h-[90vh] 
            p-3 
            gap-10
            overflow-scroll
        ">
            {
                allProjects.map((proj: Project, index: number) => {
                    return (
                        <Link href={`/projetos/${proj.slug.trimEnd()}`} id={`Project-${index + 1}`} key={index} className='
                                group
                                flex flex-col
                                justify-around
                                h-60 w-[100%] 
                                p-3
                                transition-transform
                                bg-[#000000]
                                border-[#6b46c1] border-2 rounded-sm
                                hover:border-[#c084fc]
                                hover:bg-[#6d28d9]
                                hover:cursor-pointer 
                                hover:scale-105 
                            '>
                            <div
                                className='
                                flex flex-row 
                                '
                            >
                                <div className="w-[50%]">
                                    <Title className="mb-3 text-[#c084fc]" type="subTitle">
                                        {proj.title}
                                    </Title>
                                    <Paragraph className='
                                    text-gray-400 
                                    group-hover:text-white
                                    text-justify
                                    transition-transform
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
                                    <Title type='subTitle'
                                        key={index}
                                        className='
                                            text-[#a78bfa] hover:text-white
                                            px-1
                                        '>
                                        {tag.trimEnd()}
                                    </Title>
                                ))}
                            </div>
                        </Link>
                    )
                })}
        </div>
    )
}