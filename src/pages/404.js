import * as React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { Link } from "gatsby"
import Seo from "../components/SEO"

const Error404 = styled.section`
  background-color: var(--background);
  color: #fff;
  margin-top: 6rem;
  padding: 0 20px;
  @media (min-width: 1024px) {
    padding: 0 75px;
    margin-top: 12rem;
  } 
`

const Title = styled.h1`
  margin-top: 0;
  font-size: 32px;
  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`

const SubContent = styled.div`
  p {
    margin-bottom: 2.125rem;
  }
  @media (min-width: 768px) {
    grid-column: 2 / 3;
  }
`

const SubTitle = styled.h2`
  @media (min-width: 768px) {
    margin-top: 0;
  }
`

const error = () => {
  return (
    <>
      <Seo title="404" />
      <Layout>
        <Error404 className="section-padding">
          <Title>Oops!</Title>
          <SubContent>
            <SubTitle>The page you are looking for has been moved or no longer exists.</SubTitle>
            <p>
              Please choose another option from the menu above, or go
              home by clicking the button below.
            </p>
            <Link className="btn" to="/">
              Return Home
            </Link>
          </SubContent>
        </Error404>
      </Layout>
    </>
  )
}

export default error
