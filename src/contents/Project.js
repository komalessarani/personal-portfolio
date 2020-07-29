import React from 'react';
import '../css/Project.css';


function Project(){
   return(
   <div id="project" className="container">
        <div style={{position:'relative', width: '100%'}}>
            <h1 style={{color: 'black', fontSize:40}}>My Projects</h1>   <br/>  
              <div className="card" onClick={window.open("/2048")} style={{width:'80%'}}>
                <div className="card-image">
                  <figure className="image">
                    <img src={require('../assets/2048pic.png')} alt="2048"/>
                  </figure>
                </div>
              <div className="card-content">
                <div className="content">
                  Recreation of the popular 2048 game using JavaScript and jQuery
                  <br/>
                </div>
              </div>
            </div>
          </div>
  </div>

    );
}



export default Project;