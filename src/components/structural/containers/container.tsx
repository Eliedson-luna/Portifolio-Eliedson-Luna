type ContainerProps = React.HTMLAttributes<HTMLElement>;

export default function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <section
      {...props}
      className={`
        flex flex-col
        align-middle justify-center
        max-h-[80vh]
        my-5 px-15 py-10
        overflow-y-scroll
        bg-bg-cont
        border border-border-cont
        ${className}
      `}
    >
      {children}
    </section>
  );
}