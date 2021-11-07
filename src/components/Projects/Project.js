import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Feature = ({ feature }) => {
  const { contentful_id,
    image,
    title } = feature
  const projectImage = getImage(image)
  return (
    <div className="features__item">
      <Link to={`/projects/${contentful_id}`}>
        <GatsbyImage
          className="features__item--img"
          image={projectImage}
          alt="Projects Image"
        />
        <div className="features__item--content">
          {title && <h2 style={{ textTransform: 'capitalize' }}>{title}</h2>}
          <Button text="View Project" as="span" />
        </div>
      </Link>
    </div>
  )
}

export default Feature
