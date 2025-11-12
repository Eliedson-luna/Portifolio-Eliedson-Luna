type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
    textSize?: 'tiniest' | 'tiny' | 'small' | 'medium' | 'big' | 'biggest';
    align?: 'left' | 'center' | 'right' | 'justify';
}

export function ResponsiveText({ textSize = "medium", children, className = "", align = "left", ...rest }: TextProps) {
    const sizes = {
        tiniest: "text-size-tiniest",
        tiny: "text-size-tiny",
        small: "text-size-small",
        medium: "text-size-medium",
        big: "text-size-big",
        biggest: "text-size-biggest",

    };

    const size = sizes[textSize as keyof typeof sizes];

    const aligns = {
        left: "text-left",
        right: "text-right",
        justify: "text-justify",
        center: 'text-center',
    }
    const alignment = aligns[align as keyof typeof aligns]

    return (
        <span className={`${size} ${alignment} ${className} text-text caret-transparent`} {...rest}>
            {children}
        </span>
    );
}

