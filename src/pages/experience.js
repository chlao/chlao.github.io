import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ExperienceEntry from "../components/experienceEntry/experienceEntry"

import "src/styles/experience.scss"

const Experience = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulJobExperienceEntry {
          edges {
            node {
              company
              jobTitle
              location
              duration
              description {
                json
              }
            }
          }
        }
      }
    `
  )

  return (
    <section id="experience" className="experience">
      <div className="experience__outer section__outer">
        <div className="experience__heading-inner">
          <h2 className="section__heading"> Experience </h2>
        </div>
        <div className="experience__text-inner">
          <div className="experience__text">
            {
              data.allContentfulJobExperienceEntry.edges.map((edge) =>
                <ExperienceEntry jobEntry={edge.node} key={edge.node.company} />
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
