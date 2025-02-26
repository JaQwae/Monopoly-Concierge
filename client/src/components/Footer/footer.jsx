import React from 'react';
import './footer.css'

const footer = () => {
    return (
        <footer>
            <section id='footer-contact-container'>
                <div className='footer-contact-sections'>
                    <h3>Have A Special Request?</h3>
                </div>
                <div className='footer-contact-sections'>
                    <button id="footer-contact-btn">CONTACT US</button>
                </div>
                <div id='social-media-container' className='footer-contact-sections'>
                    <i className="fa-brands fa-instagram social-media-links"></i>
                    <i className="fa-brands fa-tiktok social-media-links"></i>
                    <i className="fa-brands fa-facebook-f social-media-links"></i>
                    <i className="fa-brands fa-linkedin social-media-links"></i>
                </div>
            </section>
            <section id='footer-subscribe-container'>
                <div id='footer-subscribe-heading-section'>
                    <h3 id="footer-subscribe-header">Sign up for <em>Concierge Chronicles</em></h3>
                    <p>Stay up to date with the lastest trends.</p>
                </div>
                <form id='footer-form-container'>
                    <div className="form-split-section">
                        <input
                            name="firstName" id="firstName" type="text"
                            placeholder="First Name" autoComplete="given-name"
                            className='footer-input-field'
                        />
                        <input
                            name="lastName" id="lastName" type="text"
                            placeholder="Last Name" autoComplete="family-name"
                            className='footer-input-field'
                        />
                    </div>
                    <input
                        name="email" id="email" type="email"
                        placeholder="Email" autoComplete="on"
                        className='footer-input-field'
                    />
                    <div className="form-split-section">
                        <input
                            name="city" id="city" type="address-level2"
                            placeholder="City" autoComplete="on"
                            className='footer-input-field'
                        />
                        <input
                            name="state" id="state" type="address-level1"
                            placeholder="State" autoComplete="on"
                            className='footer-input-field'
                        />
                        <input
                            type="submit" value="SUBSCRIBE"
                            id='footer-subscribe-btn' className='footer-input-field'
                        />
                    </div>
                </form>
            </section>
        </footer>
    )
}

export default footer