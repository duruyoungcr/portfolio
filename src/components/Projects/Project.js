import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Feature = ({ feature, featured }) => {
  const { contentful_id,
    description,
    image,
    title } = feature
  const projectImage = getImage(image)
  return (
    <aside className="features__item">
      <Link to={`/projects/${contentful_id}`}>
        <GatsbyImage
          className="features__item--img"
          image={projectImage}
          alt="Projects Image"
        />
        <div className="features__item--content">
          {title && <h2>{title}</h2>}
          {description && !featured && <p>{description}</p>}
          <Button text="Read More" as="span" />
        </div>
      </Link>
    </aside>
  )
}

export default Feature
