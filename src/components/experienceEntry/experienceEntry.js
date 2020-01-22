import React from "react"
import PropTypes from "prop-types"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import "./experienceEntry.scss"

const ExperienceEntry = ({ jobEntry }) => {
  const renderOptions = {
    renderNode: {
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="entry__duty">{children}</li>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="entry__duties">{children}</ul>,
    },
  }

  return (
    <div className="experience__entry">
      <h3 className="entry__company">{jobEntry.company}</h3>
      <h4 className="entry__position-location">{`${jobEntry.jobTitle} — ${jobEntry.location}`}</h4>
      <p className="entry__duration">{jobEntry.duration}</p>
      { documentToReactComponents(jobEntry.description.json, renderOptions) }
    </div>
  )
}

export default ExperienceEntry

ExperienceEntry.propTypes = {
  jobEntry: PropTypes.shape({
      company: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      description: PropTypes.shape({
        json: PropTypes.shape({
          data: PropTypes.object.isRequired,
          content: PropTypes.arrayOf(PropTypes.object.isRequired),
          nodeType: PropTypes.string.isRequired
        })
      })
    })
}
