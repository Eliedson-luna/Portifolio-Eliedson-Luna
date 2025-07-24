type ContainerProps = React.HTMLAttributes<HTMLElement>; 

export default function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <section
      {...props}
      className={`
        mt-2
        mb-10
        rounded
        sm:text-[.7rem]
        md:text-[.8rem]
        lg:text-[0.9rem]
        overflow-x-scroll
        scroll-m-4
        ${className}
      `}
    >
      {children}
    </section>
  );
}