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

    .desc {
      font-size: 56px;
    }
    .tags {
      display: flex;
    }

    .tag {
      margin: 0 1rem;
      border-radius: 16px;
      padding: 0.5rem 1rem;
      background-color: yellow;
    }
    a {
      text-decoration: none;
    }
  }
`

const projectTemplate = ({ data }) => {
  const { source, live, description, title, image, tags } = data.project
  const projectImage = getImage(image)
  const projectTags = Object.entries(tags).filter(t => t[1] !== null).map(t => t[1])
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
          <p className="desc">{description}</p>
          <div className='links'>
            <a href={live} target="_blank" rel="noreferrer">
              <Button text={'Preview'} as={'span'} to={live} />
            </a>
            <a href={source} target="_blank" rel="noreferrer">
              <Button text={'Code'} as={'span'} to={source} />
            </a>
          </div>
          <div>
            <h3>Technologies Used</h3>
            <div className="tags">
              {projectTags.map((tag, index) => (
                <div className="tag" key={index}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
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
      tags {
        _1
        _2
        _3
        _4
        _5
        _6
      }
    }
  }
`

export default projectTemplate
