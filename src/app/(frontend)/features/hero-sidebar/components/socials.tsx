import { CodepenIcon } from '../../../components/icons/codepen'
import { GithubIcon } from '../../../components/icons/github'
import { LinkedinIcon } from '../../../components/icons/linkedin'
import { XIcon } from '../../../components/icons/x'

export const Socials = () => {
  return (
    <ul className="flex gap-4 text-dim mt-auto" aria-label="Social media links" itemProp="sameAs">
      <li className="hover:text-white transition-colors">
        <a
          href="https://github.com/rawic"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon />
        </a>
      </li>
      <li className="hover:text-white transition-colors">
        <a
          href="https://linkedin.com/in/rafalwichowski"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon />
        </a>
      </li>
      <li className="hover:text-white transition-colors">
        <a
          href="https://codepen.io/rawic"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Codepen"
        >
          <CodepenIcon />
        </a>
      </li>
      <li className="hover:text-white transition-colors">
        <a
          href="https://x.com/rafalwichowski"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <XIcon />
        </a>
      </li>
    </ul>
  )
}
