import React from 'react';
import "../css/About.css"

function About(){

   return(
   <div id="about" className="container" style={{}}>
        <div>
            <h1 style={{color: 'black', fontSize:40}}>About Me</h1>     
            <div className="columns">
                <div className="column">
                    <p>Hello! I'm Komal, a Software Engineer at Oracle! 
                        I am also an alumna of University of North Carolina at Chapel Hill, where I received both my B.S. in Computer Science with a 
                        minor in Statistics and Analytics, as well as my M.S. in Computer Science! So I am a die hard
                        UNC Chapel Hill Basketball fan... Go Heels!!</p> <br/>
                    <p>
                        I enjoy learning new technologies and their implementations, whether it's a mobile application, website, 
                        data science, or anything else! It's really fascinating to me how impactful technology can be and my goal is
                        to apply my skills in a manner that helps our community someway or another!</p> <br/>
                        <p> I've acquired important skills throughout my education and working career!
                    </p><br/>
                    <p>
                    Some of the recent technologies I've used are:                    </p>
                    <div className="columns">
                        <div className="column is-one-quarter is-narrow">
                        <ul className="tech" style={{listStyleType:"square", listStylePosition:"inside"}}>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            {/* <li>Racket</li> */}
                        </ul>
                        </div>
                        <div className="column">
                        <ul className="tech" style={{listStyleType:"square", listStylePosition:"inside"}}>
                            <li>HTML/CSS</li>
                            <li>React.js</li>
                            <li>Neo4j.js</li>
                            {/* <li>Clojure</li>
                            <li>Angular.js</li> */}
                        </ul>
                        </div>
                    </div>

                </div>
                <div className="column is-one-third" style={{textAlign:'center'}}>
                    <img src={require('../assets/me.JPG')} alt="me" width="200px"/>
                </div>
            </div>
            
        </div>
    </div>
    );
}



export default About;