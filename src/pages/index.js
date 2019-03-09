import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/layout"
//import Article from "../components/article/article"
import heroImage from "../images/heroImage.jpg"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <img src={heroImage} alt="Hero Image" style={{ height: '80vh'}}/>
    </Layout>
  </div>
)

export default IndexPage
