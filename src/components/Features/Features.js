import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ProjectsStyles } from "../Projects/ProjectsStyles"
import Project from "../Projects/Project"

const getProjects = graphql`
  query {
    featuredProjects: allContentfulPortfolioProjects(filter: {featured: {eq: true}}) {
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

const Features = () => {
  const response = useStaticQuery(getProjects)
  const projects = response.featuredProjects.edges

  return (
    <ProjectsStyles>
      <div className="features__container">
        <div className="features__container--scroll">
          {projects.map(({ node }) => {
            return <Project feature={node} key={node.contentful_id} featured={true} />
          })}
        </div>
      </div>
    </ProjectsStyles>
  )
}

export default Features
