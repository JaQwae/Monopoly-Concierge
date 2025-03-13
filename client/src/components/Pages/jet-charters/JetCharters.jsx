import React from 'react'
// import './Properties.css'

import PropTypes from 'prop-types'

const JetCharters = ({ navHeight }) => {
  return (
    <div 
      style={{ marginTop: `${navHeight}px` }}
      className='pages'
    >
      <h1>Jets</h1>
    </div>
  )
}

export default JetCharters

JetCharters.propTypes = {
  navHeight: PropTypes.number
}