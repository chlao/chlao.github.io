import React from "react"
import ProfileImage from "../components/profileImage"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import "src/styles/aboutMe.scss"

const AboutMe = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulAboutMe {
          edges {
            node {
              text {
                json
              }
            }
          }
        }
      }
    `
  )

  const document = data.allContentfulAboutMe.edges[0].node.text.json

  return (
    <section id="about-me">
      <div className="about-me__outer section__outer">
        <div className="about-me__text-inner">
          <h2 className="section__heading"> About Me </h2>
          <div className="about-me__text">
            { documentToReactComponents(document) }
          </div>
        </div>
        <div className="about-me__image-inner">
          <ProfileImage />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
