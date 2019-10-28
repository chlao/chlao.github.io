import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const NavHeading = ({ heading }) => (
  <Link
    to={heading.href}
    className="nav-menu__link"
    >
    {heading.title}
  </Link>
)

NavHeading.propTypes = {
  heading: PropTypes.string,
}

// TODO: This should not exist if empty? Although, it shouldn't ever be empty
NavHeading.defaultProps = {
  heading: ``,
}

export default NavHeading
