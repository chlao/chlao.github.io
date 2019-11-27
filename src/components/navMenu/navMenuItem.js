import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const NavMenuItem = ({ menuItem }) => (
  <Link
    to={menuItem.link}
    className="nav-menu__link"
    >
    {menuItem.heading}
  </Link>
)

NavMenuItem.propTypes = {
  heading: PropTypes.string,
}

// TODO: This should not exist if empty? Although, it shouldn't ever be empty
NavMenuItem.defaultProps = {
  heading: ``,
}

export default NavMenuItem
