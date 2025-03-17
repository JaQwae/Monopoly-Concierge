import React from 'react'
import Button from '../../Buttons/Button'
import './ProveIntro.css'

const PriveIntro = () => {

    const handleClick = (event) => {
        event.preventDefault();
        console.log('Continue button clicked');
    };

    return (
        <div id='prive-intro-container'>
            <p>
                Through our Privé Partners, we provide privileged access to luxury hotels, boutique
                accommodations, and exclusive stays. Our trusted partnerships ensure unparalleled hospitality
                and seamless reservations at some of the most prestigious properties. Simply choose your
                destination, and let us redefine your travel experience.
            </p>
            <Button btnIdName='prive-intro-btn' displayName='CONTINUE' btnAction={handleClick}/>
        </div>
    )
}

export default PriveIntro