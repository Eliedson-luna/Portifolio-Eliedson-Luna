import HomePageMenu from "./components/menu";
import TopProjects from "./components/topProjects";

export default function HomepageBody() {
    return (
        <>
        <div className="h-[90vh] flex flex-col justify-around">
                <HomePageMenu />
                <TopProjects />
        </div>
        </>
    )
}

