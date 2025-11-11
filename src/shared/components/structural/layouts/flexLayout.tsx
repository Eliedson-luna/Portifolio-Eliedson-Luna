import { ReactNode } from "react";

export function FlexLayout({ children }: { children: ReactNode }) {
    return (
        <main className="
            flex flex-col
            items-center
            justify-items-center 
            min-h-screen
        ">
            {children}
        </main>
    )
}