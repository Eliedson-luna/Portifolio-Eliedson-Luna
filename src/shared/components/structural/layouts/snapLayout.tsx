import { ReactNode } from "react";

export function SnapLayout({ children }: { children: ReactNode }) {
    return (
        <main className="
            flex flex-col
            justify-items-center 
            items-center
            lg:mx-60
            h-screen
            overflow-y-scroll
            scroll-smooth
            snap-y snap-mandatory
        ">
            {children}
        </main>
    )
}
