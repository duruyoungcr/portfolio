import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"

const ProjectTemplateStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: var(--sectionPadding) var(--borderSpacing);
  background-color: #000;

  .column {
    flex: 0 0 100%;

    @media (min-width: 768px) {
      flex-basis: 50%;

      &:nth-child(1) {
        padding-right: 20px;
      }

      &:nth-child(2) {
        padding-left: 20px;
      }

      > * {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    > * {
      &:first-child {
        margin-top: 0;
      }
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
          <div className="column">{description}</div>
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
