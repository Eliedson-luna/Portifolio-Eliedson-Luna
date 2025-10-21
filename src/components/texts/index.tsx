type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
    align?: 'left' | 'center' | 'right' | 'justify';
}

export function Paragraph({ children, className, align }: ParagraphProps) {
    const classProps = `text-[0.4rem] sm:text-[0.39rem] md:text-[0.49rem] lg:text-[0.7rem] ${className} text-${align} m-2`
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

export function Title({ type, children, className = "", ...rest }: TitleProps) {
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

type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
    type: 'tiniest' | 'tiny' | 'small' | 'medium' | 'big' | 'biggest';
    align?: 'left' | 'center' | 'right' | 'justify';
}

export function Text({ type, children, className = "", align, ...rest }: TextProps) {
    const textClass =
        type === "tiniest"
            ? `text-[0.4rem] sm:text-[0.39rem] md:text-[0.49rem] lg:text-[0.7rem] ${className} text-${align}`
            : type === "tiny"
                ? `text-[0.5rem] sm:text-[0.6rem] md:text-[0.7rem] lg:text-[0.8rem] ${className} text-${align}`
                : type === "small"
                    ? `text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] ${className} text-${align}`
                    : type === "medium"
                        ? `text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] ${className} text-${align}`
                        : type === "big"
                            ? `text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] ${className} text-${align}`
                            : type === 'biggest' ? `text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] ${className} text-${align}`
                                : "";
    return (
        <span className={textClass} {...rest}>
            {children}
        </span>
    )
}

