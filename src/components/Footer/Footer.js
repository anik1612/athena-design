import React from 'react';
import './Footer.css'
import logo from '../../images/Illustration/Group 86.png';
import facebook from '../../images/Illustration/facebook-logo-in-circular-shape@2x.png';
import linkedIn from '../../images/Illustration/linkedin (2)@2x.png';
import twitter from '../../images/Illustration/twitter (4)@2x.png';
import dribble from '../../images/Illustration/dribbble (1)@2x.png';

const Footer = () => {
    return (
        <footer className = 'container footer mb-5 pt-5'>
            <div className = 'row'>
                <div className="col-md-3 mb-md-0 mb-5">
                    <div>
                        <div className='d-flex justify-content-center justify-content-md-start'>
                            <img className = 'w-50' src= {logo} alt=""/>
                        </div>
                        <div className="d-flex contact-icon justify-content-center justify-content-md-start">
                            <img src={facebook} alt=""/>
                            <img src={twitter} alt=""/>
                            <img src={linkedIn} alt=""/>
                            <img src={dribble} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-md-block d-flex justify-content-md-start justify-content-center mb-md-0 mb-3">
                    <div className='text-md-left text-center'>
                        <p>Features</p>
                        <p>Enterprise</p>
                        <p>Pricing</p>
                    </div>
                </div>
                <div className="col-md-3 d-md-block d-flex justify-content-md-start justify-content-center mb-md-0 mb-3">
                    <div className='text-md-left text-center'> 
                        <p>Blog</p>
                        <p>Help Center</p>
                        <p>Contact Us</p>
                        <p>Status</p>
                    </div>
                </div>
                <div className="col-md-3 d-md-block d-flex justify-content-md-start justify-content-center mb-md-0 mb-3">
                    <div className='text-md-left text-center'>
                        <p>About Us</p>
                        <p>Terms of Service</p>
                        <p>Security</p>
                        <p>Login</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;