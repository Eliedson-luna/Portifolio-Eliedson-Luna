import AboutText from "@/features/Sobre/components/aboutText";
import { ResponsiveText } from "@/shared/components/ui/text/responsiveText";

export default function About() {
    return (
        <div className="w-[100vw] flex justify-center h-full bg-black/50 mt-15 border-t-2 border-t-border-hover">
            <div
                className="
                    w-[90%] 
                    lg:*:px-60 md:*:px-10 
                    flex flex-col self-center gap-10
                    "
            >
                <ResponsiveText className="mb-10" textSize="medium">
                    Sobre
                </ResponsiveText>
                <div className="mx-5">
                    <AboutText />
                </div>
            </div>
        </div>
    )
}