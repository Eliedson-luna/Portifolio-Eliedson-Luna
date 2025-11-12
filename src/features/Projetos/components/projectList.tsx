import Image from "next/image";
import Link from "next/link";
import { SubTitle } from "@/shared/components/ui/text/title";
import { allProjects, Project } from "contentlayer/generated";
import { ResponsiveText } from "@/shared/components/ui/text/responsiveText";

export default function ProjectList() {
    return (
        <div
            className="
            mt-10
            flex flex-col gap-10 
            md:grid md:grid-cols-3
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
                                '
                            >
                                <div className="w-[65%]  transition-colors">
                                    <SubTitle className="mb-3">
                                        {proj.title}
                                    </SubTitle>
                                    <ResponsiveText textSize="small" align="right" className="group-hover:text-text-secondary">
                                        {proj.description}
                                    </ResponsiveText>
                                </div>

                                {proj.thumbnail &&
                                    <div key={index} className="h-full flex flex-col justify-center">
                                        <div
                                            className="
                                                relative
                                                h-20 w-20 
                                                overflow-hidden 
                                                rounded-full
                                            "
                                        >

                                            <Image
                                                src={proj.thumbnail.trimEnd()}
                                                alt=""
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
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
                p-5 my-2
                h-[100%]
                content-center
                scale-95 
                hover:scale-100 
                rounded-lg 
                border-b
                cursor-pointer
                subContainer
                active:scale-95
                group
                "
            >

                {children}
            </div>
        </Link>
    )
}

