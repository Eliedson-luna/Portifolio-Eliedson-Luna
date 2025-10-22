import Container from "@/components/structural/containers/container";
import { FlexLayout } from "@/components/structural/layout/flexLayout";
import { Title } from "@/components/texts";
import ProjectList from "@/pageContent/Projetos/components/projectList";
import { Suspense } from "react";
export default function Projetos() {
    return (
        <FlexLayout>
            <section id="project-section" className="p-10 max-h-[50rem] overflow-scroll">
                <div className="text-center sm:text-2xl">
                    <Title type="title">Meus Projetos</Title>
                </div>
                <ProjectList />
            </section>
        </FlexLayout>
    )
}