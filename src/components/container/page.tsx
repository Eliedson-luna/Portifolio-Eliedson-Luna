import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
    return (
        <section id="Container" className="
        align-middle
        items-center 
        justify-items-center 
        h-[700px]
        mr-5
        ml-5
        mt-10
        mb-10 
        gap-16 
        font-[family-name:var(--font-geist-sans)]
        rounded
        "
        >
            {children}
        </section>
    );
}
