import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/layout"
import Article from "../components/article/article"
import heroImage from "../images/heroImage.jpg"
import codeImage from "../images/code.jpeg"
import girlImage from "../images/girl.jpeg"
import meetingImage from "../images/meeting.jpeg"
import pupilsImage from "../images/pupils.jpeg"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <img src={heroImage} alt="Hero Image" style={{ height: '80vh'}}/>
    </Layout>
    <div className="container">
      <div className="mt-5 d-flex flex-row flex-wrap justify-content-around">
        <Article title="Title" excerpt="lorem ipsumjllskhls" summary="ljlskjlskdl" link="https://www.orf.at" img={codeImage}></Article>
        <Article title="Title" excerpt="lorem ipsumjllskhls" summary="ljlskjlskdl" link="https://www.orf.at" img={girlImage}></Article>
        <Article title="Title" excerpt="lorem ipsumjllskhls" summary="ljlskjlskdl" link="https://www.orf.at" img={meetingImage}></Article>
        <Article title="Title" excerpt="lorem ipsumjllskhls" summary="ljlskjlskdl" link="https://www.orf.at" img={pupilsImage}></Article>
      </div>
    </div>
  </div>
)

export default IndexPage
