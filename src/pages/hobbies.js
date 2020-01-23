import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Hobbies = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulHobbies {
          edges {
            node {
              description
            }
          }
        }
      }
    `
  )

  return (
    <section id="hobbies" className="hobbies">
      <div className="hobbies__outer section__outer">
        <div className="hobbies__heading-inner">
          <h2 className="section__heading"> Hobbies </h2>
        </div>
        <div className="hobbies__text-inner">
          <div className="hobbies__text">
          <p>{ data.allContentfulHobbies.edges[0].node.description }</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hobbies
