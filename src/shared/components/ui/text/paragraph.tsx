type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
    align?: 'left' | 'center' | 'right' | 'justify';
}

export function Paragraph({ children, className, align = "left" }: ParagraphProps) {
    const alignTypes: Record<'left' | 'center' | 'right' | 'justify', string> = {
        justify: 'text-justify',
        left: 'text-left',
        right: 'text-right',
        center: 'text-center'
    }

    const classProps = `
            ${className} 
            ${alignTypes[align] ?? ''} 
            m-2
            text-text
            text-size-paragraph
            caret-transparent
        `

    return (
        <p className={classProps}
        >
            {children}
        </p>
    )
}
