import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/layout"
import Article from "../components/article/article"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div style={{ backgroundColor: 'grey', height: '80vh' }}></div>
    </Layout>
  </div>
)

export default IndexPage
