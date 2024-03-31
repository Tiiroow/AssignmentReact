import React from 'react';
import javaImage from './images/java.png';
import javascriptImage from './images/js.png';
import csharpImage from './images/c#.png';
import pythonImage from './images/pyth.png';
import oracle from './images/oracle.png'
import sql from './images/sql.png'
import ps from './images/ps.png'
import il from './images/il.png'
import pr from './images/pr.png'

function Skills() {
    return (
        <div id='skills'>
            <h2 className='pro'>My Skills</h2>
            <p>My programming skills are not extensive, but I have learned many programming languages including:</p>
            <div className="skill-group">
                <div className="skill-item">
                    <img src={javaImage} alt="Java" className="skill-img" />
                    <p>JAVA</p>
                </div>
                <div className="skill-item">
                    <img src={javascriptImage} alt="JavaScript" className="skill-img" />
                    <p>JAVASCRIPT</p>
                </div>
                <div className="skill-item">
                    <img src={csharpImage} alt="C#" className="skill-img" />
                    <p>C#</p>
                </div>
                <div className="skill-item">
                    <img src={pythonImage} alt="Python" className="skill-img" />
                    <p>PYTHON</p>
                </div>
            </div>
            <div className="skill-group">
                <div className="skill-item">
                    <img src={oracle} alt="Oracle" className="skill-img" />
                    <p>ORACLE</p>
                </div>
                <div className="skill-item">
                    <img src={sql} alt="SQL" className="skill-img" />
                    <p>SQL</p>
                </div>
            </div>
            <div className="skill-group">
                <div className="skill-item">
                    <img src={ps} alt="Photoshop" className="skill-img" />
                    <p>PHOTOSHOP</p>
                </div>
                <div className="skill-item">
                    <img src={il} alt="Illustrator" className="skill-img" />
                    <p>ILLUSTRATOR</p>
                </div>
                <div className="skill-item">
                    <img src={pr} alt="Premiere Pro" className="skill-img" />
                    <p>PREMIERE PRO</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
