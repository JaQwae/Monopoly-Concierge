import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../Buttons/Button'
import './PriveIntro.css'

const PriveIntro = ({priveIntroVisible}) => {

    const handleContinueClick = (event) => {
        event.preventDefault();
        priveIntroVisible(false)
    };


    return (
        <div id='prive-intro-container' className='form-content-container'>
            <p>
                Through our Privé Partners, we provide privileged access to luxury hotels, boutique
                accommodations, and exclusive stays. Our trusted partnerships ensure unparalleled hospitality
                and seamless reservations at some of the most prestigious properties. Simply choose your
                destination, and let us redefine your travel experience.
            </p>
            <Button btnIdName='prive-intro-btn' displayName='CONTINUE' btnAction={handleContinueClick} />
        </div>
    )
}


PriveIntro.propTypes = {
    priveIntroVisible: PropTypes.func.isRequired,
}


export default PriveIntro