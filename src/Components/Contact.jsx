import React from 'react';
import facebookImage from './images/fb.png'; 
import telegramImage from './images/teleg.png';
import whatsappImage from './images/wap.png';
import '../App.css';
function Contact() {
    return (
        <div id='cm'> 
            <h2 className='pro'>Contact Me On</h2> <br />
            <a href="https://www.whatsapp.com" className="contact-link">
                <img src={whatsappImage} alt="WhatsApp" className="contact-img" />
                WhatsApp
            </a> <br />
            
            <a href="https://www.facebook.com" className="contact-link">
                <img src={facebookImage} alt="Facebook" className="contact-img" />
                Facebook
            </a> <br />
            
            <a href="https://www.telegram.com" className="contact-link">
                <img src={telegramImage} alt="Telegram" className="contact-img" />
                Telegram
            </a>
        </div>
    );
}

export default Contact;
