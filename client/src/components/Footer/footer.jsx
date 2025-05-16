import React, { useState } from 'react';
import Button from '../Buttons/Button';
import FormModal from '../Forms/FormModal';
import { validateFooterInputs } from '../../utils/validateFooterInputs.mjs'
import FooterDialogBox from './FooterDialogBox/FooterDialogBox.jsx';
import './footer.css'

const Footer = () => {
    const [openDialogBox, setOpenDialogBox] = useState(false);
    const [successfulSubmission, setSuccessfulSubmission] = useState(false);

    const subscriberObj = {};

    const requiredFooterFields = [
        document.getElementById('firstName'),
        document.getElementById('lastName'),
        document.getElementById('email')
    ]

    const handleFooterFormSubmit = (e) => {
        e.preventDefault();

        subscriberObj.firstName = document.getElementById('firstName').value;
        subscriberObj.lastName = document.getElementById('lastName').value;
        subscriberObj.email = document.getElementById('email').value;
        subscriberObj.city = document.getElementById('city').value;
        subscriberObj.state = document.getElementById('state').value;

        const checkInputs = requiredFooterFields.map((footerInput) => {
            return validateFooterInputs(subscriberObj, footerInput)
        });

        if (checkInputs.includes(false)) {
            setSuccessfulSubmission(false);
            
        } else {
            fetch(`http://localhost:5174/subscriber`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: subscriberObj }),
            })
                .then(response => response.json())
                .then(data => console.log('Response from server:', data))
                .catch(error => console.error('Error:', error));
            setSuccessfulSubmission(true);
        }

        setOpenDialogBox(true);
    }

    return (
        <footer>
            <section id='footer-contact-container'>
                <div className='footer-contact-sections'>
                    <h3>Have A Special Request?</h3>
                </div>
                <div id="footer-contact-cta-section" className='footer-contact-sections'>
                    <FormModal
                        pageForm='footer'
                        btnIdName='footer-contact-btn'
                        displayName="Let's Arrange It"
                    />
                    <p>Own a property? Let us earn you more.</p>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.monopolyservices.com/'><Button btnIdName="footer-contact-btn" displayName="EARN MORE" /></a>
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
                            onBlur={(e) => validateFooterInputs(subscriberObj, e.target)}
                        />
                        <input
                            name="lastName" id="lastName" type="text"
                            placeholder="Last Name" autoComplete="family-name"
                            className='footer-input-field'
                            onBlur={(e) => validateFooterInputs(subscriberObj, e.target)}
                        />
                    </div>
                    <input
                        name="email" id="email" type="email"
                        placeholder="Email" autoComplete="on"
                        className='footer-input-field'
                        onBlur={(e) => validateFooterInputs(subscriberObj, e.target)}
                    />
                    <div className="form-split-section">
                        <input
                            name="city" id="city" type="address-level2"
                            placeholder="City" autoComplete="on"
                            className='footer-input-field'
                            onBlur={(e) => validateFooterInputs(subscriberObj, e.target)}
                        />
                        <input
                            name="state" id="state" type="address-level1"
                            placeholder="State" autoComplete="on"
                            className='footer-input-field'
                            onBlur={(e) => validateFooterInputs(subscriberObj, e.target)}
                        />
                        <Button
                            displayName='Subscribe'
                            btnIdName='footer-subscribe-btn'
                            btnAction={(e) => handleFooterFormSubmit(e)}
                            btnClassName='footer-input-field'
                        />
                    </div>
                </form>
            </section>
            <FooterDialogBox
                isOpen={openDialogBox}
                closeDialog={() => setOpenDialogBox(false)}
                formCompleted={successfulSubmission}
            />
        </footer>
    )
}

export default Footer