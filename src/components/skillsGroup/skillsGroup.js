import React from "react"
import PropTypes from "prop-types"

import "./skillsGroup.scss"

const SkillsGroup = ({ group }) => {
  return (
    <div className="skills__group">
      <h3 className="skills__group-heading">{ group.title }</h3>
      <div className="skills__group-text">
        {
          group.skills.map((skill) =>
            <p className="skills__skill" key={skill.name}>{ skill.name }</p>
          )
        }
      </div>
    </div>
  )
}

export default SkillsGroup

SkillsGroup.propTypes = {
  group: PropTypes.shape({
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    )
  })
}
