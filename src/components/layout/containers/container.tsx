type ContainerProps = React.HTMLAttributes<HTMLElement>;

export default function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <section
      {...props}
      className={`
        flex flex-col
        justify-evenly
        my-5 px-10 py-5
        rounded-sm
        border-b border-border-cont
        bg-bg-cont
        ${className}
      `}
    >
      {children}
    </section>
  );
}