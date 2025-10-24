import Container from "@/components/structural/containers/container";
import SubContainer from "@/components/structural/containers/subContainer";
import { FlexLayout } from "@/components/structural/layout/flexLayout";
import { ResponsiveText } from "@/components/texts";
import { Paragraph } from "@/components/texts/paragraph";
import { Title } from "@/components/texts/title";
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

export default function ProjetoPage({ params }: any) {
  const project = allProjects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

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
      <div className='flex justify-evenly'>
        <div className='w-[60%]'>
          <ResponsiveText textSize='biggest' className='text-[#4A148C]'>{project.title}</ResponsiveText>
          <Paragraph>{project.description}</Paragraph>
          <Container className='p-2' >
            <MDXContent components={components} />
          </Container>
        </div>
        <div className='flex flex-col'>
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
    <Container>
      <Title>Sobre</Title>
      <div className="flex flex-col">
        {children}
      </div>
    </Container>
  )
}


const Features = ({ children }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Container>
      <Title>Principais Funcionalidades</Title>
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
    <SubContainer>
      <Title>{title}</Title>
      <div className="flex flex-col">
        {typeof children === 'string' ? <Paragraph>{children}</Paragraph> : children}
      </div>
    </SubContainer>
  )
}

const Tecnologies = ({ children }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Container >
      <Title>Tecnologias utilizadas</Title>
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
    <SubContainer>
      <Title>{title}</Title>
      <div className="flex flex-col">
        <ResponsiveText textSize="small">{children}</ResponsiveText>
      </div>
    </SubContainer>
  )
}