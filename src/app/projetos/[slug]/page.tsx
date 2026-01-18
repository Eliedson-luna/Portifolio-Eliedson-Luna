import { FlexLayout } from "@/shared/components/structural/layouts/flexLayout";
import ContentWrapper from "@/shared/components/structural/wrappers/contentWrapper";
import { SubTitle } from "@/shared/components/ui/text/title";
import { notFound } from "next/navigation";
import { posts } from "#site/content";
import { MDXContent } from "@/shared/hooks/mdx/useMDXComponent";

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
          <div className='w-[85%] pt-10'>
            <SubTitle>{post.title}</SubTitle>
            <MDXContent
              code={post.body}
              frontmatter={{
                thumbnail: post.thumbnail,
                title: post.title,
                images:post.images
              }}
            />

          </div>
        </div>
      </ContentWrapper>
    </FlexLayout>
  )
}
