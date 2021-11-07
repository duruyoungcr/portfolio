import * as React from "react"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles>
      <form name="contact">
        <input placeholder="Your name" type="text" name="name" minLength="3" required />
        <input placeholder="Your email" type="email" name="email" required />
        <textarea style={{ resize: 'none' }} placeholder="Your message" name="message" rows="6" required></textarea>
        <button className="btn" type="submit">
          Send Message
        </button>
      </form>
    </ContactStyles>
  )
}

export default Contact
