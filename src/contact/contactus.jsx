import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();
   
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c0vr88c', 'template_ahco5ib', form.current, '3IoQmLPTnt2HzIxpe')
            .then((result) => {
                alert("Your email has been sent.")               
            }, (error) => {
                alert("We apologize. An error occurred while sending your message. Please try again later or reach out to us by phone.")
            });
    };

    return (
        <div className='container '>
            <form ref={form} onSubmit={sendEmail} className="row text-start  p-2 rounded" >
                <div className='col-lg-4 mb-3'>
                    <label className='form-label'>Name</label>
                    <input type="text" name="user_name" className='form-control' required/>
                </div>
                <div className='col-lg-9 mb-3'>
                    <label className='form-label'>Email</label>
                    <input type="email" name="user_email" className='form-control' required/>
                </div>
                <div className='col-lg-9 mb-3'>
                    <label className='form-label'>Message</label>
                    <textarea name="message" className='form-control' required/>
                </div>
                <div className="col-lg-4">
                <input className='btn btn-success' type="submit" value="Send" />
                </div>                
            </form>
        </div>

    );
};

export default ContactUs;