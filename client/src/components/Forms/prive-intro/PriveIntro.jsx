import React from 'react'
import PropTypes from 'prop-types'
import CloseIcon from '@mui/icons-material/Close';
import Button from '../../Buttons/Button'
import './PriveIntro.css'

const PriveIntro = ({ priveIntroVisible, handleClose }) => {

    const handleContinueClick = (event) => {
        event.preventDefault();
        priveIntroVisible()
    };


    return (
        <div id='prive-intro-container' className='form-content-container'>
            <button
                type="button"
                id='prive-close-btn'
                onClick={(e) => {
                    e.preventDefault();
                    handleClose();
                }}
            >
                <CloseIcon id='prive-x-icon' />
            </button>
            <p>
                Through our Privé Partners, we provide privileged access to luxury hotels, boutique
                accommodations, and exclusive stays. Our trusted partnerships ensure unparalleled hospitality
                and seamless reservations at some of the most prestigious properties. Simply choose your
                destination, and let us redefine your travel experience.
            </p>
            <Button btnIdName='prive-intro-btn' displayName='Begin My Priv&#233; Experience' btnAction={handleContinueClick} />
        </div>
    )
}


PriveIntro.propTypes = {
    priveIntroVisible: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
}


export default PriveIntro