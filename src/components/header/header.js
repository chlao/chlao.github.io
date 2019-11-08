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
    <header class="header">
      <span class="icon-bars header__icon-menu"></span>
      <div class="left-sidebar">
        <p class="left-sidebar__text left-sidebar__text--name"> Christine Lao </p>
        <p class="left-sidebar__text left-sidebar__text--email">christinelao3o@gmail.com</p>
      </div>
      <img className="header__logo" src="http://via.placeholder.com/75x35" />
      <nav
        className="nav-menu"
      >
        { data.allContentfulNavigationMenuItem.edges.map((edge) =>
          <NavMenuItem menuItem={edge.node} key={edge.node.heading} />
        ) }
      </nav>
      <div class="links-to-additional-information">
        <a href="" class="links-to-additional-information__link links-to-additional-information__link--email">
          <span class="icon-envelope-o"></span>
        </a>
        <a href="" class="links-to-additional-information__link links-to-additional-information__linkk--linked-in">
          <span class="icon-linkedin-square"></span>
        </a>
        <a href="" class="links-to-additional-information__link links-to-additional-information__link--resume">Resume</a>
      </div>
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
