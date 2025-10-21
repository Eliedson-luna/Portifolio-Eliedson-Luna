import { allProjects, Project } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import React, { useMemo } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Text, Paragraph, Title } from '@/components/texts'
import Container from '@/components/structural/containers/container'
import Image from 'next/image'

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
    Text: Text,
    Link: Link,
    About: About,
    Features: Features,
    Feature: Feature,
    Tecnologies: Tecnologies,
    Tecnology: Tecnology
  }), [])

  return (
    <Container className='bg-[#FAF5FF] p-5'>
      <div className='flex justify-between'>
        <div className='w-[65%]'>
          <Text type='biggest' className='text-[#4A148C]'>{project.title}</Text>
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
    </Container>

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