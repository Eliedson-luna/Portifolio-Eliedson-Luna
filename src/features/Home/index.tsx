import HomePageStart from "./components/start";
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
                <HomePageStart />
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

