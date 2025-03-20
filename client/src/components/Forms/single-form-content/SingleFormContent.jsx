import React from 'react';
import PropTypes from 'prop-types';
import PriveIntro from '../prive-intro/PriveIntro';
import { TextField, Typography, LinearProgress, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, MenuItem, Select } from '@mui/material';
import useMultiStepForm from '../../../hooks/useMultiStepForm';
import { baseSteps } from '../formSteps';
import Button from '../../Buttons/Button';
import './SingleFormContent.css';

const SingleFormContent = ({ pageForm }) => {
    const isPriveForm = pageForm === 'properties';
    const steps = isPriveForm ? [{ key: 'priveIntro', title: '', fields: [] }, ...baseSteps] : baseSteps;

    const { step, nextStep, prevStep, formData, updateFormData } = useMultiStepForm(pageForm, steps);

    if (isPriveForm && step === 0) {
        return <PriveIntro priveIntroVisible={nextStep} />;
    }

    const totalSteps = isPriveForm ? steps.length - 1 : steps.length;
    const progress = Math.floor((step / totalSteps) * 100);

    return (
        <section className='form-content-container'>
            <div id='progress-bar-container'>
                <LinearProgress 
                    id='progress-bar'
                    variant="determinate" 
                    value={progress} 
                    sx={{ '& .MuiLinearProgress-bar': { backgroundColor: '#F1C7C8' }}}
                />
                <output id='progress-percentage'>{progress}%</output>
            </div>

            <Typography variant="h5" gutterBottom sx={{color: 'white'}}>
                {steps[step].title}
            </Typography>

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

                if (field.type === 'date') {
                    return (
                        <TextField
                            key={field.key}
                            label={field.label}
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formData[field.key] || ''}
                            onChange={(e) => updateFormData(field.key, e.target.value)}
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
                }

                if (field.type === 'select') {
                    return (
                        <FormControl key={field.key} fullWidth margin="normal" sx={{ backgroundColor: 'black' }}>
                            <FormLabel sx={{ color: 'white' }}>{field.label}</FormLabel>
                            <Select
                                value={formData[field.key] || ''}
                                onChange={(e) => updateFormData(field.key, e.target.value)}
                                sx={{
                                    color: 'white',
                                    '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'gray' },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                                }}
                            >
                                {field.options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
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

            <div className='form-navigation'>
                {step > 0 && (
                    <Button displayName='Back' btnIdName='prev-btn' btnClassName='form-btn' btnAction={(e) => { e.preventDefault(); prevStep(); }} />
                )}
                {step < steps.length - 1 ? (
                    <Button displayName='Next' btnIdName='next-btn' btnClassName='form-btn' btnAction={(e) => { e.preventDefault(); nextStep(); }} />
                ) : (
                    <Button displayName='Submit' btnIdName='submit-btn' btnClassName='form-btn' btnAction={(e) => { e.preventDefault(); console.log('Form Submitted', formData); }} />
                )}
            </div>
        </section>
    );
};

SingleFormContent.propTypes = { pageForm: PropTypes.string.isRequired };

export default SingleFormContent;
