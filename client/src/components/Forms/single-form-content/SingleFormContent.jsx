import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../../Buttons/Button';
import { Typography, LinearProgress } from '@mui/material';
import useMultiStepForm from '../../../hooks/useMultiStepForm';
import PriveIntro from '../prive-intro/PriveIntro';
import SuccessfulSubmission from '../successful-submission/SuccessfulSubmission.jsx';
import './SingleFormContent.css';

// Form Inputs
import RadioFieldGroup from '../form-inputs/radio-field/RadioFieldGroup.jsx';
import SelectFieldInput from '../form-inputs/select-field/SelectFieldInput.jsx';
import TextFieldInput from '../form-inputs/text-field/TextFieldInput.jsx';
import DatePickerInput from '../form-inputs/date-picker/DatePickerInput.jsx';
import CheckboxFieldGroup from '../form-inputs/check-field/CheckFieldGroup.jsx';
import TimePickerInput from '../form-inputs/time-picker-input/TimePickerInput.jsx';
import TextAreaInput from '../form-inputs/text-area-field/TextAreaInput.jsx';

const SingleFormContent = ({ pageForm, handleClose, prefillData, steps }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
    const [formData, setFormData] = useState({});
    const [showFormContent, setShowFormContent] = useState(true); //state for from submission status 

    const isPriveForm = pageForm === 'properties';

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 767);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (prefillData) {
            setFormData((prevData) => ({
                ...prevData,
                ...prefillData,
            }));
        }
    }, [prefillData]);

    const { step, nextStep, prevStep, updateFormData } = useMultiStepForm(pageForm, steps);

    if (isPriveForm && step === 0) {
        return <PriveIntro priveIntroVisible={nextStep} handleClose={handleClose} />;
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
            {showFormContent ? (
                <>
            <div id='progress-bar-container'>
                <LinearProgress id='progress-bar' variant="determinate" value={progress} />
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

            <Typography className='form-title' >
                {steps[step].title}
            </Typography>

            <div id='form-input-container'>
                {steps[step].fields.map((field) => {
                    if (field.type === 'p') {
                        return (
                            <p key={field.key} className={field.className}>
                                {field.pTextValue}
                            </p>
                        );
                    }

                    switch (field.type) {
                        case 'radio':
                            return (
                                <RadioFieldGroup
                                    key={field.key}
                                    field={field}
                                    formData={formData}
                                    updateFormData={handleChange}
                                />
                            );
                        case 'checkbox':
                            return (
                                <CheckboxFieldGroup
                                    key={field.key}
                                    field={field}
                                    formData={formData}
                                    updateFormData={handleChange}
                                />
                            );
                        case 'date':
                            return (
                                <DatePickerInput
                                    key={field.key}
                                    label={field.label}
                                    value={formData[field.key]}
                                    onChange={(newValue) => handleChange(field.key, newValue)}
                                    className="date-picker-input-container"
                                />
                            );
                        case 'select':
                            return (
                                <SelectFieldInput
                                    key={field.key}
                                    label={field.label}
                                    value={formData[field.key] || ''}
                                    onChange={(e) => handleChange(field.key, e.target.value)}
                                    options={field.options}
                                    className="all-form-inputs dropdown-input-container"
                                    prefillData={prefillData}
                                />
                            );
                        case 'time':
                            return (
                                <TimePickerInput
                                    key={field.key}
                                    label={field.label}
                                    value={formData[field.key]}
                                    onChange={(newValue) => handleChange(field.key, newValue)}
                                    className="time-picker-input-container"
                                />
                            );
                        case 'textarea':
                            return (
                                <TextAreaInput
                                    key={field.key}
                                    label={field.label}
                                    value={formData[field.key]}
                                    onChange={(e) => handleChange(field.key, e.target.value)}
                                    className="all-form-inputs text-area-container"
                                />
                            );
                        default:
                            return (
                                <TextFieldInput
                                    key={field.key}
                                    label={field.label}
                                    type={field.type}
                                    value={formData[field.key] || ''}
                                    onChange={(e) => handleChange(field.key, e.target.value)}
                                    autoComplete={field.autoComplete}
                                    className={`all-form-inputs text-input-container ${field.className || ''}`}
                                    prefillData={prefillData}
                                />
                            );
                    }
                })}
            </div>

            <div id='form-navigation'>
                {step > 0 && (
                    <Button
                        displayName='Back'
                        btnIdName='prev-btn'
                        btnClassName='form-btn'
                        btnAction={(e) => {
                            e.preventDefault();
                            prevStep();
                        }}
                    />
                )}
                {step < steps.length - 1 ? (
                    <Button
                        displayName='Next'
                        btnIdName='next-btn'
                        btnClassName='form-btn'
                        btnAction={(e) => {
                            e.preventDefault();
                            nextStep();
                        }}
                    />
                ) : (
                    <Button
                        displayName='Submit'
                        btnIdName='submit-btn'
                        btnClassName='form-btn'
                        btnAction={(e) => {
                            e.preventDefault();
                            console.log('Form Submitted', formData);
                            setShowFormContent(false)
                        }}
                    />
                )}
            </div>
            </>
            ) : (
                <SuccessfulSubmission handleClose={handleClose}/>
            )}
        </section>
    );
};

SingleFormContent.propTypes = {
    pageForm: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
    prefillData: PropTypes.object,
    steps: PropTypes.array.isRequired,
};

export default SingleFormContent;