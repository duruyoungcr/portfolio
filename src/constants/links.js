import * as React from "react"
import {
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
    path: "/contact",
    text: "contact",
  },
  {
    path: "https://drive.google.com/file/d/1v4TSrRbsscqvbUbP2xoUeTlc9PzIHlNh/view?usp=sharing",
    text: "resume"
  }
]

export const socialItems = [
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
