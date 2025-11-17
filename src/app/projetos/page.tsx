import PageProjectsBody from "@/features/Projetos";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "DevLuna - Projetos"
}

export default function Projetos() {
    return (
            <PageProjectsBody />
    )
}