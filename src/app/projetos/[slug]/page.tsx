import Container from "@/shared/components/layout/containers/container";
import SubContainer from "@/shared/components/layout/containers/subContainer";
import { FlexLayout } from "@/shared/components/structural/layouts/flexLayout";
import ContentWrapper from "@/shared/components/structural/wrappers/contentWrapper";
import { Paragraph } from "@/shared/components/ui/text/paragraph";
import { ResponsiveText } from "@/shared/components/ui/text/responsiveText";
import { SubTitle, Title } from "@/shared/components/ui/text/title";
import { Topic } from "@/shared/components/ui/text/topic";
import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import { useMDXComponent } from "next-contentlayer2/hooks";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReactNode, useMemo } from "react";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const project = allProjects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Projeto não encontrado' }

  return {
    title: `DevLuna - ${project.title}`,
    description: project.description || 'Projeto do portfólio DevLuna'
  }
}

export default function ProjetoPage({ params }: any) {
  const project = allProjects.find((p) => p.slug === params.slug)
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
    Tecnology: Tecnology,
    Image: Image,
    ImgContainer: ImgContainer,
    BannerContainer: BannerContainer
  }), [])

  return (
    <FlexLayout>
      <div className="pt-15" />
      <ContentWrapper>
        <div className='flex justify-center'>
          <div className='w-[85%] pt-10'>
            <ResponsiveText textSize='big' className='mb-10 text-[#4A148C]'>{project.title}</ResponsiveText>
            <MDXContent components={components} />
          </div>
        </div>
      </ContentWrapper>
    </FlexLayout>
  )
}

const About = ({ children }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Paragraph>
      {children}
    </Paragraph>
  )
}

const Features = ({ children }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Container>
      <SubTitle>FEATURES</SubTitle>
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
      <Topic textSize="medium">{title}</Topic>
      <div className="w-[75%] pl-10 flex flex-col justify-evenly">
        <ResponsiveText align="justify" textSize="small">{children}</ResponsiveText>
      </div>
    </SubContainer>
  )
}

const Tecnologies = ({ children }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Container >
      <SubTitle>TECNOLOGIAS</SubTitle>
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
      <Topic textSize="medium">{title}</Topic>
      <div className="w-full pl-10 flex flex-col">
        <ResponsiveText textSize="small">{children}</ResponsiveText>
      </div>
    </SubContainer>
  )
}

const ImgContainer = ({ children }: { children: ReactNode }) => {
  return (
   <div className="flex justify-center w-[300px] h-[250px] ml-10 relative">
      {children}
    </div>
  )
}


const BannerContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-10 w-full h-[30vh]">
      {children}
    </div>
  )
}