import React from 'react'
import image from "./images/dev.png"
import '../App.css';
function HomePage() {
    const name = "Tiiroow"
    return (
        <div id='contact' style={{ backgroundColor: '#ffff' }}>
         <div className="navigation">
          <ul>
              <li><a href="#bio">Bio</a></li>
              <li><a href="#pro">Projects</a></li>
              <li><a href="#cm">Contact_Me</a></li>
              <li><a href="#skills">Skills</a></li>
          </ul>
          </div>
            <h1>Welcome To My Portofolio</h1>
            <div className="image-container">
            <img src={image} alt="" className="rounded-image" /> 
            </div>
            <p><span>Hello i am {name}, i am a web developer, i develope websites.</span> <br></br>
            Nowadays the web developing become an easy skill because of the help of the emerged technologies, <br></br>
            like the AI softwares including (chatGPT, BARD changed to Gemini, and more others). <br></br>
            I started learning web development when i become semester 5, because i see that web developing is an essential skill.
            From semester 5 to semester 6 it is about several monthes since i was started learning it.<br></br>
            <button className='btn'>My Projects</button>
            </p>
        </div>
    )
}

export default HomePage
