import React from "react"

import "./leftSideBar.scss"

const LeftSideBar = ({ headerOpenState }) => {
  return (
    <div className={`left-sidebar${headerOpenState ? " left-sidebar--open" : ""}`}>
      <p className="left-sidebar__text left-sidebar__text--name">Christine Lao</p>
      <p className="left-sidebar__text left-sidebar__text--email">christinelao3o@gmail.com</p>
    </div>
  )
}

export default LeftSideBar
