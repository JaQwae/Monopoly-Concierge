import React, { useEffect, useState } from 'react';
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
import RadioFieldGroup from '../form-inputs/radio-field/RadioFieldGroup.jsx';
import SelectFieldInput from '../form-inputs/select-field/SelectFieldInput.jsx'
import TextFieldInput from '../form-inputs/text-field/TextFieldInput.jsx'
import DatePickerInput from '../form-inputs/date-picker/DatePickerInput.jsx'
import CheckboxFieldGroup from '../form-inputs/check-field/CheckFieldGroup.jsx';
import TimePickerInput from '../form-inputs/time-picker-input/TimePickerInput.jsx';
import TextAreaInput from '../form-inputs/text-area-field/TextAreaInput.jsx';

const SingleFormContent = ({ pageForm, handleClose, prefillData }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 767);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Prefill form data when prefillData is provided
        if (prefillData) {
            setFormData((prevData) => ({
                ...prevData,
                ...prefillData, // Merge the prefilled data with the existing formData
            }));
        }
    }, [prefillData]);

    const isPriveForm = pageForm === 'properties';
    let steps;

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

    const { step, nextStep, prevStep, updateFormData } = useMultiStepForm(pageForm, steps);

    if (isPriveForm && step === 0) {
        return <PriveIntro priveIntroVisible={nextStep} handleClose={handleClose}/>;
    }

    const totalSteps = isPriveForm ? steps.length - 1 : steps.length;
    const progress = Math.floor((step / totalSteps) * 100);

    const handleChange = (key, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    return (
        <section className='form-content-container'>
            <div id='progress-bar-container'>
                <LinearProgress
                    id='progress-bar'
                    variant="determinate"
                    value={progress}
                />
                {isMobile ? (
                    <button
                        type="button"
                        id='form-modal-close-btn'
                        onClick={(e) => {
                            e.preventDefault();
                            handleClose();
                        }}
                    >
                        <CloseIcon id='form-modal-x-icon' />
                    </button>
                ) : (
                    <output id='progress-percentage'>{progress}%</output>
                )}
            </div>

            <Typography className='form-title' variant="h5">
                {steps[step].title}
            </Typography>

            <div id='form-input-container'>
                {steps[step].fields.map((field) => {
                    if (field.type === 'p') {
                        return (
                            <p
                                key={field.key}
                                className={field.className}
                            >
                                {field.pTextValue}
                            </p>
                        );
                    }

                    if (field.type === 'radio') {
                        return (
                            <RadioFieldGroup
                                key={field.key}
                                field={field}
                                formData={formData}
                                updateFormData={handleChange}
                            />
                        );
                    }

                    if (field.type === 'checkbox') {
                        return (
                            <CheckboxFieldGroup
                                key={field.key}
                                field={field}
                                formData={formData}
                                updateFormData={handleChange}
                            />
                        );
                    }

                    if (field.type === 'date') {
                        return (
                            <DatePickerInput
                                key={field.key}
                                label={field.label}
                                value={formData[field.key]}
                                onChange={(newValue) => handleChange(field.key, newValue)}
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
                                onChange={(e) => handleChange(field.key, e.target.value)}
                                options={field.options}
                                className="all-form-inputs dropdown-input-container"
                            />
                        );
                    }

                    if (field.type === 'time') {
                        return (
                            <TimePickerInput
                                key={field.key}
                                label={field.label}
                                value={formData[field.key]}
                                onChange={(newValue) => handleChange(field.key, newValue)}
                                className="time-picker-input-container"
                            />
                        );
                    }

                    if (field.type === 'textarea') {
                        return (
                            <TextAreaInput
                                key={field.key}
                                label={field.label}
                                value={formData[field.key]}
                                onChange={(e) => handleChange(field.key, e.target.value)}
                                className="all-form-inputs text-area-container"
                            />
                        );
                    }

                    return (
                        <TextFieldInput
                            key={field.key}
                            label={field.label}
                            type={field.type}
                            value={formData[field.key] || ''}
                            onChange={(e) => handleChange(field.key, e.target.value)}
                            autoComplete={field.autoComplete}
                            className={`all-form-inputs text-input-container ${field.className || ''}`}
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
    prefillData: PropTypes.object, // Accept prefillData prop
};

export default SingleFormContent;
