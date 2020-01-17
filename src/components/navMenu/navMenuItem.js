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
  heading: PropTypes.string,
}

// TODO: This should not exist if empty? Although, it shouldn't ever be empty
NavMenuItem.defaultProps = {
  heading: ``,
}

export default NavMenuItem
