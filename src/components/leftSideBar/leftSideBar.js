import PropTypes from "prop-types"
import React from "react"

import "./leftSideBar.scss"

const LeftSideBar = ({headerOpenState, isDesktop}) => {
  const headerOpenClass = headerOpenState ? " left-sidebar--md-open" : ""
  const isDesktopClass = isDesktop ? " left-sidebar--lg" : " left-sidebar--md"

  return (
    <div className={`left-sidebar${headerOpenClass}${isDesktopClass}`}>
      <p className="left-sidebar__text left-sidebar__text--name">Christine Lao</p>
      <p className="left-sidebar__text left-sidebar__text--email">christinelao3o@gmail.com</p>
    </div>
  )
}

export default LeftSideBar

LeftSideBar.propTypes = {
  headerOpenState: PropTypes.bool,
  isDesktop: PropTypes.bool
}

LeftSideBar.defaultProps = {
  headerOpenState: false,
  isDesktop: false
}
