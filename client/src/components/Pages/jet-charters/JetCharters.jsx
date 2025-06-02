import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextFieldInput from '../../Forms/form-inputs/text-field/TextFieldInput';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import PersonIcon from '@mui/icons-material/Person';
import JetArticlesCarousel from './jet-articles-carousel/JetArticlesCarousel';
import FormModal from '../../Forms/FormModal';
import './JetCharters.css';

const JetCharters = ({ navHeight }) => {
  const [widgetFormData, setWidgetFormData] = useState({
    departure: '',
    arrival: '',
    passengers: '',
  });

  const handleChange = (key, value) => {
    setWidgetFormData(prev => ({ ...prev, [key]: value }));
  };

  const fields = [
    {
      key: 'departure',
      icon: <FlightTakeoffIcon className='widget-image' style={{ fontSize: '3em' }} />,
      label: 'Departure City',
    },
    {
      key: 'arrival',
      icon: <FlightLandIcon className='widget-image' style={{ fontSize: '3em' }} />,
      label: 'Arrival City',
    },
    {
      key: 'passengers',
      icon: <PersonIcon className='widget-image' style={{ fontSize: '3em' }} />,
      label: 'Number of Passengers',
    }
  ];

  return (
    <div style={{ marginTop: `${navHeight}px` }} className='pages'>
      <section id='charter-hero-container'>
        <h1 id='jet-charter-title'>Jet Charters</h1>
        {/* <h2 id='jet-charter-sub-title'>Your journey begins above the clouds. </h2> */}
        <div id='jet-form-widget'>
          {fields.map((field) => (
            <div key={field.key} className='widget-section'>
              {field.icon}
              <TextFieldInput
                label={field.label}
                value={widgetFormData[field.key]}
                onChange={(e) => handleChange(field.key, e.target.value)}
                className='widget-input'
              />
            </div>
          ))}
          <FormModal
            pageForm='charters'
            displayName='REQUEST A JET'
            widgetData={widgetFormData}
          />
        </div>
      </section>
      <section id="jet-page-carousel-container">
        <JetArticlesCarousel />
      </section>
    </div>
  );
};

JetCharters.propTypes = {
  navHeight: PropTypes.number
};

export default JetCharters;
