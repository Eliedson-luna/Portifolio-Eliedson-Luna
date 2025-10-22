import Container from "@/components/structural/containers/container";
import { FlexLayout } from "@/components/structural/layout/flexLayout";
import { Paragraph, ResponsiveText, Title } from "@/components/texts";
import { allProjects, Project } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer2/hooks";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useMemo } from "react";


export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjetoPage({ params }: { params: { slug: string } }) {

  const project: Project = allProjects.find((p) => p.slug === params.slug)!

  if (!project) return notFound();

  const MDXContent = useMDXComponent(project.body.code);

  const components = useMemo(() => ({
    Paragraph: Paragraph,
    Text: ResponsiveText,
    Link: Link,
    About: About,
    Features: Features,
    Feature: Feature,
    Tecnologies: Tecnologies,
    Tecnology: Tecnology
  }), [])

  return (
    <FlexLayout>
      <div className='flex justify-between'>
        <div className='w-[65%]'>
          <ResponsiveText type='biggest' className='text-[#4A148C]'>{project.title}</ResponsiveText>
          <Paragraph>{project.description}</Paragraph>
          <Container className='bg-[#EDE7F6] p-2' >
            <MDXContent components={components} />
          </Container>
        </div>
        <div className='flex flex-col mr-15'>
          {project.images!.map((path, index) => (
            <Image key={index}
              width={300} height={100}
              src={path}
              alt='image'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          ))}
        </div>
      </div>
    </FlexLayout>

  )
}


const About = ({ children }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Container className="flex flex-col justify-around p-3 text-gray-950">
      <Title type='title' className='text-[#4A148C]'>Sobre</Title>
      <div className="flex flex-col">
        {children}
      </div>
    </Container>
  )
}


const Features = ({ children }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Container className="flex flex-col justify-around bg-[#EDE7F6] p-3 text-[#4A148C]">
      <Title type='title'>Principais Funcionalidades</Title>
      <div className="flex flex-col">
        {children}
      </div>
    </Container>
  )
}

type FeatureType = React.HTMLAttributes<HTMLElement> & {
  title: string
} 

const Feature = ({ children, title }: FeatureType) => {
  return (
    <Container className="flex flex-col justify-around bg-[#d7ccddbc] p-3 text-gray-950">
      <Title type='title'>{title}</Title>
      <div className="flex flex-col">
        {typeof children === 'string' ? <Paragraph>{children}</Paragraph> : children}
      </div>
    </Container>
  )
}

const Tecnologies = ({ children }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Container className="flex flex-col justify-around p-3 text-[#4A148C]">
      <Title type='title'>Tecnologias utilizadas</Title>
      <div className="flex flex-col">
        {children}
      </div>
    </Container>
  )
}


type TecnologyType = React.HTMLAttributes<HTMLElement> & {
  title: string
}


const Tecnology = ({ children, title }: TecnologyType) => {
  return (
    <Container className="flex flex-col justify-around p-3 bg-[#d7ccddbc] text-gray-950">
      <Title type='title'>{title}</Title>
      <div className="flex flex-col">
        {children}
      </div>
    </Container>
  )
}