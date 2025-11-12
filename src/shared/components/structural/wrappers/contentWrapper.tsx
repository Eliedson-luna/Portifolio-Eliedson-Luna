import { ReactNode } from "react";

export default function ContentWrapper({children}: {children: ReactNode}) {
return(
    <section className="min-h-screen items-center flex flex-col gap-10 last-of-type:gap-0 w-[90%]">
        {children}
    </section>
)
}