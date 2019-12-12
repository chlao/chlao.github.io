import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Home from "./home"
import SEO from "../components/seo"

import AboutMe from "./aboutMe"

require('typeface-open-sans')
require('typeface-merriweather')

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <img className="logo" src="http://via.placeholder.com/75x35" />
    <AboutMe />
  </Layout>
)

export default IndexPage
