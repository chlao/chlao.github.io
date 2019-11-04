import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import NavMenuItem from "./NavMenuItem"

import "./header.scss"

require("typeface-open-sans")

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulNavigationMenuItem(
          sort: {
            fields: position
             order: ASC
            }
          ){
          edges {
            node {
              heading
              link
            }
          }
        }
      }
    `
  )

  return (
    <header>
      <img className="header__logo" src="http://via.placeholder.com/75x35" />
      <nav
        className="nav-menu"
      >
        { data.allContentfulNavigationMenuItem.edges.map((edge) =>
          <NavMenuItem menuItem={edge.node} key={edge.node.heading} />
        ) }
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
