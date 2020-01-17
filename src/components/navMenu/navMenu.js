import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import NavMenuItem from "./navMenuItem"

import "./navMenu.scss"

const NavMenu = ({ headerOpenState }) => {
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
    <nav
      className={`nav-menu${headerOpenState ? " nav-menu--open" : ""}`}
    >
      { data.allContentfulNavigationMenuItem.edges.map((edge) =>
        <NavMenuItem menuItem={edge.node} key={edge.node.heading} />
      ) }
    </nav>
  )
}

export default NavMenu

NavMenu.propTypes = {
  headerOpenState: PropTypes.bool
}

NavMenu.defaultProps = {
  headerOpenState: false
}
