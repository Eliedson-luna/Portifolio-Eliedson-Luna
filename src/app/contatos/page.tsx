import PageContactsBody from "@/features/Contatos";
import { FlexLayout } from "@/shared/components/structural/layouts/flexLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "DevLuna - Contatos"
}

export default function ContatcsPage() {

    return (
        <FlexLayout>
            <PageContactsBody />
        </FlexLayout>
    )
}