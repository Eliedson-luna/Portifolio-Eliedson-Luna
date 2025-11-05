import { Fragment } from "react";
import ProjectList from "./components/projectList";
import { Title } from "@/shared/components/ui/text/title";

export default function PageProjectsBody() {
    return (
        <Fragment>
            <TitleBox />
            <ProjectList />
        </Fragment>
    )
}

const TitleBox = () => {
    return (
        <section className="px-50 pb-2 bg-bg border-b border-border-subcont">
            <Title>Meus Projetos</Title>
        </section>
    )
}