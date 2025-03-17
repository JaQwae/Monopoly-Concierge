import React, { useState } from 'react'
import Button from '../../Buttons/Button'
import { TextField } from '@mui/material'
import './ProveIntro.css'

const PriveIntro = () => {
    const [showForm, setShowForm] = useState(false);

    const handleContinueClick = (event) => {
        event.preventDefault();
        setShowForm(true);
    };

    return (
        <div id='prive-intro-container'>
        {showForm ? (
            <form>
                <TextField 
                    id="name-input" 
                    label="Name" 
                    type="text" 
                    fullWidth 
                    margin="normal" 
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
                <TextField 
                    id="email-input" 
                    label="Email" 
                    type="email" 
                    fullWidth 
                    margin="normal" 
                />
                <TextField 
                    id="phone-input" 
                    label="Phone" 
                    type="tel" 
                    fullWidth 
                    margin="normal" 
                />
                <Button btnIdName='submit-btn' displayName='SUBMIT' />
            </form>
        ) : (
            <>
                <p>
                    Through our Privé Partners, we provide privileged access to luxury hotels, boutique
                    accommodations, and exclusive stays. Our trusted partnerships ensure unparalleled hospitality
                    and seamless reservations at some of the most prestigious properties. Simply choose your
                    destination, and let us redefine your travel experience.
                </p>
                <Button btnIdName='prive-intro-btn' displayName='CONTINUE' btnAction={handleContinueClick} />
            </>
        )}
    </div>
    )
}

export default PriveIntro