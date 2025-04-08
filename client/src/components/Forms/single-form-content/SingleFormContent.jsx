import React from 'react';
import PropTypes from 'prop-types';
import {
    Typography, LinearProgress, FormControl, FormLabel,
    RadioGroup, FormControlLabel, Radio, Checkbox, FormGroup
} from '@mui/material';
import useMultiStepForm from '../../../hooks/useMultiStepForm';
import { baseSteps } from '../formSteps';
import Button from '../../Buttons/Button';
import PriveIntro from '../prive-intro/PriveIntro';
import './SingleFormContent.css';
// Form Inputs
import SelectFieldInput from '../FormInputs/SelectFieldInput'
import TextFieldInput from '../FormInputs/TextFieldInput'
import DatePickerInput from '../FormInputs/DatePickerInput'

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

            <Typography className='form-title' variant="h5">
                {steps[step].title}
            </Typography>

            <div id='form-input-container'>
                {steps[step].fields.map((field) => {
                    if (field.type === 'radio') {
                        return (
                            <FormControl
                                key={field.key}
                                component="fieldset"
                                className={`all-form-inputs radio-group-input-container ${field.className || ''}`}
                            >
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
                            <FormControl key={field.key} component="fieldset" className="all-form-inputs checkbox-input-container" sx={{ marginBottom: 2 }}>
                                <FormLabel className='checkbox-input-title'>{field.label}</FormLabel>
                                <FormGroup>
                                    {field.options.map((option) => (
                                        <FormControlLabel
                                            className='checkbox-option-container'
                                            key={option.value}
                                            control={
                                                <Checkbox
                                                    className='checkboxes'
                                                    checked={formData[field.key]?.includes(option.value) || false}
                                                    onChange={(e) => {
                                                        const newValues = formData[field.key] || [];
                                                        if (e.target.checked) {
                                                            updateFormData(field.key, [...newValues, option.value]);
                                                        } else {
                                                            updateFormData(field.key, newValues.filter((v) => v !== option.value));
                                                        }
                                                    }}
                                                />
                                            }
                                            label={option.label}
                                            sx={{
                                                color: "white", // Ensures the label text stays white
                                                "&.Mui-focused": { color: "white" }, // Overrides focus color
                                                "&.MuiFormControlLabel-label": { color: "white" }, // Ensures label stays white in all states
                                            }}
                                        />
                                    ))}
                                </FormGroup>
                            </FormControl>
                        );
                    }

                    if (field.type === 'date') {
                        return (
                            <DatePickerInput
        key={field.key}
        label={field.label}
        value={formData[field.key]}
        onChange={(newValue) => updateFormData(field.key, newValue)}
        className="date-picker-input-container"
    />
                        );
                    }

                    if (field.type === 'select') {
                        return (
                            <SelectFieldInput
                                key={field.key}
                                label={field.label}
                                value={formData[field.key] || ''}
                                onChange={(e) => updateFormData(field.key, e.target.value)}
                                options={field.options}
                                className="all-form-inputs dropdown-input-container"
                            />
                        );
                    }

                    return (
                        <TextFieldInput
                            key={field.key}
                            label={field.label}
                            type={field.type}
                            value={formData[field.key] || ''}
                            onChange={(e) => updateFormData(field.key, e.target.value)}
                            autoComplete={field.autoComplete}
                            className="all-form-inputs text-input-container"
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
