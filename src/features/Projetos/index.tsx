import ProjectList from "./components/projectList";
import { Title } from "@/shared/components/ui/text/title";
import ContentWrapper from "@/shared/components/structural/wrappers/contentWrapper";
import { FlexLayout } from "@/shared/components/structural/layouts/flexLayout";

export default function PageProjectsBody() {
    return (
        <FlexLayout>
            <ContentWrapper>
                <div className="mt-20" />
                <TitleBox />
                <ProjectList />
            </ContentWrapper>
        </FlexLayout>
    )
}

const TitleBox = () => {
    return (
        <div className="px-50 pb-2 bg-bg border-b border-border-subcont">
            <Title className="uppercase">Projetos</Title>
        </div>
    )
}