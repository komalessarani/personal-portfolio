import React from 'react';
import "../css/Contact.css"


function Contact(){
    return(
        <div id="contact" className="container">
            <div style={{position:'relative', width: '100%'}}>
                <h1 style={{color: 'black', fontSize:40}}>Contact Me</h1><br/>
                <form action="https://send.pageclip.co/jr1smtDkNHnL5Cmxy6ttyEQKcCSpDQSx/website_contacts" class="pageclip-form" method="post">
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">From</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control is-expanded">
                                    <input className="input" type="text" name="name"placeholder="Name" />
                                </p>
                            </div>
                            <div className="field">
                                <p className="control is-expanded">
                                    <input className="input" type="email" name="email"placeholder="Email" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Subject</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <div className="control">
                                <input className="input" type="text" name="subject" placeholder="e.g. Partnership opportunity" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Message</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <textarea className="textarea" placeholder="Type your message here!" name="body"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label">
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <button className="button pageclip-form__submit is-primary" type="submit">
                                    Send message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div><br/>
        </div>
    );
}

export default Contact;