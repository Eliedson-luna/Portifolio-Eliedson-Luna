import { FlexLayout } from "@/shared/components/structural/layouts/flexLayout";
import ContentWrapper from "@/shared/components/structural/wrappers/contentWrapper";
import { SubTitle } from "@/shared/components/ui/text/title";
import { notFound } from "next/navigation";
import { posts } from "#site/content";
import { MDXContent } from "@/shared/hooks/mdx/useMDXComponent";
import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";
import { ResponsiveText } from "@/shared/components/ui/text/responsiveText";

type PostProps = {
  params: Promise<{ slug: string }>
}

function getPostBySlug(slug: string) {
  return posts.find(post => post.slugAsParams === slug)
}

export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slugAsParams }))
}

export async function generateMetadata({ params }: PostProps) {
  const { slug } = await params
  const post = getPostBySlug(slug);
  if (post == null) return {}
  return { title: post.title, description: post.description }
}

export default async function ProjetoPage({ params }: PostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <FlexLayout>
      <div className="pt-15" />
      <ContentWrapper>
        <div className='flex justify-center'>
          <div className='w-[90%] sm:w-[65%] pt-10'>
            <div className="flex flex-row justify-between items-center  mb-5">
              <div className="flex flex-row gap-5 items-center">
              <SubTitle>
                {post.title}
              </SubTitle>
              {post.github &&  <Link href={post.github} ><FaGithub className="text-text-link cursor-pointer hover:text-text-link"/></Link>}
              </div>
              <ResponsiveText textSize="tiny" className="text-gray-800">publicado em: {post.publishedAt.split('T')[0]}</ResponsiveText>
            </div>
            <MDXContent
              code={post.body}
              frontmatter={{
                thumbnail: post.thumbnail,
                title: post.title,
                images: post.images
              }}
            />

          </div>
        </div>
      </ContentWrapper>
    </FlexLayout>
  )
}
