import React from "react"

import "src/styles/skills.scss"

const Skills = () => (
  <section id="skills" className="skills">
    <div className="skills__outer section__outer">
      <div className="skills__heading-inner">
        <h2 className="skills__heading section__heading"> Skills </h2>
      </div>
      <div className="skills__text-inner">
        <div className="skills__group">
          <h3 className="skills__group-heading">Frontend</h3>
          <div className="skills__group-text">
            <p className="skills__skill">Javascript</p>
            <p className="skills__skill">Coffeescript</p>
            <p className="skills__skill">jQuery</p>
            <p className="skills__skill">Underscore</p>
            <p className="skills__skill">HTML</p>
            <p className="skills__skill">CSS</p>
            <p className="skills__skill">LESS</p>
            <p className="skills__skill">SASS</p>
            <p className="skills__skill">Bootstrap</p>
            <p className="skills__skill">Backbone Marionette</p>
            <p className="skills__skill">React</p>
          </div>
        </div>
        <div className="skills__group">
          <h3 className="skills__group-heading">Database</h3>
          <div className="skills__group-text">
            <p className="skills__skill">SQL</p>
            <p className="skills__skill">MySQL</p>
            <p className="skills__skill">PostgreSQL</p>
          </div>
        </div>
        <div className="skills__group">
          <h3 className="skills__group-heading">Version Control</h3>
          <div className="skills__group-text">
            <p className="skills__skill">git</p>
            <p className="skills__skill">Mercurial</p>
          </div>
        </div>
        <div className="skills__group">
          <h3 className="skills__group-heading">Analytics</h3>
          <div className="skills__group-text">
            <p className="skills__skill">VWO</p>
            <p className="skills__skill">Google Tag Manager</p>
            <p className="skills__skill">Woopra</p>
          </div>
        </div>
        <div className="skills__group">
          <h3 className="skills__group-heading">Backend</h3>
          <div className="skills__group-textt">
            <p className="skills__skill">Scala</p>
            <p className="skills__skill">Play Framework</p>
            <p className="skills__skill">Java</p>
            <p className="skills__skill">Ruby</p>
            <p className="skills__skill">Ruby on Rails</p>
            <p className="skills__skill">C++</p>
          </div>
        </div>
        <div className="skills__group">
          <h3 className="skills__group-heading">Templating</h3>
          <div className="skills__group-text">
            <p className="skills__skill">Scalate</p>
            <p className="skills__skill">Pug</p>
            <p className="skills__skill">Velocity</p>
            <p className="skills__skill">Embedded Ruby (ERB)</p>
          </div>
        </div>
        <div className="skills__group">
          <h3 className="skills__group-heading">API</h3>
          <div className="skills__group-textt">
            <p className="skills__skill">REST</p>
            <p className="skills__skill">SOAP</p>
          </div>
        </div>
        <div className="skills__group">
          <h3 className="skills__group-heading">Miscellaneous</h3>
          <div className="skills__group-text">
            <p className="skills__skill">Salesforce</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
