import Container from "@/shared/components/layout/containers/container";
import { FlexLayout } from "@/shared/components/structural/layouts/flexLayout";
import ContentWrapper from "@/shared/components/structural/wrappers/contentWrapper";
import { Paragraph } from "@/shared/components/ui/text/paragraph";
import { SubTitle, Title } from "@/shared/components/ui/text/title";


export default function PageAboutBody() {
    return (
        <FlexLayout>
            <ContentWrapper>
                <Container>
                    <div className="w-300" >

                        <SubTitle className="mb-15">
                            🖐 Olá! Sou Eliedson!
                        </SubTitle>
                        <div className="w-250" >
                            <Paragraph align="justify" className="mb-10">
                                Sou um desenvolvedor apaixonado por Frontend, mas também exploro
                                Backend e outras áreas da tecnologia. Tenho formação em Análise e
                                Desenvolvimento de Sistemas e estou constantemente buscando ampliar
                                meus conhecimentos através de cursos e projetos práticos.
                            </Paragraph>
                            <Paragraph align="justify" className="mb-10">
                                Acredito que determinação, persistência e pensamento crítico são
                                essenciais para alcançar grandes objetivos. Durante minha trajetória,
                                pude trabalhar com tecnologias como React, Node.js, TypeScript e React
                                Native, aprendendo não apenas código, mas também a importância da colaboração
                                e inovação.
                            </Paragraph>
                            <Paragraph align="justify" className="mb-10">
                                Valorizo muito o aprendizado contínuo e sou movido pela curiosidade
                                de entender como as coisas funcionam. Já participei de projetos que
                                me desafiaram a sair da zona de conforto, desde suporte técnico até
                                desenvolvimento de aplicações mais complexas. Cada experiência me tornou
                                mais preparado para novos desafios.
                            </Paragraph>
                            <Paragraph align="justify" className="mb-10">
                                Estou sempre pronto para encarar novas oportunidades, seja
                                trabalhando em equipe ou assumindo projetos que envolvam inovação.
                                Se você busca alguém com energia, dedicação e vontade genuína de
                                crescer, estou aqui!
                            </Paragraph>
                        </div>
                    </div>
                </Container>
            </ContentWrapper>
        </FlexLayout>
    )
}