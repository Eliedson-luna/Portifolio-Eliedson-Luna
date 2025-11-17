import HomePageMenu from "./components/menu";
import TopProjects from "./components/topProjects";
import { VerticalIndicator } from "@/shared/components/structural/scroll/verticalIndicator";
import { SnapLayout } from "@/shared/components/structural/layouts/snapLayout";
import SnapWrapper from "@/shared/components/structural/wrappers/snapWrapper";
import PageContactsBody from "../Contatos";

export default function HomepageBody() {
    return (
        <SnapLayout>
            <VerticalIndicator />
            <SnapWrapper>
                <HomePageMenu />
            </SnapWrapper>
            <SnapWrapper>
                <TopProjects />
            </SnapWrapper>
            <SnapWrapper>
                <PageContactsBody/>
            </SnapWrapper>
        </SnapLayout>
    )
}

