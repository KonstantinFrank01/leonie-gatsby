import React from 'react'
import Typist from 'react-typist'
import "./typist.css"
 
export default ({children}) => (
    <Typist avgTypingDelay={30} clasName="typist-container">
        <span className="typist-span-1" style={{fontSize: '2.5rem', zIndex: '10000', color: 'white'}}>Hallo, mein Name ist Leonie!</span><br />
        <span className="typist-span-2" style={{fontSize: '1.8rem', color: 'white'}}>Ich bin ein digitaler Spracherkennungs-Avatar <br/>und wurde von den Schülern<br/>der 
        HTL Leonding erschaffen</span>
    </Typist>
)