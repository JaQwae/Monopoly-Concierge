import React from 'react'
import './Properties.css'

import PropTypes from 'prop-types'

const Properties = ({ navHeight }) => {
  return (
    <div 
      style={{ marginTop: `${navHeight}px` }}
      className='pages'
    >
      <h1>Properties</h1>
    </div>
  )
}

export default Properties

Properties.propTypes = {
  navHeight: PropTypes.number
}