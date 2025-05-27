import { Nav } from './components/nav'
import { Socials } from './components/socials'
import { ResumeLink } from './components/resume-link'
import { UserIntro } from './components/user-intro'

export const HeroSidebar = () => {
  return (
    <aside
      className="flex flex-col sticky top-0 pt-32 pb-12 h-dvh"
      role="complementary"
      aria-label="Personal introduction and site navigation"
      itemScope
      itemType="https://schema.org/Person"
    >
      <UserIntro />
      <ResumeLink />
      <Nav />
      <Socials />
    </aside>
  )
}
