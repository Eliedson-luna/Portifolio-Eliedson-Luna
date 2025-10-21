import { ResponsiveText } from "@/components/texts";

export default function Footer() {
    return (
        <footer className="
        items-center 
        text-center
        bg-bg-footer
        [box-shadow:inset_0_4px_10px_#00000033]
        p-5
        h-[15vh]
        "
        >
            <ResponsiveText type="medium" className="text-text-inverted">&copy; Eliedson Luna - 2025</ResponsiveText>
        </footer>
    )
}