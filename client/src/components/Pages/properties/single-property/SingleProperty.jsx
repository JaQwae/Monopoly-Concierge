import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import propertyData from '../../../../data/propertyData'
import './SingleProperty.css'

const SingleProperty = ({ navHeight, propertyIndex }) => {
  const [sectionHeight, setSectionHeight] = useState(0);
  const [isOddSection, setIsOddSection] = useState(false);
  
  // Calculate the size of the properties section depending on the navbar size
  useEffect(() => {
    let navBarVh = (navHeight * 100) / window.innerHeight; //Coverts navBar height from px to vh
    let propertySectionVh = 100 - navBarVh; //Calculate the size of the remain view of the screen
    setSectionHeight(propertySectionVh)
  }, [navHeight]);

  // Determines if the section is even or odd so the correct stylings can be applied
  useEffect(() => {
    if (propertyIndex % 2 !== 0) {
      setIsOddSection(true);
    }
  }, [propertyIndex, isOddSection]);

  return (
    <section
      style={{ height: `${sectionHeight}vh` }}
      className={`property-container ${isOddSection ? 'property-container-odd' : ''}`}
    >
      <div className='property-section'>
        <img 
          className='property-image' 
          src={propertyData[propertyIndex].img} 
          alt={propertyData[propertyIndex].altTxt} 
        />
      </div>
      <div className='property-section property-information-container'>
        <h3>{propertyData[propertyIndex].title}</h3>
        <p>
          {propertyData[propertyIndex].text} <b>
          {propertyData[propertyIndex].boldText}
          </b>
        </p>
          <a 
            href={propertyData[propertyIndex].btnAction}
            target="_blank" rel="noopener noreferrer"
          >
            <button 
              className={
                `property-cta-btn 
                ${isOddSection ? 'property-cta-btn-odd' : ''}`
                }
              >RESERVE
            </button>
        </a>
        
      </div>
    </section>
  )
}
export default SingleProperty

SingleProperty.propTypes = {
  navHeight: PropTypes.number,
  propertyIndex: PropTypes.number
}