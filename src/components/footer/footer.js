import React from "react"

import "./footer.scss"

const Footer = () => {
  return (
    <footer>
      <p className="footer__created-by">Created by Christine Lao</p>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
