type ContainerProps = React.HTMLAttributes<HTMLElement>;
export default function SubContainer({ children, className = '', ...props }: ContainerProps) {
    return (
        <section
            {...props}
            className={`
                flex flex-col 
                align-middle
                justify-around
                h-60
                p-3 mx-5
                bg-bg-subcont
                border-border-subcont border-2 rounded-sm
        ${className}
      `}
        >
            {children}
        </section>
    );
}