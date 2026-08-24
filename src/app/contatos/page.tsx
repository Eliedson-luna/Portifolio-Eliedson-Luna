import ContatcsPageBody from "@/features/Contatos";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "DevLuna - Contatos"
}

export default function ContatcsPage() {

    return (
        <ContatcsPageBody/>
    )
}