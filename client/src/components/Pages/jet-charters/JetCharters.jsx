import React from 'react';
import PropTypes from 'prop-types';
import TextFieldInput from '../../Forms/FormInputs/TextFieldInput';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import PersonIcon from '@mui/icons-material/Person';
import Buttons from '../../Buttons/Button';
import JetArticlesCarousel from './JetArticlesCarousel';
import './JetCharters.css';

const JetCharters = ({ navHeight }) => {
  const fields = [
    {
      key: 'departure',
      icon: <FlightTakeoffIcon className='widget-image' style={{ fontSize: '3em' }}/>,
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
        <div id='jet-form-widget'>
          {fields.map((field) => (
            <div key={field.key} className='widget-section'>
              {field.icon}
              <TextFieldInput
                label={field.label}
                placeHolder={field.placeholder}
                className='widget-input'
              />
            </div>
          ))}
          <Buttons btnIdName='widget-button' displayName='Request A Jet' />
        </div>
      </section>
      <section id="jet-page-carousel-container">
        <JetArticlesCarousel/>
      </section>
    </div>
  );
};

JetCharters.propTypes = {
  navHeight: PropTypes.number
};

export default JetCharters;
