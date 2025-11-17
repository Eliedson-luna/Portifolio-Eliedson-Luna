import PageAboutBody from "@/features/Sobre";
import { FlexLayout } from "@/shared/components/structural/layouts/flexLayout";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "DevLuna - Sobre"
}

export default function Sobre() {
    return (
        <FlexLayout>
            <PageAboutBody/>
        </FlexLayout>
    )
}