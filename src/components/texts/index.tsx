type TextProps = React.HTMLAttributes<HTMLSpanElement>

export function Text({ children, className }: TextProps) {
    const classProps = `text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] ${className}`
    return (
        <span className={classProps}>
            {children}
        </span>
    )
}

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>

export function Paragraph({ children, className }: ParagraphProps) {
    const classProps = `text-[0.4rem] sm:text-[0.4rem] md:text-[0.43rem] lg:text-[0.8rem] ${className}`
    return (
        <p className={classProps}
        >
            {children}
        </p>
    )
}

type TitleProps = React.HTMLAttributes<HTMLSpanElement> & {
    type: "title" | "subTitle"
}

export function StyledTitle({ type, children, className = "", ...rest }: TitleProps) {
    const baseClass =
        type === "title"
            ? " text-[0.9rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem]"
            : type === "subTitle"
            ? "text-[0.7rem] sm:text-[0.6rem] md:text-[0.7rem] lg:text-[0.8rem]"
            : "";

    const combinedClass = `${baseClass} ${className}`;

    if (type === "title") return <h1 className={combinedClass} {...rest}>{children}</h1>;
    if (type === "subTitle") return <h2 className={combinedClass} {...rest}>{children}</h2>;

    return null;
}