import { ReactNode } from "react";

export function SnapLayout({ children }: { children: ReactNode }) {
    return (
        <main className="
            flex flex-col
            items-center
            h-screen w-full
            overflow-y-scroll
            scroll-smooth
            snap-y snap-mandatory
            *:self-center
            *:px-60
        ">
            {children}
        </main>
    )
}
