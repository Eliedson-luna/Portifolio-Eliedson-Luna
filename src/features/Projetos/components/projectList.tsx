import Image from "next/image";
import Link from "next/link";
import { SubTitle } from "@/shared/components/ui/text/title";
import { ResponsiveText } from "@/shared/components/ui/text/responsiveText";
import { Post, posts } from '#site/content'
import { FaLink } from "react-icons/fa";

export default function ProjectList() {
    return (
        <div
            className="
            mt-10
            flex flex-col gap-10 
            md:grid md:grid-cols-3
        ">
            {
                posts.map((post: Post, index: number) => {
                    return (
                        <ProjectCard key={index} slug={post.slugAsParams} index={index}>
                            <div
                                className='
                                items-center
                                flex flex-row 
                                justify-around
                                '
                            >
                                <div className="w-[65%]  transition-colors">
                                    <SubTitle className="mb-3">
                                        {post.title}
                                    </SubTitle>
                                    <ResponsiveText textSize="small" align="right" className="group-hover:text-text-secondary">
                                        {post.description}
                                    </ResponsiveText>
                                </div>

                                {post.thumbnail &&
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
                                                src={post.thumbnail.trimEnd()}
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
            href={`/projetos/${slug}`}
            id={`Project-${index + 1}`}
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

