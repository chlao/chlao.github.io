import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Logo = ({className}) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLogo {
        edges {
          node {
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <img className={className}
         src={data.allContentfulLogo.edges[0].node.image.file.url}
         alt="logo" />
  )
}

export default Logo

Logo.propTypes = {
  className: PropTypes.string
}
