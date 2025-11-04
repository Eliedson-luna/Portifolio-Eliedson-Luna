import { ResponsiveText } from "@/components/ui/text/responsiveText";

export default function Footer() {
    return (
        <footer className="
        items-center 
        text-center
        [box-shadow:inset_0_4px_10px_#00000033]
        p-5
        h-[15vh]
        bg-bg-footer
        "
        >
            <ResponsiveText textSize="medium" className="text-text-footer">&copy; Eliedson Luna - 2025</ResponsiveText>
        </footer>
    )
}