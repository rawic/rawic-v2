export const Experience = () => {
  return (
    <article itemScope itemType="https://schema.org/OrganizationRole">
      <header>
        <p>
          <time dateTime="2018">2018</time> — <span>Present</span>
        </p>
        <h3 itemProp="roleName">Senior Engineer</h3>
        <p>
          <span itemProp="memberOf">RAWIC - Rafał Wichowski</span> •
          <span itemProp="location">Warsaw</span>
        </p>
      </header>

      <section itemProp="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </section>

      <footer>
        <ul>
          <li>
            <span itemProp="skills">JavaScript</span>
          </li>
          <li>
            <span itemProp="skills">TypeScript</span>
          </li>
          <li>
            <span itemProp="skills">Storybook</span>
          </li>
          <li>
            <span itemProp="skills">Next.js</span>
          </li>
          <li>
            <span itemProp="skills">HTML & CSS</span>
          </li>
        </ul>
      </footer>
    </article>
  )
}
