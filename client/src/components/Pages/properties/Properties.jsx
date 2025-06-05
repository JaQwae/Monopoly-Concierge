import React from 'react'
import FormModal from '../../Forms/FormModal'
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
        <FormModal
          pageForm='properties'
          btnIdName='prive-btn'
          displayName='Experience Priv&#233;'
        />
      </section>
      <section id='intro-text-container'>
        <p>
        Experience the distinct style, quality, and care of our Monopoly Concierge-branded properties. Each property is thoughtfully curated by Monsieur Concierge and expertly managed by Monopoly Manager, 
          ensuring meticulous upkeep, exceptional guest experiences, and unmatched attention to detail.
        </p>
      </section>
      <section>
        <SingleProperty navHeight={navHeight} propertyIndex={0}/>
        <SingleProperty navHeight={navHeight} propertyIndex={1}/>
      </section>
      <section id='properties-partnership-container'>
        <p>
          Ready to transform your Airbnb into a Monopoly Concierge branded property?
        </p>
        <a 
            href='https://www.monopolyservices.com'
            target="_blank" rel="noopener noreferrer"
          >
            <button 
              className= 'property-cta-btn'
              >Learn More
            </button>
        </a>
      </section>
    </div>
  )
}

export default Properties

Properties.propTypes = {
  navHeight: PropTypes.number,
}