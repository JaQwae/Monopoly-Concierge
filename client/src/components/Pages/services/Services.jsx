import React from 'react'
// import './Properties.css'

import PropTypes from 'prop-types'

const Services = ({ navHeight }) => {
  return (
    <div 
      style={{ marginTop: `${navHeight}px` }}
      className='pages'
    >
      <h1>Services</h1>
    </div>
  )
}

export default Services

Services.propTypes = {
  navHeight: PropTypes.number
}