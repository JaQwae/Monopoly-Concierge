import React from 'react';
import Button from '../Buttons/Button';
import './footer.css'

const footer = () => {
    return (
        <footer>
            <section id='footer-contact-container'>
                <div className='footer-contact-sections'>
                    <h3>Have A Special Request?</h3>
                </div>
                <div id="footer-contact-cta-section" className='footer-contact-sections'>
                    <a href='mailto:info@monopolyservices.com'><Button btnIdName="footer-contact-btn" displayName="CONTACT US"/></a>
                    <p>Own a property? Let us earn you more.</p>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.monopolyservices.com/'><Button btnIdName="footer-contact-btn" displayName="EARN MORE"/></a>
                </div>
                <div id='social-media-container' className='footer-contact-sections'>
                <a className='social-media-links' target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/monopoly_concierge/'>
                    <i className="fa-brands fa-instagram social-media-icons"></i>
                </a>
                <a className='social-media-links' target="_blank" rel="noopener noreferrer" href='https://www.tiktok.com/@monopolyconcierge'>
                    <i className="fa-brands fa-tiktok social-media-icons"></i>
                </a>
                <a className='social-media-links' target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/p/Monopoly-Concierge-61571499328755/?profile_tab_item_selected=mentions&_rdr'>
                    <i className="fa-brands fa-facebook-f social-media-icons"></i>
                </a>
                <a className='social-media-links' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/company/monopoly-concierge/about/'>
                    <i className="fa-brands fa-linkedin social-media-icons"></i>
                </a>
                </div>
            </section>
            <section id='footer-subscribe-container'>
                <div id='footer-subscribe-heading-section'>
                    <h3 id="footer-subscribe-header">Sign up for <em>Concierge Chronicles</em></h3>
                    <p>Your gateway to exclusive travel inspiration, curated luxury experiences, and insider tips.</p>
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