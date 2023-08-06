import React, { useRef } from 'react';
import { sendEmail } from '../ApiService';
import { useState } from 'react';
import  mailImage  from "../images/mail.gif"
export const ContactUs = ({setShow}) => {
    const form = useRef();
    const [loading, setLoading] = useState(false)
    const send = (e) => {
        e.preventDefault();
        const { user_name, user_email, message } = form.current
        const data = {
            user_name: user_name.value,
            user_email: user_email.value,
            message: message.value
        }
        console.log(data)
        setLoading(true)
        sendEmail(data)
            .then((result) => {
                alert("Your email has been sent. A staff member will be in touch shortly")
                setLoading(false)
                setShow(false)
            }, (error) => {
                alert("We apologize. An error occurred while sending your message. Please try again later or reach out to us by phone.")
                setLoading(false)
                setShow(false)
            });
    };

    return (
        <div className='container '>
            {loading ?
                <>
                    <h3>Sending Request</h3>
                    <img className='w-100' src={mailImage} alt="sending email" />
                </>
                :
                <form ref={form} onSubmit={send} className="row text-start  p-2 rounded" >
                    <div className='col-lg-4 mb-3'>
                        <label className='form-label'>Name</label>
                        <input type="text" name="user_name" className='form-control' required />
                    </div>
                    <div className='col-lg-9 mb-3'>
                        <label className='form-label'>Email</label>
                        <input type="email" name="user_email" className='form-control' required />
                    </div>
                    <div className='col-lg-9 mb-3'>
                        <label className='form-label'>Message</label>
                        <textarea name="message" className='form-control' required />
                    </div>
                    <div className="col-lg-4">
                        <input className='btn btn-success' type="submit" value="Send" />
                    </div>
                </form>
            }
        </div>

    );
};

export default ContactUs;