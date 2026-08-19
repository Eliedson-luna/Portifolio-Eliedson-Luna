'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image from 'next/image';
import Link from 'next/link';

import { ResponsiveText } from '@/shared/components/ui/text/responsiveText';
import { Title } from '@/shared/components/ui/text/title';
import { posts } from '#site/content';

export default function TopProjects() {
    const topProjects = posts.slice(0, 3);

    return (
        <div className="w-full mt-15 border-t-2 border-t-border-hover pt-8">
            <ResponsiveText textSize="medium">
                Projetos Recentes
            </ResponsiveText>

            <Carousel
                autoPlay
                infiniteLoop
                emulateTouch
                showThumbs={false}
                showStatus={false}
                showIndicators
                className="mt-10"
            >
                {topProjects.map((project) => (
                    <Link
                        key={project.slugAsParams}
                        href={`/projetos/${project.slugAsParams}`}
                        className="
                            block
                            w-full
                            px-4
                            pb-10
                        "
                    >
                        <article
                            className="
                                mx-auto
                                flex
                                w-full
                                max-w-5xl
                                flex-col
                                overflow-hidden
                                rounded-xl
                                border
                                border-border-subcont
                                bg-black/10
                                text-left
                                transition-all
                                duration-300
                                hover:border-border-hover
                                hover:bg-black/20
                            "
                        >
                            <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-96">
                                <Image
                                    src={project.images?.[0] || '/projects/mail.png'}
                                    alt={project.title}
                                    fill
                                    className="
                                        object-cover
                                        transition-transform
                                        duration-500
                                        hover:scale-105
                                    "
                                />
                            </div>

                            <div
                                className="
                                    flex
                                    flex-col
                                    gap-4
                                    p-6
                                    sm:flex-row
                                    sm:items-center
                                    sm:p-8
                                "
                            >
                                <Title className="shrink-0 uppercase">
                                    {project.title}
                                </Title>

                                <ResponsiveText
                                    textSize="small"
                                    align="justify"
                                    className="
                                        border-l-0
                                        pl-0
                                        text-text-secondary
                                        sm:border-l
                                        sm:border-l-border-subcont
                                        sm:pl-6
                                    "
                                >
                                    {project.description}
                                </ResponsiveText>
                            </div>
                        </article>
                    </Link>
                ))}
            </Carousel>
        </div>
    );
}