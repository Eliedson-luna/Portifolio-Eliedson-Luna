type ContainerProps = React.HTMLAttributes<HTMLElement>;

export default function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <section
      {...props}
      className={`
        flex flex-col
        my-5 px-10 py-5
        rounded-sm
        ${className}
      `}
    >
      {children}
    </section>
  );
}