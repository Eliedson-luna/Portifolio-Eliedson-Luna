import { ReactNode } from "react";

export default function ContentWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="
            min-h-screen items-center block
            gap-10 
            last-of-type:gap-0 
            w-[90%] 
            mt-15
            ">
            {children}
        </div>
    )
}