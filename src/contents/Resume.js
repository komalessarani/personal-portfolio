import React from 'react';
import '../css/Resume.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faBriefcase, faLaptopCode, faAward, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery'; 
import resumeData from '../assets/resume_data';

function Resume(){
   return(
   <div id="resume" className="container">
        <div style={{position:'relative'}}>
            <h1 style={{margin: 0, padding: 0, color: 'black', fontSize:40, marginTop:'10%'}}>Experiences</h1>   
            <hr />
            <div className ="columns">
                <div className="column is-one-quarter">
                    <div className="menu">
                        <ul className="menu-list">
                            <li className="menu-item active" id="educ">
                                <a href={() => false} className="is-active"><span className="icon is-small"><FontAwesomeIcon icon={faSchool}></FontAwesomeIcon></span> <span className="text educ">Education</span></a>
                            </li>
                            <li className="menu-item" id="work">
                                <a href={() => false}><span className="icon is-small"><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></span> <span className="text employ">Employment</span></a>
                            </li>
                            <li className="menu-item" id="extra">
                                <a href={() => false}><span className="icon is-small"><FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon></span> <span className="text extra">Extracurriculars</span></a>
                            </li>
                            <li className="menu-item" id="honor">
                                <a href={() => false}><span className="icon is-small"><FontAwesomeIcon icon={faAward}></FontAwesomeIcon></span> <span className="text honor">Honors & Awards</span></a>
                            </li>
                            <li className="menu-item" id="full_resume">
                                <a href={() => false}><span className="icon is-small"><FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon></span> <span className="text honor">See Full Resume</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="root-content" style={{width: '100%'}}>
                </div>
            </div>                      
            <hr/>

        </div>
    </div>
    );
}

$(document).ready(function() {
    $(".root-content").append(Education())

    $('.menu-list li').on('click', function() {
        let active_tab = this.firstChild;
        $('.menu-list a').removeClass('is-active')
        $('.menu-list li').removeClass('active')
        $(active_tab).addClass('is-active')
        $(this).addClass('active')

        switch(this.id){
            case "educ":
                $(".root-content").empty()
                $(".root-content").append(Education())
                break;
            case "work":
                $(".root-content").empty()
                $(".root-content").append(Work())
                break;
            case "extra":
                $(".root-content").empty()
                $(".root-content").append(Extra())
                break;
            case "honor":
                $(".root-content").empty()
                $(".root-content").append(Honor())
                break;
            case "full_resume":
                $(".root-content").empty()
                $(".root-content").append(`<iframe src=${require('../assets/Essarani_Komal.pdf')} type="application/pdf" width="100%" height="480px"> </iframe>
                `)
                break;
            default:
                $(".root-content").empty()
                $(".root-content").append(Education())
                break;
        }
    });
  });

    const Education = () =>{
        let html = `<h2 style="color: black; text-align: center">Education</h2> <br/>`;
    resumeData.education.map(block =>
        html += 
        `<div class="columns content" style="margin-left: 2%">
                 <div class="column">
                     <strong>${block.name}</strong><br/>
                     <span style="color: black"><i>${block.subtitle}</i></span><br/>
                 </div>
                 <div class="column is-one-third">
                     <p>${block.date}</p>
                   </div>
             </div>
            <div style="margin-left: 3.5%">
            <ul class="list">
            ${block.extra_info.map((d) => `<li>${d}</li>`).join('')}
            </ul>
            </div>
            <hr style="width:100%; background-color:hsl(0, 0%, 96%); height:0.2px"/>`
        )
        return html;
    }

  const Work = () =>{
    let html = `<h2 style="color: black; text-align: center">Employment</h2> <br/>`;
    resumeData.employment.map(block =>
        html += 
        `<div class="columns content" style="margin-left: 2%">
                 <div class="column">
                     <strong>${block.name}</strong><br/>
                     <span style="color: black"><i>${block.subtitle}</i></span><br/>
                 </div>
                 <div class="column is-one-third">
                     <p>${block.date}</p>
                   </div>
             </div>
            <div style="margin-left: 3.5%">
            <ul class="list">
            ${block.extra_info.map((d) => `<li>${d}</li>`).join('')}
            </ul>
            </div>
            <hr style="width:100%; background-color:hsl(0, 0%, 96%); height:0.2px"/>`
        )
        return html;
  }

  const Extra = () =>{
      let html = `<h2 style="color: black; text-align:center">Extracurriculars</h2> <br/>`
      resumeData.extracurriculars.map(block =>
        html += 
        `<div class="columns content" style="margin-left: 2%">
                 <div class="column">
                     <strong>${block.name}</strong><br/>
                     <span style="color: black"><i>${block.subtitle}</i></span><br/>
                 </div>
                 <div class="column is-one-third">
                     <p>${block.date}</p>
                   </div>
             </div>
            <div style="margin-left: 3.5%">
            <ul class="list">
            ${block.extra_info.map((d) => `<li>${d}</li>`).join('')}
            </ul>
            </div>
            <hr style="width:100%; background-color:hsl(0, 0%, 96%); height:0.2px"/>`
        )
        return html;
    }

   const Honor = () =>{
     let html= `<h2 style="color: black; text-align:center">Honors and Awards</h2> <br/>`
     resumeData.honors.map(block =>
        html += 
        `<div class="columns content" style="margin-left: 2%">
                 <div class="column">
                     <strong>${block.name}</strong><br/>
                     <span style="color: black"><i>${block.subtitle}</i></span><br/>
                 </div>
                 <div class="column is-one-third">
                     <p>${block.date}</p>
                   </div>
             </div>
            <div style="margin-left: 3.5%">
            <ul class="list">
            ${block.extra_info.map((d) => `<li>${d}</li>`).join('')}
            </ul>
            </div>
            <hr style="width:100%; background-color:hsl(0, 0%, 96%); height:0.2px"/>`
        )
        return html;
    }

    
export default Resume;