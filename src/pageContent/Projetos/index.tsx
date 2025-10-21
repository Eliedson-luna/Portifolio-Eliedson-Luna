import Container from "@/components/structural/containers/container";
import ProjectList from "./components/projectList";
import { ResponsiveText } from "@/components/texts";

export default function Projetos() {
    return (
        <Container>
            <div className="text-center mb-10 border-b-1 border-indigo-950">
                <ResponsiveText type="biggest" className="text-text">Projetos</ResponsiveText>
            </div>
            <ProjectList />
        </Container>
    )
}