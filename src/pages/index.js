import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Home from "./home"
import AboutMe from "./aboutMe"
import Experience from "./experience"
import Skills from "./skills"
import Hobbies from "./hobbies"
import Logo from '../components/logo'

require('typeface-open-sans')
require('typeface-merriweather')

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Logo className="logo logo--sticky" />
    <AboutMe />
    <Experience />
    <Skills />
    <Hobbies />
  </Layout>
)

export default IndexPage
