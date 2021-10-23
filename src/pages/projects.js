import * as React from "react"
import Layout from "../components/Layout"
import Features from "../components/Projects/Projects"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import { StaticImage } from "gatsby-plugin-image"

const projects = () => {
  return (
    <>
      <Seo title="Projects" />
      <Layout>
        <SimpleBanner title="All Projects">
          <StaticImage
            className="banner__image"
            src="../images/iphone-face-down.jpg"
            alt="Apple iPhone face down"
          />
        </SimpleBanner>
        <Features />
      </Layout>
    </>
  )
}

export default projects
