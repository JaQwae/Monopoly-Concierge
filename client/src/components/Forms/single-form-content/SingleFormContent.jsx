import React from 'react';
import PropTypes from 'prop-types';
import PriveIntro from '../prive-intro/PriveIntro';
import { TextField, Typography, LinearProgress, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import useMultiStepForm from '../../../hooks/useMultiStepForm';
import { baseSteps } from '../formSteps';
import Button from '../../Buttons/Button';
import './SingleFormContent.css';

const SingleFormContent = ({ pageForm }) => {
    const isPriveForm = pageForm === 'properties';

    // If the form is a "properties" form, add the PriveIntro step as the first step.
    const steps = isPriveForm 
        ? [{ key: 'priveIntro', title: '', fields: [] }, ...baseSteps] 
        : baseSteps;

    const { step, nextStep, prevStep, formData, updateFormData } = useMultiStepForm(pageForm, steps);

    // Show PriveIntro as the first step for "properties" forms.
    if (isPriveForm && step === 0) {
        return <PriveIntro priveIntroVisible={nextStep} />;
    }

    const totalSteps = isPriveForm ? steps.length - 1 : steps.length;
    const progress = Math.floor((step / totalSteps) * 100);

    return (
        <section className='form-content-container'>
            {/* Progress Bar */}
            <div id='progress-bar-container'>
                <LinearProgress 
                    id='progress-bar'
                    variant="determinate" 
                    value={progress} 
                    sx={{
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: '#F1C7C8', 
                        }
                    }}
                />
                <output id='progress-percentage'>{progress}%</output>
            </div>

            {/* Display the title for the current step */}
            <Typography variant="h5" gutterBottom sx={{color: 'white'}}>
                {steps[step].title}
            </Typography>

            {/* Render form fields dynamically */}
            {steps[step].fields.map((field) => {
                if (field.type === 'radio') {
                    return (
                        <FormControl key={field.key} component="fieldset" sx={{ marginBottom: 2 }}>
                            <FormLabel sx={{ color: 'white' }}>{field.label}</FormLabel>
                            <RadioGroup
                                row
                                name={field.key}
                                value={formData[field.key] || field.defaultValue}
                                onChange={(e) => updateFormData(field.key, e.target.value)}
                            >
                                {field.options.map((option) => (
                                    <FormControlLabel 
                                        key={option.value} 
                                        value={option.value} 
                                        control={<Radio sx={{ color: 'white' }} />} 
                                        label={option.label} 
                                        sx={{ color: 'white' }} 
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    );
                }

                return (
                    <TextField
                        key={field.key}
                        label={field.label}
                        type={field.type}
                        value={formData[field.key] || ''}
                        onChange={(e) => updateFormData(field.key, e.target.value)}
                        autoComplete={field.autoComplete}
                        sx={{
                            backgroundColor: "black",
                            input: { color: "white" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "white" },
                                "&:hover fieldset": { borderColor: "gray" },
                                "&.Mui-focused fieldset": { borderColor: "white" },
                            },
                            "& .MuiInputLabel-root": { color: "white" },
                            "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                        }}
                        fullWidth
                        margin="normal"
                    />
                );
            })}

            {/* Form navigation buttons */}
            <div className='form-navigation'>
                {step > 0 && (
                    <Button
                        displayName='Back'
                        btnIdName='prev-btn'
                        btnClassName='form-btn'
                        btnAction={(event) => {
                            event.preventDefault();
                            prevStep();
                        }}
                    />
                )}
                {step < steps.length - 1 ? (
                    <Button
                        displayName='Next'
                        btnIdName='next-btn'
                        btnClassName='form-btn'
                        btnAction={(event) => {
                            event.preventDefault();
                            nextStep();
                        }}
                    />
                ) : (
                    <Button
                        displayName='Submit'
                        btnIdName='submit-btn'
                        btnClassName='form-btn'
                        btnAction={(event) => {
                            event.preventDefault();
                            console.log('Form Submitted', formData);
                        }}
                    />
                )}
            </div>
        </section>
    );
};

SingleFormContent.propTypes = {
    pageForm: PropTypes.string.isRequired,
};

export default SingleFormContent;
