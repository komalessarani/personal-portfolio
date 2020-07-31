import React from 'react';
import '../css/Project.css';


function Project(){
   return(
   <div id="project" className="container">
        <div style={{position:'relative', width: '100%'}}>
            <h1 style={{color: 'black', fontSize:40}}>My Projects</h1>   
            <div className="columns">
              <div className="column">
                <div className ="card" onClick={() => { window.open("/2048", "_blank");}}>
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
            </div></div>
            <div className="column">
              <div className="card" onClick={()=> {window.open("https://github.com/komalessarani/UNC-Assignments/tree/master/COMP%20590/a6", "_blank")}}>
                <div className="card-image">
                  <figure className="image">
                    <img src={require('../assets/git_remake.png')} alt="git"/>
                  </figure>
                </div>
              <div className="card-content">
                <div className="content">
                  Recreation of the version control system, git, using Clojure
                  <br/>
                </div>
              </div>
              </div>
              </div>
              
          </div>
          <div className="columns">
          <div className="column">
                <div className ="card" onClick={() => { window.open("https://github.com/clairexsu/audioTyping", "_blank");}}>
                <div className="card-image">
                  <figure className="image">
                    <img src={require('../assets/audio_typing.png')} alt="audio typing"/>
                  </figure>
                </div>
              <div className="card-content">
                <div className="content">
                  Application that teaches visually impaired people how to type on a standard keyboard using React - needs
                  to be completed for rest of the keyboard
                  <br/>
                </div>
              </div>
            </div></div>
            <div className="column">
                <div className ="card" onClick={() => { window.open("https://github.com/isha300/cars-marketplace", "_blank");}}>
                <div className="card-image">
                  <figure className="image">
                    <img src={require('../assets/car.png')} alt="car marketplace app" style={{border: "1px solid black"}}/>
                  </figure>
                </div>
              <div className="card-content">
                <div className="content">
                Utilized Java and Android Studio to develop an application for android phones 
                that is similar to CarMax in that users can filter through cars and choose their favorite one (with teammate)
                  <br/>
                </div>
              </div>
            </div></div>
            </div>
        </div>
  </div>

    );
}



export default Project;