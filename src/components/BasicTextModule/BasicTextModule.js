import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = () => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
        <h2>
          Experienced Software Engineer with an MSc in Artificial Intelligence and Data Science.</h2>
        <p>
          Passionate about building high-performance, accessible, and responsive software using JavaScript/TypeScript to deliver seamless user experiences across all devices.
        </p>
        <p style={{ marginBottom: "60px" }}>
          Experienced in optimizing application performance, enhancing user interactions, and mentoring development teams.
        </p>
        <Button text="View Projects" as={Link} to="/projects" />
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
