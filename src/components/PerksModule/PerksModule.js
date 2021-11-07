import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import Perk from "./Perk"

const PerksModule = () => {
  //const technologies = ['nextjs', 'firebase', 'gatsby', 'contentful', 'react', 'jira', 'asana', 'mixpanel', 'hotjar', 'jest', 'material-ui', 'tailwind-css']
  return (
    <PerksModuleStyles>
      <h1>
        Technologies
        <span style={{ color: "var(--primary)" }}>.</span>
      </h1>
      <div className="container">
        <Perk>
          <StaticImage
            src="../../images/logos/javascript-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Javascript</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/react-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>React</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/redux-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Redux</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/material-ui-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Material UI</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/tailwindcss-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Tailwind CSS</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/cypress-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Cypress</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/netlify-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Netlify</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/gatsby-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Gatsby</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/trello-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Trello</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/jira-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Jira</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/mixpanel-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Mixpanel</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/asana-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Asana</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/firebase-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Firebase</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/slack-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Slack</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/bootstrap-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Bootstrap</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/sass-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Sass</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/wordpress-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Wordpress</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/figma-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Figma</p>
        </Perk>
        <Perk>
          <StaticImage
            src="../../images/logos/gsap-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <p>Gsap</p>
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
