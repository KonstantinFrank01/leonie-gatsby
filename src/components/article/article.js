import React from "react"
import "./article.css"

const Article = ({ img, title, summary, excerpt, link }) => (
    <div class="wrapper">
        <div class="zoom-effect-container">
            <div class="image-card">
                <img src={ img } alt="Bild"/>
            </div>
        </div>
        <div class="text">
            <span >{ title }</span>
            <br />
            <span >{ summary }</span>
        </div>
        <div class="overlay">
            <span>{ excerpt }</span>
            <a type="button" className="btn btn-primary" href={link}>Read Article</a>
        </div>
    </div>
)

export default Article