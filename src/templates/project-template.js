import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import Button from "../components/Button/Button"

const ProjectTemplateStyles = styled.div`
  padding: var(--sectionPadding) var(--borderSpacing);
  background-color: #000;

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
    max-width: 200px;
    
    a {
      text-decoration: none;
    }
  }
`

const projectTemplate = ({ data }) => {
  const { source, live, description, title, image } = data.project
  const projectImage = getImage(image)
  return (
    <>
      <Seo title={title} />
      <Layout>
        <BannerModule
          title={title}
          source={source}
          live={live}
          enquire={false}
        >
          <GatsbyImage
            className="banner__image"
            image={projectImage}
            alt="Banner Image"
          />
        </BannerModule>
        <ProjectTemplateStyles>
          <h2 className="column">{description}</h2>
          <div className='links'>
            <a href={live} target="_blank" rel="noreferrer">
              <Button text={'Preview'} as={'span'} to={live} />
            </a>
            <a href={source} target="_blank" rel="noreferrer">
              <Button text={'Code'} as={'span'} to={source} />
            </a>
          </div>
          {/* <div>
            <h3>Technologies Used</h3>
          </div> */}
        </ProjectTemplateStyles>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: contentfulPortfolioProjects(contentful_id: { eq: $slug }) {
      title
      source
      live
      description
      image {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`

export default projectTemplate
