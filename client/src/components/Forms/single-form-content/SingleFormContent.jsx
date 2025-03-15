import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import PriveIntro from '../prive-intro/PriveIntro'
import { TextField } from '@mui/material'

const SingleFormContent = ({ pageForm }) => {
    const [isPriveFrom, setIsPriveFrom] = useState(false);

    useEffect(() => {
        if (pageForm === 'properties') {
            setIsPriveFrom(true)
            console.log(isPriveFrom)
        }
    }, [pageForm, isPriveFrom])



    return (
        <>
            {isPriveFrom ? <PriveIntro /> :
                <section>
                    <p>{pageForm}</p>
                    <TextField
                        id="password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </section>

            }
        </>
    )
}

SingleFormContent.propTypes = {
    pageForm: PropTypes.string.isRequired,
}

export default SingleFormContent