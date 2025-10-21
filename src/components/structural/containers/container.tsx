type ContainerProps = React.HTMLAttributes<HTMLElement>;

export default function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <section
      {...props}
      className={`
        flex flex-col flex-nowrap
        align-middle justify-center
        max-h-[80vh]
        my-5 px-15 py-10
        bg-bg-cont
        border-2 border-border-cont rounded-md
        shadow-sm shadow-shadow-cont
        overflow-y-scroll
        ${className}
      `}
    >
      {children}
    </section>
  );
}