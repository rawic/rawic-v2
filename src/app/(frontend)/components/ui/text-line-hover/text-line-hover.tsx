export const TextLineHover = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative inline before:bg-highlight before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out group-hover/text:before:origin-bottom-left group-hover/text:before:scale-x-100">
      {children}
    </span>
  )
}
