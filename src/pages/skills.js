import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SkillsGroup from "../components/skillsGroup/skillsGroup"

import "src/styles/skills.scss"

const Skills = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulSkillsSection(
          sort: {
            fields: position
            order: ASC
          }
        ){
          edges {
            node {
              skills {
                name
              }
              title
            }
          }
        }
      }
    `
  )

  return (
    <section id="skills" className="skills">
      <div className="skills__outer section__outer">
        <div className="skills__heading-inner">
          <h2 className="skills__heading section__heading"> Skills </h2>
        </div>
        <div className="skills__text-inner">
          {
            data.allContentfulSkillsSection.edges.map((edge) =>
              <SkillsGroup group={edge.node} key={edge.node.title} />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Skills
