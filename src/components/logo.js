import React from "react"
import PropTypes from "prop-types"
import logo from "../images/logo.svg"

const Logo = ({className}) => {
  return (
    <img className={className} src={logo} alt="logo" />
  )
}

export default Logo

Logo.propTypes = {
  className: PropTypes.string
}
