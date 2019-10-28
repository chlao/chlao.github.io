import PropTypes from "prop-types"
import React from "react"

import NavHeading from "./navHeading"

import "./header.scss"

require("typeface-open-sans")

// TODO: Put this into the CMS
const headingNames = [
  {
    title: "About Me",
    href: "#about-me"
  },
  {
    title: "Experience",
    href: "#experience"
  },
  {
    title: "Skils",
    href: "#skills"
  },
  {
    title: "Hobbies",
    href: "#hobbies"
  }
]

const navHeadingElements = headingNames.map((heading) =>
  <NavHeading heading={heading} key={heading.title.toString()} />
);

const Header = ({ siteTitle }) => (
  <header>
    <img className="header__logo" src="http://via.placeholder.com/75x35" />
    <nav
      className="nav-menu"
    >
      { navHeadingElements }
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
