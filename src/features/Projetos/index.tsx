import ProjectList from "./components/projectList";
import { Title } from "@/shared/components/ui/text/title";
import ContentWrapper from "@/shared/components/structural/wrappers";

export default function PageProjectsBody() {
    return (
        <ContentWrapper>
            <TitleBox />
            <ProjectList />
        </ContentWrapper>
    )
}

const TitleBox = () => {
    return (
        <section className="px-50 pb-2 bg-bg border-b border-border-subcont">
            <Title>Meus Projetos</Title>
        </section>
    )
}