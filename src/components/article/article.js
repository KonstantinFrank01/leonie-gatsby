import React from "react"
import "./article.css"

const Article = ({ img, title, summary, excerptHeader, excerpt, link }) => (
    <div class="wrapper">
        <div class="zoom-effect-container">
            <div class="image-card">
                <img src={ img } alt="Bild"/>
            </div>
        </div>
        <div class="white-box-text">
            <div class="text">
                <span class="title">{ title }</span>
                <br />
                <span class="summary">{ summary }</span>
            </div>
        </div>
        <div class="overlay">
            <span class="excerptHeader">{ excerptHeader }</span><br/>
            <div class="excerpt">
                <span>{ excerpt }</span>
            </div>
            <div class="btn-container">
                <a type="button" className="btn btn-primary" href={link}>Read Article</a>
            </div>
        </div>
    </div>
)

export default Article