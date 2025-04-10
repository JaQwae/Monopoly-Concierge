import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { Typography, LinearProgress } from '@mui/material';
import './SingleFormContent.css';

// Form Content
import {
    baseSteps, serviceFormSteps,
    carReservationSteps, charterFormSteps
} from '../formSteps';
import PriveIntro from '../prive-intro/PriveIntro';

// Form Controls
import useMultiStepForm from '../../../hooks/useMultiStepForm';
import Button from '../../Buttons/Button';

// Form Inputs
import RadioFieldGroup from '../FormInputs/radio-field/RadioFieldGroup.jsx';
import SelectFieldInput from '../FormInputs/select-field/SelectFieldInput.jsx'
import TextFieldInput from '../FormInputs/text-field/TextFieldInput.jsx'
import DatePickerInput from '../FormInputs/date-picker/DatePickerInput.jsx'
import CheckboxFieldGroup from '../FormInputs/check-field/CheckFieldGroup.jsx'

const SingleFormContent = ({ pageForm, handleClose }) => {
    const isPriveForm = pageForm === 'properties';
    let steps;

    // Determines what form question to use depending on the page
    switch (pageForm) {
        case 'services':
            steps = serviceFormSteps;
            break;
        case 'rentals':
            steps = carReservationSteps;
            break;
        case 'charters':
            steps = charterFormSteps;
            break;
        case 'properties':
            steps = isPriveForm ? [{ key: 'priveIntro', title: '', fields: [] }, ...baseSteps] : baseSteps;
            break;
        default:
            console.log('Unknown form type');
    }

    const { step, nextStep, prevStep, formData, updateFormData } = useMultiStepForm(pageForm, steps);

    if (isPriveForm && step === 0) {
        return <PriveIntro priveIntroVisible={nextStep} />;
    }

    const totalSteps = isPriveForm ? steps.length - 1 : steps.length;
    const progress = Math.floor((step / totalSteps) * 100);

    return (
        <section className='form-content-container'>
            {window.innerWidth < 767 && (
                <button
                    type="button"
                    id='modal-close-btn'
                    onClick={(e) => {
                        e.preventDefault();
                        handleClose();
                    }}
                >
                    <CloseIcon id='modal-x-icon' />
                </button>

            )}
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
                            <RadioFieldGroup
                                key={field.key}
                                field={field}
                                formData={formData}
                                updateFormData={updateFormData}
                            />
                        );
                    }

                    if (field.type === 'checkbox') {
                        return (
                            <CheckboxFieldGroup
                                key={field.key}
                                field={field}
                                formData={formData}
                                updateFormData={updateFormData}
                            />
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
                    <Button
                        displayName='Back'
                        btnIdName='prev-btn'
                        btnClassName='form-btn'
                        btnAction={(e) => { e.preventDefault(); prevStep(); }}
                    />
                )}
                {step < steps.length - 1 ? (
                    <Button
                        displayName='Next'
                        btnIdName='next-btn'
                        btnClassName='form-btn'
                        btnAction={(e) => { e.preventDefault(); nextStep(); }}
                    />
                ) : (
                    <Button
                        displayName='Submit'
                        btnIdName='submit-btn'
                        btnClassName='form-btn'
                        btnAction={(e) => { e.preventDefault(); console.log('Form Submitted', formData); }}
                    />
                )}
            </div>
        </section>
    );
};

SingleFormContent.propTypes = {
    pageForm: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default SingleFormContent;