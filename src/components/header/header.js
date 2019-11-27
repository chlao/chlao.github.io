import PropTypes from "prop-types"
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import LeftSideBar from '../leftSideBar/leftSideBar'
import LinksToAdditionalInformation from '../linksToAdditionalInformation/linksToAdditionalInformation'
import NavMenuItem from "./NavMenuItem"

import "./header.scss"

require("typeface-open-sans")

const Header = () => {
  const [open, setOpen] = useState(false);

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
    <header className={`header${open ? " header--open" : ""}`} >
      <span className={`header__icon-menu ${open ? "icon-close" : "icon-bars"}`} onClick={() => { console.log(open); setOpen(!open)}}></span>
      <LeftSideBar headerOpenState={open}/>
      <img className="header__logo" src="http://via.placeholder.com/75x35" />
      <nav
        className={`nav-menu${open ? " nav-menu--open" : ""}`}
      >
        { data.allContentfulNavigationMenuItem.edges.map((edge) =>
          <NavMenuItem menuItem={edge.node} key={edge.node.heading} />
        ) }
      </nav>
      <LinksToAdditionalInformation headerOpenState={open}/>
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
