import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import PriveIntro from '../prive-intro/PriveIntro'
import { TextField } from '@mui/material'
import './SingleFormContent.css'

const SingleFormContent = ({ pageForm }) => {
    const [isPriveFrom, setIsPriveFrom] = useState(false);

    useEffect(() => {
        if (pageForm === 'properties') {
            setIsPriveFrom(true)
        }
    }, [pageForm])

    return (
        <>
            {isPriveFrom ? <PriveIntro priveIntroVisible={setIsPriveFrom} /> :
                <section className='form-content-container'>
                    <p>{pageForm}</p>
                    <TextField
                        id="password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        sx={{
                            backgroundColor: "black",
                            input: { color: "white" }, // Text color
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "white" },
                                "&:hover fieldset": { borderColor: "gray" },
                                "&.Mui-focused fieldset": { borderColor: "white" },
                            },
                            "& .MuiInputLabel-root": { color: "white" }, // Label color
                            "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                            "& .MuiInputBase-input::placeholder": { color: "rgba(255, 255, 255, 0.7)" }, // Placeholder color
                        }}
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