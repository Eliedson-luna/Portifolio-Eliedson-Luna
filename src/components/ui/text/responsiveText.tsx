type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
    textSize: 'tiniest' | 'tiny' | 'small' | 'medium' | 'big' | 'biggest';
    align?: 'left' | 'center' | 'right' | 'justify';
}

export function ResponsiveText({ textSize, children, className = "", align = "left", ...rest }: TextProps) {
    const sizes = {
        tiniest: "text-size-tiniest",
        tiny: "text-size-tiny",
        small: "text-size-small",
        medium: "text-size-medium",
        big: "text-size-big",
        biggest: "text-size-biggest",
        default: "text-size-medium",
    };

    const size = sizes[textSize as keyof typeof sizes] || sizes.default;

    const alignClass =
        align === "center"
            ? "text-center"
            : align === "right"
                ? "text-right"
                : align === "justify"
                    ? "text-justify"
                    : "text-left";

    return (
        <span className={`${size} ${alignClass} ${className} text-text`} {...rest}>
            {children}
        </span>
    );
}

