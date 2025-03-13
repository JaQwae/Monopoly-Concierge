import React from 'react'
import Button from '../../Buttons/Button'
import SingleProperty from '../properties/single-property/SingleProperty'
import './Properties.css'

import PropTypes from 'prop-types'

const Properties = ({ navHeight }) => {
  return (
    <div
      style={{ marginTop: `${navHeight}px` }}
      className='pages'
    >
      <section id='properties-title-filter-btn-container'>
        <h1>Branded Properties</h1>
        <Button
          btnIdName='prive-btn'
          displayName='Experience Priv&#233;'
        />
      </section>
      <section id='intro-text-container'>
        <p>
        Experience the distinct style, quality, and care of our Monopoly Concierge-branded properties. In partnership with <a
            target="_blank" rel="noopener noreferrer" href='https://www.monopolyservices.com'
          >Monopoly Property Services</a>, each property is thoughtfully curated by Monsieur Concierge and expertly managed by Monopoly Manager, 
          ensuring meticulous upkeep, exceptional guest experiences, and unmatched attention to detail.
        </p>
      </section>
      <SingleProperty navHeight={navHeight} propertyIndex={0}/>
      <SingleProperty navHeight={navHeight} propertyIndex={1}/>
    </div>
  )
}

export default Properties

Properties.propTypes = {
  navHeight: PropTypes.number,
}