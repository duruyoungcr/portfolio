import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ProjectsStyles } from "./ProjectsStyles"
import Project from "./Project"

const getProjects = graphql`
  query {
    projects: allContentfulPortfolioProjects {
      edges {
        node {
          contentful_id
          description
          featured
          id
          live
          source
          title
        }
      }
    }
  }
`

const Features = () => {
  const response = useStaticQuery(getProjects)
  const projects = response.projects.edges

  return (
    <ProjectsStyles>
      <div className="features__container">
        <div className="features__container--scroll">
          {projects.map(({ node }) => {
            return <Project feature={node} key={node.contentful_id} />
          })}
        </div>
      </div>
    </ProjectsStyles>
  )
}

export default Features
