type TitleProps = React.HTMLAttributes<HTMLSpanElement>

export function Title({ children, className = "", ...rest }: TitleProps) {

    const combinedClass = `${className} text-text-title text-size-title`;

    return <h1 className={combinedClass} {...rest}>{children}</h1>;
}

export function SubTitle({ children, className = "", ...rest }: TitleProps) {
    
    const combinedClass = `${className} text-text-subtitle text-size-subtitle`;

    return <h2 className={combinedClass} {...rest}>{children}</h2>;
}