type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
    align?: 'left' | 'center' | 'right' | 'justify';
}

export function Paragraph({ children, className, align }: ParagraphProps) {
    const classProps = `
            ${className} 
            text-${align} 
            m-2
            text-text
            text-size-paragraph 
        `

    return (
        <p className={classProps}
        >
            {children}
        </p>
    )
}
