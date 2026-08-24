import Container from "@/shared/components/layout/containers/container";
import { FlexLayout } from "@/shared/components/structural/layouts/flexLayout";
import ContentWrapper from "@/shared/components/structural/wrappers/contentWrapper";
import AboutText from "./components/aboutText";


export default function PageAboutBody() {
    return (
        <FlexLayout>
            <ContentWrapper>
                <Container>
                    <AboutText/>
                </Container>
            </ContentWrapper>
        </FlexLayout>
    )
}