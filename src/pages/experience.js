import React from "react"

import "src/styles/experience.scss"

const Experience = () => (
  <section id="experience" className="experience">
    <div className="experience__outer section__outer">
      <div className="experience__heading-inner">
        <h2 className="section__heading"> Experience </h2>
      </div>
      <div className="experience__text-inner">
        <div className="experience__text">
          <div className="experience__entry">
            <h3 className="entry__company">Paper Culture</h3>
            <h4 className="entry__position-location">Software Engineer — Millbrae, CA</h4>
            <p className="entry__duration">June 2017 - Present</p>
            <ul className="entry__duties">
              <li className="entry__duty">Full-stack development of features for Paper Culture websites as well as internal tools</li>
              <li className="entry__duty">Front-end web applications with beautiful design</li>
              <li className="entry__duty">RESTful API development</li>
              <li className="entry__duty">High performance at every level from database to backend to frontend to network</li>
              <li className="entry__duty">Cloud deployments of internal- and external-facing services</li>
              <li className="entry__duty">DevOps: general management of infrastructure</li>
              <li className="entry__duty">Site monitoring</li>
              <li className="entry__duty">Cloud deployments</li>
              <li className="entry__duty">Internal servers and network</li>
              <li className="entry__duty">Security</li>
              <li className="entry__duty">Help non-engineering employees of Paper Culture with day-to-day issues arising from use of tools and infrastructure</li>
              <li className="entry__duty">Mentor peers </li>
              <li className="entry__duty">Lead projects </li>
              <li className="entry__duty">Engage in a code review process as both a reviewer and a reviewee as both a way to maintain code reliability, scalability, and readability</li>
            </ul>
          </div>
          <div className="experience__entry">
            <h3 className="entry__company">TapSense</h3>
            <h4 className="entry__position-location">Software Engineer — San Francisco, CA</h4>
            <p className="entry__duration">November 2016 - June 2017</p>
            <ul className="entry__duties">
              <li className="entry__duty">Primarily responsible for frontend web development using Backbone, Underscore, jQuery, etc. while occasionally dipping into the Java backend</li>
              <li className="entry__duty">Design and implement data reporting and ads management tools essential to the ads ops team’s daily operations</li>
              <li className="entry__duty">Collaborate with ad ops, providing technical support, and designing and implementing features based on their needs</li>
              <li className="entry__duty">Refactor UX/UI on current existing web tools to improve ease of use and productivity</li>
              <li className="entry__duty">Plan and create several ad templates using HTML, CSS, and/or canvas for the automation of ad creation</li>
              <li className="entry__duty">Identify and eliminate bugs throughout the codebase</li>
              <li className="entry__duty">Write Python scripts to automate data collection and display</li>
              <li className="entry__duty">Improve performance and code efficiency related to slow website behavior and infrastructure issues</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Experience
