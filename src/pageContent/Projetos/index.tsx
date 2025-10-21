import Container from "@/components/structural/container";
import { Text } from '@/components/texts/index'
import { Suspense } from "react";
import ProjectList from "./components/projectList";

export default function Projetos() {

    return (
        <Container>
            <section id="project-section" className="p-10 max-h-[50rem] overflow-scroll">
                <div className="text-center mb-10 border-b-1 border-indigo-950">
                    <Text type="biggest" className="text-[#c084fc]">Projetos</Text>
                </div>
                <Suspense fallback={<Text type="big" className="text-center">Carregando...</Text>}>
                    <ProjectList />
                </Suspense>
            </section>
        </Container>
    )
}