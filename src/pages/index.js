import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Home from "./home"
import Image from "../components/image"
import SEO from "../components/seo"

require('typeface-open-sans')
require('typeface-merriweather')

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
