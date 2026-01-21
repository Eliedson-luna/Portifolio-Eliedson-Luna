import * as runtime from 'react/jsx-runtime'
import { Paragraph } from '../../components/ui/text/paragraph'
import { ResponsiveText } from '../../components/ui/text/responsiveText'
import Link from 'next/link'
import Container from '@/shared/components/layout/containers/container'
import { SubTitle } from '@/shared/components/ui/text/title'
import SubContainer from '@/shared/components/layout/containers/subContainer'
import { Topic } from '@/shared/components/ui/text/topic'
import { ReactNode } from 'react'
import Image from 'next/image'

type MDXContentProps = {
  code: string,
  frontmatter?: Record<string, any>;
}

const useMDXComponent = (code: string, frontmatter: Record<string, any> = {}) => {
  const fn = new Function('runtime', 'frontmatter', `${code}`)
  return fn({ ...runtime }, frontmatter).default
}

export function MDXContent({ code, frontmatter }: MDXContentProps) {
  const Component = useMDXComponent(code, frontmatter);
  return <Component components={components} frontmatter={frontmatter} />
}


// Components

export const About = ({ children }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <SubContainer>

      {children}

    </SubContainer>
  )
}

export const Features = ({ children }: React.HTMLAttributes<HTMLElement>) => {
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

export const Feature = ({ children, title }: FeatureType) => {
  return (
    <SubContainer>
      <Topic textSize="medium">{title}</Topic>
      <div className="w-[75%] pl-10 flex flex-col justify-evenly">
        <ResponsiveText align="justify" textSize="small">{children}</ResponsiveText>
      </div>
    </SubContainer>
  )
}

export const Tecnologies = ({ children }: React.HTMLAttributes<HTMLElement>) => {
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

export const Tecnology = ({ children, title }: TecnologyType) => {
  return (
    <SubContainer>
      <Topic textSize="medium">{title}</Topic>
      <div className="w-full pl-10 flex flex-col">
        <ResponsiveText textSize="small">{children}</ResponsiveText>
      </div>
    </SubContainer>
  )
}

export const ImgContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="
    flex justify-center 
    relative
    w-[20vw] h-[10vh] 
    sm:w-[300px] sm:h-[250px] 
    mx-5
    overflow-x-scroll 
    ">
      {children}
    </div>
  )
}


export const BannerContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-10 w-full h-[30vh]">
      {children}
    </div>
  )
}

const components = {
  Paragraph,
  ResponsiveText,
  Link,
  About,
  Features,
  Feature,
  Tecnologies,
  Tecnology,
  Image,
  ImgContainer,
  BannerContainer
}
