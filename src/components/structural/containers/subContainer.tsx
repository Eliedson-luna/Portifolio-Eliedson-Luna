type ContainerProps = React.HTMLAttributes<HTMLElement>;
export default function SubContainer({ children, className = '', ...props }: ContainerProps) {
    return (
        <section
            {...props}
            className={`
                flex flex-col 
                justify-evenly
                h-60
                p-3 mx-5
                border-border-subcont border-b rounded-sm
        ${className}
      `}
        >
            {children}
        </section>
    );
}