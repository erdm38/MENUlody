import React from 'react'
import './Footer.css'
import Logo from "../../Assets/logo.png";
import Facebook from "../../Assets/facebook.png";
import X from "../../Assets/twitter.png";
import Linkedin from "../../Assets/linkedin-logo.png";

const Footer = () => {
    return(
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={Logo} alt="Logo" />
                    <p>Stay updated with the latest recipes, tips, and culinary inspiration by following us on social media. Share your kitchen creations with our community and be part of the Menulody family. Let's embark on this delicious journey together and make every meal a masterpiece!</p>
                    <div className="footer-social-icons">
                        <img src={Facebook} alt="" />
                        <img src={X} alt="" />
                        <img src={Linkedin} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+90 558 527 3838</li>
                        <li>contact@menulody.com</li>
                    </ul>
                </div> 
            </div>
            <hr />
            <p className="copyright">Copyright 2024 © Menulody.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer