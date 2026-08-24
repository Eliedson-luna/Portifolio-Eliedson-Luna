import ContactsBody from "@/features/Contatos/components/contactsBody";
import { FlexLayout } from "@/shared/components/structural/layouts/flexLayout";
import ContentWrapper from "@/shared/components/structural/wrappers/contentWrapper";
import { Title } from "@/shared/components/ui/text/title";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "DevLuna - Contatos"
}

export default function ContatcsPageBody() {

    return (
        <FlexLayout>
            <ContentWrapper>
                <TitleBox />
                <ContactsBody />
            </ContentWrapper>
        </FlexLayout>
    )
}


const TitleBox = () => {
    return (
        <div className="border-b border-border-subcont">
            <Title>Contatos</Title>
        </div>
    )
}