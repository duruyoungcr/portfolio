import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ProjectsListStyles } from "./ProjectsListStyles"
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
          image {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`

const ProjectsList = () => {
  const response = useStaticQuery(getProjects)
  const projects = response.projects.edges

  return (
    <ProjectsListStyles>
      <div className="features__container">
        <div className="features__container--scroll">
          {projects.map(({ node }) => {
            return <Project feature={node} key={node.contentful_id} />
          })}
        </div>
      </div>
    </ProjectsListStyles>
  )
}

export default ProjectsList
