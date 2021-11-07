import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = () => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
        <h2>
          An engineering graduate with experience across various sectors having previously worked in the construction industry, banking sector, as well as the e-commerce sector.
        </h2>
        <p style={{ marginBottom: "60px" }}>
          Using Javascript primarily, I build webapps and websites that offer great performance,
          speed, accessibility and responsiveness across all devices. Thereby, giving users an excellent experience on any
          device.
        </p>
        <Button text="View Projects" as={Link} to="/projects" />
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
