import React from "react"
import ProfileImage from "../components/profileImage"

import "src/styles/aboutMe.scss"

const AboutMe = () => (
  <section className="about-me">
    <div className="about-me__outer section__outer">
      <div className="about-me__text-inner">
        <h2 className="section__heading"> About Me </h2>
        <div className="about-me__text">
          <p> I grew up in San Francisco . After graduating from the University
          of San Diego, California in 2016 with a B.S. in Computer Engineering,
          I returned to San Francisco, where I’m currently based. </p>
          <p> I aspire to build solutions that are beautiful inside and out.
          I started out in front-end engineering because I want to build and
          design products that people appreciated aesthetically while providing
          as easy user experience. As I progressed in my career as a software
          engineer, I sought out to be a more versatile developer. I started
          tackling challenges on the backend as well. I love architecting elegant
          pieces of functionality to be effective while maintaining important
          qualities such as security and efficiency. </p>
          <p> I am well-rounded engineer that has knowledge of both the direct user
          experience on the front-end as well as the infrastructure on the
          backend used to support that experience. </p>
        </div>
      </div>
      <div className="about-me__image-inner">
        <ProfileImage />
      </div>
    </div>
  </section>
)

export default AboutMe
