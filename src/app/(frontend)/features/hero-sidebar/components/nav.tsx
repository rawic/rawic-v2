export const Nav = () => {
  return (
    <nav aria-label="Main site navigation">
      <ul className="flex flex-col gap-4 text-tertiary uppercase text-xs leading-6 font-semibold">
        <li className="flex text-white before:content-['—'] before:mr-3 pointer-events-none">
          <a href="#" className="w-full">
            Experience
          </a>
        </li>
        <li className="flex hover:text-white transition-colors">
          <a href="#" className="w-full">
            Projects
          </a>
        </li>
        <li className="flex hover:text-white transition-colors">
          <a href="#" className="w-full">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  )
}
