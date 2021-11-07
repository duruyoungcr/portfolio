import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import Blog from '../components/Blog/Blog'

const blog = () => {
  return (
    <>
      <Seo title="Blog" />
      <Layout>
        <SimpleBanner title="Blog">
          <StaticImage
            className="banner__image"
            src="../images/blog-image.jpg"
            alt="Blog Image"
            layout="fullWidth"
            placeholder="blurred"
          />
        </SimpleBanner>
        <Blog />
      </Layout>
    </>
  )
}

export default blog
