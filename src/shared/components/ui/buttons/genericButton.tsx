import { ReactNode } from "react";
import { SubTitle } from "../text/title";

export default function GenericButton({ text, onPress, children }: { text?: string, onPress?: () => void, children?: ReactNode }) {
    return (
        <button
            className="
                       mt-4 
                       py-2 px-4 
                       rounded-xl
                       cursor-pointer
                       active:scale-100
                       subContainer
                       border
                       group
                       "
            onClick={onPress}
        >
            {text && <SubTitle>{text}</SubTitle>} {children}
        </button>
    )
}