import Container from "@/components/container/page";
import ProjectList from "@/components/pages/projetos/projectList/components";
import StyledTitle from "@/components/styledTitle";
import { Suspense } from "react";
export default function Projetos() {


    return (
        <Container>
            <section id="project-section" className="p-10 max-h-[50rem] overflow-scroll">
                <div className="text-center sm:text-2xl">
                    <StyledTitle type="title">Meus Projetos</StyledTitle>
                </div>
                <Suspense fallback={<p className="text-center text-3xl">Carregando...</p>}>
                    <ProjectList />
                </Suspense>
            </section>
        </Container>
    )
}