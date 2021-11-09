import { useStaticQuery, graphql } from "gatsby"

export const UseSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            twitterUsername
            siteUrl
            keywords
            image
          }
        }
      }
    `
  )

  return site.siteMetadata
}
