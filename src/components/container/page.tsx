import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
    return (
        <section id="Container" className="
        w-[80vw]
        max-h-[60vh]
        mt-2
        mb-2
        rounded
        sm:text-[.7rem]
        md:text-[.8rem]
        lg:text-[9.rem]
        overflow-scroll
        "
        >
            {children}
        </section>
    );
}
