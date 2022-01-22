import React from 'react'
import github from '../assets/images/github.gif'
import linkedin from '../assets/images/linkedin.gif'
import gmail from '../assets/images/gmail.gif'
import handshake from '../assets/images/Rectangle.png'


import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {


    const [state, handleSubmit] = useForm("mdobawdz");

    // if (state.succeeded) {

    // }



    return (
        <div id='contact'>

            <div className='contact-container'>
                <span className='contact-title'>
                    <h2>Let's</h2> <img className='handshake' src={handshake} alt="" /> <h2>Talk</h2>
                </span>

                <div className='form-line-links'>

                    <form onSubmit={handleSubmit} className='form-container' action="" id="" >
                        <h3 style={{ color: "white" }}>FeedBack</h3>

                        <input
                            required
                            type="text" name=" Name" id=""
                            placeholder='Name'
                        />

                        <input
                            required
                            type="email" name="Email" id=""
                            placeholder='Email'
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <textarea
                            required
                            type="text" name="Message" id=""
                            placeholder='Message'
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button type='submit' className='submit'>Sumbit</button>

                    </form>

                    <div className='line'></div>

                    <div className='social-media'>
                        <ul className='social-media-links'>
                            <li> <a target='_blank' href="https://github.com/vinayyellaram" className='github-icon'><img src={github} alt="" /></a>


                            </li>
                            <li>

                                <a target='_blank' href="https://www.linkedin.com/in/vinay-yellaram-a4203b194/" className='linkedin-icon'><img src={linkedin} alt="" /></a>
                            </li>
                            <li>  <a target='_blank' href="mailto:vinayyellaram715@gmail.com" className='gmail-icon'><img src={gmail} alt="" />
                            </a>

                                <span>COPY EMAIL</span>
                            </li>

                        </ul>







                        <div style={{ color: "white" }}>
                            <h4>Help Me  By Giving your valuable feedback in Imporving the site.</h4>
                            <h3>“ BE MY CRITIC MY BE PRAISER ”</h3>
                        </div>
                    </div>


                </div>


            </div>



        </div >




        // </div >
    )
}

export default Contact
