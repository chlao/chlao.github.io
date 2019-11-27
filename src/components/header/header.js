import PropTypes from "prop-types"
import React, { useState } from "react"

import LeftSideBar from '../leftSideBar/leftSideBar'
import NavMenu from '../navMenu/navMenu'
import LinksToAdditionalInformation from '../linksToAdditionalInformation/linksToAdditionalInformation'

import "./header.scss"

require("typeface-open-sans")

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`header${open ? " header--open" : ""}`} >
      <span className={`header__icon-menu ${open ? "icon-close" : "icon-bars"}`} onClick={() => { setOpen(!open)}}></span>
      <LeftSideBar headerOpenState={open}/>
      <img className="header__logo" src="http://via.placeholder.com/75x35" />
      <NavMenu headerOpenState={open}/>
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
