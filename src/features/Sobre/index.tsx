import Container from "@/shared/components/layout/containers/container";
import { Paragraph } from "@/shared/components/ui/text/paragraph";
import { Title } from "@/shared/components/ui/text/title";


export default function PageAboutBody() {
    return (
        <Container>
            <Title>Sobre mim</Title>
            <Paragraph>
                🖐 Olá! Sou Eliedson!
            </Paragraph>
            <Paragraph>
                Sou um desenvolvedor com foco em Frontend, mas também tenho experiência no Backend.
            </Paragraph>
            <Paragraph>
                Acredito que
                determinação, persistência e pensamento crítico são essenciais para alcançar grandes objetivos.
            </Paragraph>
            <Paragraph>
                Estou sempre pronto para encarar novos desafios!
            </Paragraph>
        </Container>
    )
}