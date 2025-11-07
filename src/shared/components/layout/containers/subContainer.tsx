type ContainerProps = React.HTMLAttributes<HTMLElement>;
export default function SubContainer({ children, className = '', ...props }: ContainerProps) {
    return (
        <section
            {...props}
            className={`
                flex flex-col 
                justify-evenly
                min-h-25
                p-2 mx-5
                rounded-sm
        ${className}
      `}
        >
            {children}
        </section>
    );
}