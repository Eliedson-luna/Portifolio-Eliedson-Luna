import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
    return (
        <section id="Container" className="
        w-[80vw]
        mt-[2vh]
        mb-[2vh]
        rounded
        text-[1.1rem]
        overflow-scroll
        "
        >
            {children}
        </section>
    );
}
