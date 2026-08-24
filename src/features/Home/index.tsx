import HomePageStart from "./components/start";
import TopProjects from "./components/topProjects";
import { SnapLayout } from "@/shared/components/structural/layouts/snapLayout";
import SnapWrapper from "@/shared/components/structural/wrappers/snapWrapper";
import Contacts from "./components/contacts";

export default function HomepageBody() {
    return (
        <SnapLayout>
            <SnapWrapper>
                <HomePageStart />
            </SnapWrapper>
            <SnapWrapper>
                <TopProjects />
            </SnapWrapper>
            
            <SnapWrapper>
               <Contacts/>
            </SnapWrapper>

        </SnapLayout>
    )
}

