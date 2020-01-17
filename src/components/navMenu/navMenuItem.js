import PropTypes from "prop-types"
import React from "react"

const NavMenuItem = ({ menuItem }) => (
  <a
    href={menuItem.link}
    className="nav-menu__link"
    >
    {menuItem.heading}
  </a>
)

NavMenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired,
}

export default NavMenuItem
