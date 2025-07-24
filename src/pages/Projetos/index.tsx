import Container from "@/components/structural/container";
import { StyledTitle, Text } from '@/components/texts/index'
import { Suspense } from "react";
import ProjectList from "./components/projectList";

export default function Projetos() {

    return (
        <Container>
            <section id="project-section" className="p-10 max-h-[50rem] overflow-scroll">
                <div className="text-center sm:text-2xl">
                    <StyledTitle type="title">Projetos</StyledTitle>
                </div>
                <Suspense fallback={<Text className="text-center">Carregando...</Text>}>
                    <ProjectList />
                </Suspense>
            </section>
        </Container>
    )
}