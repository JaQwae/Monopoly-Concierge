import React from 'react';
import PropTypes from 'prop-types';
import PriveIntro from '../prive-intro/PriveIntro';
import {
    TextField, Typography, LinearProgress, FormControl, FormLabel,
    RadioGroup, FormControlLabel, Radio, MenuItem, Select, Checkbox, FormGroup, InputLabel
} from '@mui/material';
import useMultiStepForm from '../../../hooks/useMultiStepForm';
import { baseSteps } from '../formSteps';
import Button from '../../Buttons/Button';
import './SingleFormContent.css';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

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
                />
                <output id='progress-percentage'>{progress}%</output>
            </div>

            <Typography className='form-title' variant="h5" gutterBottom sx={{ color: 'white' }}>
                {steps[step].title}
            </Typography>

            <div id='form-input-container'>
                {steps[step].fields.map((field) => {
                    if (field.type === 'radio') {
                        return (
                            <FormControl key={field.key} component="fieldset" className="all-form-inputs radio-group-input-container">
                                <FormLabel className="radio-group-input-title">
                                    {field.label}
                                </FormLabel>
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
                                            control={<Radio />}
                                            label={option.label}
                                            className="radio-group-input-options"
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        );
                    }

                    if (field.type === 'checkbox') {
                        return (
                            <FormControl key={field.key} component="fieldset" className="all-form-inputs" sx={{ marginBottom: 2 }}>
                                <FormLabel sx={{ color: 'white' }}>{field.label}</FormLabel>
                                <FormGroup>
                                    {field.options.map((option) => (
                                        <FormControlLabel
                                            key={option.value}
                                            control={
                                                <Checkbox
                                                    checked={formData[field.key]?.includes(option.value) || false}
                                                    onChange={(e) => {
                                                        const newValues = formData[field.key] || [];
                                                        if (e.target.checked) {
                                                            updateFormData(field.key, [...newValues, option.value]);
                                                        } else {
                                                            updateFormData(field.key, newValues.filter((v) => v !== option.value));
                                                        }
                                                    }}
                                                    sx={{ color: 'white' }}
                                                />
                                            }
                                            label={option.label}
                                            sx={{ color: 'white' }}
                                        />
                                    ))}
                                </FormGroup>
                            </FormControl>
                        );
                    }

                    if (field.type === 'date') {
                        return (
                            <LocalizationProvider key={field.key} dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    label={field.label}
                                    format="MM/DD/YYYY"
                                    className="all-form-inputs date-picker-input-container"
                                    value={formData[field.key] ? dayjs(formData[field.key]) : null}
                                    onChange={(newValue) => updateFormData(field.key, newValue ? newValue.format("YYYY-MM-DD") : "")}
                                    slots={{
                                        textField: (props) => (
                                            <TextField
                                                {...props}
                                                fullWidth
                                                margin="normal"
                                                className="all-form-inputs date-picker-input"
                                            />
                                        ),
                                    }}
                                    slotProps={{
                                        textField: {
                                            inputProps: {
                                                style: { color: "white" }, // Ensures text inside input is white
                                            },
                                        },
                                    }}
                                />
                            </LocalizationProvider>
                        );
                    }

                    if (field.type === 'select') {
                        return (
                            <FormControl
                            key={field.key}
                            fullWidth
                            margin="normal"
                            className="all-form-inputs dropdown-input-container"
                        >
                            <InputLabel
                                className="dropdown-input-title"
                                sx={{
                                    "&.Mui-focused": { color: '#FFFDF5' },
                                }}
                            >
                                {field.label}
                            </InputLabel>
                            <Select
                                value={formData[field.key] || ''}
                                onChange={(e) => updateFormData(field.key, e.target.value)}
                                label={field.label}
                                sx={{
                                    color: "#FFFDF5", // Makes selected text white
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            "& .MuiList-root": {
                                                padding: 0, // Removes padding from the dropdown menu
                                            },
                                        },
                                    },
                                }}
                            >
                                {field.options.map((option) => (
                                    <MenuItem 
                                        key={option.value} 
                                        value={option.value}
                                        className="dropdown-options"
                                    >
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
                            className='all-form-inputs text-input-container'
                            sx={{
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
            </div>

            <div id='form-navigation'>
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
