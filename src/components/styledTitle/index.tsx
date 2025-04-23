import React from "react";

type TitleProps = React.HTMLAttributes<HTMLSpanElement> & {
    type: "title" | "subTitle"
}

export default function StyledTitle({ type, children, className = "", ...rest }: TitleProps) {
    const baseClass =
        type === "title"
            ? "text-[1rem] font-bold"
            : type === "subTitle"
            ? "text-[0.8rem] font-semibold"
            : "";

    const combinedClass = `${baseClass} ${className}`;

    if (type === "title") return <h1 className={combinedClass} {...rest}>{children}</h1>;
    if (type === "subTitle") return <h2 className={combinedClass} {...rest}>{children}</h2>;

    return null;
}