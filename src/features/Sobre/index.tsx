import Container from "@/shared/components/layout/containers/container";
import ContentWrapper from "@/shared/components/structural/wrappers/contentWrapper";
import { Paragraph } from "@/shared/components/ui/text/paragraph";
import { Title } from "@/shared/components/ui/text/title";


export default function PageAboutBody() {
    return (
        <ContentWrapper>

            <Container className="w-[65vw]">
                <Title>Sobre mim</Title>
                <div className="w-300">
                    <Paragraph align="justify">
                        🖐 Olá! Sou Eliedson!
                    </Paragraph>
                    <Paragraph align="justify">
                        Sou um desenvolvedor com foco em Frontend, mas também tenho experiência no Backend.
                    </Paragraph>
                    <Paragraph align="justify">
                        Acredito que
                        determinação, persistência e pensamento crítico são essenciais para alcançar grandes objetivos.
                    </Paragraph>
                    <Paragraph align="justify">
                        Estou sempre pronto para encarar novos desafios!
                    </Paragraph>
                </div>
            </Container>
        </ContentWrapper>
    )
}