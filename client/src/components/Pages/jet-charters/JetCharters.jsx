import React from 'react'
// import planeIcon from '../../../assets/jet-charters/plane-icon.png';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import PersonIcon from '@mui/icons-material/Person';
import './JetCharters.css'

import PropTypes from 'prop-types'

const JetCharters = ({ navHeight }) => {
  return (
    <div 
      style={{ marginTop: `${navHeight}px` }}
      className='pages'
    >
      <section id='charter-hero-container'>
          <div id='jet-form-widget'>
            <div className='widget-section'>
              <FlightTakeoffIcon className='widget-image' style={{ fontSize: '2.5em' }}/>
              {/* <img className='widget-image' src={planeIcon} alt='airplane icon'/> */}
              <input className='widget-input'></input>
            </div>
            <div className='widget-section'>
              <FlightLandIcon className='widget-image' style={{ fontSize: '2.5em' }}/>
              {/* <img className='widget-image' src={planeIcon} alt='airplane icon'/> */}
              <input className='widget-input'></input>
            </div>
            <div className='widget-section'>
              <PersonIcon className='widget-image' style={{ fontSize: '2.5em' }}/>
              {/* <img className='widget-image' src={planeIcon} alt='airplane icon'/> */}
              <input className='widget-input'></input>
            </div>
            <button>Update</button>
          </div>
      </section>
    </div>
  )
}

export default JetCharters

JetCharters.propTypes = {
  navHeight: PropTypes.number
}