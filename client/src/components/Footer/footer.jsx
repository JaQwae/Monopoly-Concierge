import React, { useState } from 'react';
import Button from '../Buttons/Button';
import FormModal from '../Forms/FormModal';
import { validateFooterInputs } from '../../utils/validateFooterInputs.mjs'
import FooterDialogBox from './FooterDialogBox/FooterDialogBox.jsx';
import ErrorScreen from '../ErrorScreen/ErrorScreen.jsx';
import './footer.css'

const Footer = () => {
    const [openDialogBox, setOpenDialogBox] = useState(false);
    const [successfulSubmission, setSuccessfulSubmission] = useState(false);
    const [isErrorScreen, setIsErrorScreen] = useState(false);

    // Form inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [stateVal, setStateVal] = useState('');

    const handleFooterFormSubmit = (e) => {
        e.preventDefault();

        const subscriberObj = {
            firstName,
            lastName,
            email,
            city,
            state: stateVal
        };

        const requiredIds = ['firstName', 'lastName', 'email'];

        const checkInputs = requiredIds.map((id) => {
            const field = document.getElementById(id);
            return validateFooterInputs(field);
        });

        if (checkInputs.includes(false)) {
            setSuccessfulSubmission(false);
            setOpenDialogBox(true);
        } else {
            callToMailchimp(subscriberObj)
            .then(setSuccessfulSubmission(true))
            .then(setOpenDialogBox(true))
            .catch((error) => {
                console.error('Submission error:', error);
                setIsErrorScreen(true);
            })
        }
    };

    const callToMailchimp = async (subscriberObj) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/subscriber`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: subscriberObj }),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

        } finally {
            console.log(subscriberObj)
        }
    };


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
                            id="firstName"
                            className="footer-input-field"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            onBlur={(e) => validateFooterInputs(e.target)}
                        />
                        <input
                            id="lastName"
                            className="footer-input-field"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            onBlur={(e) => validateFooterInputs(e.target)}
                        />
                    </div>
                    <input
                        id="email"
                        className="footer-input-field"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={(e) => validateFooterInputs(e.target)}
                    />
                    <div className="form-split-section">
                        <input
                            id="city"
                            className="footer-input-field"
                            name="city"
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            onBlur={(e) => validateFooterInputs(e.target)}
                        />
                        <input
                            id="state"
                            className="footer-input-field"
                            name="state"
                            type="text"
                            placeholder="State"
                            value={stateVal}
                            onChange={(e) => setStateVal(e.target.value)}
                            onBlur={(e) => validateFooterInputs(e.target)}
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

            {openDialogBox && (
                <FooterDialogBox 
                    isOpen={openDialogBox}
                    closeDialog={() => setOpenDialogBox(false)}
                    formCompleted={successfulSubmission}
                />
            )}

            {/* Error Screen */}
            {isErrorScreen && (
                <ErrorScreen
                    isOpen={isErrorScreen}
                    handleClose={() => setIsErrorScreen(false)}
                />
            )}
        </footer>
    )
}

export default Footer