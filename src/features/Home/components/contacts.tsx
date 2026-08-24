import ContactsBody from "@/features/Contatos/components/contactsBody";
import { ResponsiveText } from "@/shared/components/ui/text/responsiveText";

export default function Contacts() {
    return (

        <div className="w-full mt-15 border-t-2 border-t-border-hover pt-8">
            <ResponsiveText textSize="medium">
              Contatos
            </ResponsiveText>

            <ContactsBody/>
        </div>
    )
}