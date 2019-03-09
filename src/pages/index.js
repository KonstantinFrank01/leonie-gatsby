import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/layout"
import Article from "../components/article/article"
import Typist from "../components/typist/Typist"
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
      {/* <div style={{}}>
        <Typist />
      </div> */}
    </Layout>
    <div className="container">
      <div className="mt-5 d-flex flex-row flex-wrap justify-content-around">
        <Article title="Blick in technologische Zukunft" 
                summary="Die Besucher lernen Leonie kennen - eine Sprachassistentin, die neben einer Stimme auch einen digitalen Körper hat." 
                excerptHeader="Schlossmuseum: Blick in technologische Zukunft" 
                excerpt="Die Besucher lernen Leonie kennen - eine Sprachassistentin, 
                die neben einer Stimme auch einen digitalen Körper hat. Leonie kann nicht nur auf Kommando tanzen
                , sondern auch Fragen beantworten, etwa über die technologischen Innovationen, 
                die auf uns zukommen, erklärt der Maturant Karsten Köhne. 
                In der HTL Leonding wurde Leonie von Schülern entwickelt."
                link="https://ooe.orf.at/news/stories/2957975/?fbclid=IwAR1woeeBFuToOVibSdHlwoRkSXZEZcKXG6wphbcmq9WR9W-F9zebeUEeqo4" 
                img={codeImage}>
        </Article>
        <Article title="Title" excerpt="lorem ipsumjllskhls" summary="ljlskjlskdl" link="https://www.orf.at" img={girlImage}></Article>
        <Article title="Title" excerpt="lorem ipsumjllskhls" summary="ljlskjlskdl" link="https://www.orf.at" img={meetingImage}></Article>
        <Article title="Title" excerpt="lorem ipsumjllskhls" summary="ljlskjlskdl" link="https://www.orf.at" img={pupilsImage}></Article>
      </div>
    </div>
  </div>
)

export default IndexPage
