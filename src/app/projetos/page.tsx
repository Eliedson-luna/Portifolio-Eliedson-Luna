import { FlexLayout } from "@/components/structural/layout/flexLayout";
import Projetos from "@/pageContent/Projetos";

export const metadata = {
    title: 'Projetos',
    description: 'Aqui estão alguns dos meus projetos desenvolvidos, desde pequenos experimentos até aplicações mais complexas. Cada projeto reflete minha paixão por programação e meu compromisso com a excelência técnica.',
}

export default function PageProjetos() {

    return (
        <FlexLayout>
            <Projetos />
        </FlexLayout>
    )
}