import { ReactNode } from "react";

export default function SnapWrapper({children}: {children: ReactNode}) {
return(
    <section className="min-h-screen w-[90%] items-center flex flex-col gap-10 last-of-type:gap-0  snap-start">
        {children}
    </section>
)
}