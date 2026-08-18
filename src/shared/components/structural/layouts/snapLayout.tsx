import { ReactNode } from "react";

export function SnapLayout({ children }: { children: ReactNode }) {
    return (
        <main className="
            flex flex-col
            justify-items-center
            items-center
            h-screen w-full
            overflow-y-scroll
            scroll-smooth
            snap-y snap-mandatory
            lg:*:self-center lg:*:px-60
            md:*:self-center md:*:px-10
        ">
            {children}
        </main>
    )
}
