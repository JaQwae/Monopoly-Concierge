import React, { useEffect, useState } from 'react'
import Button from '../../../Buttons/Button'
import PropTypes from 'prop-types'
import p1 from '../../../../assets/properties/p1.jpg'
import './SingleProperty.css'

const SingleProperty = ({ navHeight }) => {
  const [sectionHeight, setSectionHeight] = useState(0);

  // Calculate the size of the properties section depending on the navbar size
  useEffect(() => {
    let navBarVh = (navHeight * 100) / window.innerHeight; //Coverts navBar height from px to vh
    console.log(navBarVh)
    let propertySectionVh = 100 - navBarVh; //Calculate the size of the remain view of the screen
    setSectionHeight(propertySectionVh)
  }, [navHeight]);

  return (
    <section
      style={{ height: `${sectionHeight}vh` }}
      className='property-container'>
      <div className='property-section'>
        <img className='property-image' src={p1} alt='' />
      </div>
      <div className='property-section property-information-container'>
        <h3>Isabella Oasis</h3>
        <p>
          Your private urban escape near Downtown Houston. This spacious 4-bed, 4-bath duplex offers
          serenity and luxury just minutes from Midtown and popular attractions. With room for up to 14 
          guests, it’s perfect for intimate getaways or celebrations—complete with dual kitchens, living
          areas, and parking for seven. <b>
            Reserve your stay today and discover the perfect blend of space and style in the heart of Houston.
          </b>
        </p>
        <Button displayName='RESERVE' btnClassName='property-cta-btn' />
      </div>
    </section>
  )
}

export default SingleProperty

SingleProperty.propTypes = {
  navHeight: PropTypes.number
}