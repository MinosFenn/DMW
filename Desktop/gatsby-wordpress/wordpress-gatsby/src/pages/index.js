import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroSlider from "../components/index/HeroSlider"
import CTAImages from "../components/index/CTAImages"
import LatestTrend from "../components/index/LatestTrend"
import Citat from "../components/index/Citat.js"
import About from "../components/index/About"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['DNAgency', 'Digital', 'Marketing', 'Agency']} />
    <HeroSlider />
    <CTAImages />
    <LatestTrend />
    <Citat />
    <About />
  </Layout>
)

export default IndexPage
