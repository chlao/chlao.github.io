import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Home from "./home"
import AboutMe from "./aboutMe"
import Experience from "./experience"
import Skills from "./skills"

require('typeface-open-sans')
require('typeface-merriweather')

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <img className="logo" src="http://via.placeholder.com/75x35" />
    <AboutMe />
    <Experience />
    <Skills />
  </Layout>
)

export default IndexPage
