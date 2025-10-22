import Container from "@/components/structural/containers/container";
import { FlexLayout } from "@/components/structural/layout/flexLayout";
import { Paragraph, Title } from "@/components/texts";

export default function Sobre() {
    return (
        <FlexLayout>
            <Container>
                <Title type="title">Sobre mim</Title>
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
        </FlexLayout>
    )
}