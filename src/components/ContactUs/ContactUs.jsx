import "./ContactUs.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_gkq2fd5', 'template_23zs7jg', form.current, 'qXV_XN7IgM6S6ww9N')
            .then((result) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your message has been sent.',
                    showConfirmButton: false,
                    timer: 1500
                  })
                e.target.reset();
            }, (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Error:' + error,
                  })
            });
    };

    return (
        <div className="contactUs">
            <div className="headingText">
                <h2>Hello there!</h2>
                <br />
                <p>Feel free to contact us with any questions or concerns you may have.</p>
            </div>
            <div className="contactOptions">
                <motion.div className="contactInfo"
                initial={{ translateX: -300, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
                    <div className="generalText"><div className="yellowCircleBack"><span className="material-symbols-outlined">mail</span></div><p>actionpainting1@att.net</p></div>
                    <div className="phoneNumbers">
                        <div  className="yellowCircleBack"><span className="material-symbols-outlined">smartphone</span></div>
                        <div className="phones">
                        <p><strong>Commercial:</strong> <a href="tel:954-436-8899">954-436-8899</a> </p>
                        <p><strong>Residential:</strong> <a href="tel:954-901-9025">954-901-9025</a> </p>
                        </div>
                    </div>
                    <div className="generalText"><div className="yellowCircleBack"><span className="material-symbols-outlined">location_on</span></div><p>5200 SW 164th Terrace South West Ranches, FL 33331</p></div>
                    <iframe className="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.3534045591787!2d-80.36983708499525!3d26.054704302769565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a0d4912bf775%3A0x3159f2b4f5d563ee!2s5200%20SW%20164th%20Terrace%2C%20Southwest%20Ranches%2C%20FL%2033331%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1657113788527!5m2!1ses-419!2sar" allowFullScreen={true}></iframe>
                </motion.div>
                <motion.form className="contactForm" ref={form} onSubmit={sendEmail}
                initial={{ translateX: 300, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
                    <input className="contactUsInput" type="text" name="from_name" placeholder="Full Name"/>
                    <input className="contactUsInput" type="text" name="company_name" placeholder="Company"/>
                    <input className="contactUsInput" type="tel"  name="phone_number" placeholder="Phone Number"/>
                    <input className="contactUsInput" type="email" name="from_email" placeholder="Email"/>
                    <textarea className="commentsArea" name="message" id="comments" cols="30" rows="10" placeholder="Insert comment here"></textarea>
                    <button className="contactUsButton" type="submit" value="Send">SEND</button>
                </motion.form>
            </div>

        </div>
    );
}

export default ContactUs;