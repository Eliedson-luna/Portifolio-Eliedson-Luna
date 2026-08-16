'use client'

import LunaSvg from "@/shared/components/animations/luna-svg/lunaSvg"

export default function Loading(): React.ReactNode {
    return (
        <div className="h-screen items-center w-full flex justify-center">
            <LunaSvg />
        </div>
    )

}
