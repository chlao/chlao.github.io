import React from "react"
import logo from "../images/logo.svg"

const Logo = ({className}) => {
  return (
    <img className={className} src={logo} alt="logo" />
  )
}

export default Logo
