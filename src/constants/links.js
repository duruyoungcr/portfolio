import * as React from "react"
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaLinkedin as Linkedin,
  FaGithub as Github,
} from "react-icons/fa"

export const menuItems = [
  {
    path: "/",
    text: "home",
  },
  {
    path: "/projects",
    text: "projects",
  },
  {
    path: "/blog",
    text: "blog",
  },
  {
    path: "/contact",
    text: "contact",
  },
  {
    path: "https://drive.google.com/file/d/1d9HtewVrMXDQ7VfNApSJ5v7bpdiCXM0f/view?usp=sharing",
    text: "resume"
  }
]

export const socialItems = [
  {
    path: "https://facebook.com/duruyoungcr",
    icon: <Facebook />,
  },
  {
    path: "https://twitter.com/duruyoungcr",
    icon: <Twitter />,
  },
  {
    path: "https://github.com/duruyoungcr",
    icon: <Github />,
  },
  {
    path: "https://linkedin.com/in/duruyoungcr",
    icon: <Linkedin />,
  },
]
