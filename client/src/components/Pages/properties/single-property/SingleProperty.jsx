import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import './SingleProperty.css'
// import p1 from '../../../../assets/properties/p1.jpg'

const SingleProperty = ({navHeight}) => {
  const [sectionHeight, setSectionHeight] = useState(0);
  
  // Calculate the size of the properties section depending on the navbar size
  useEffect(() => {
    let navBarVh = (navHeight * 100 ) / window.innerHeight; //Coverts navBar height from px to vh
    console.log(navBarVh)
    let propertySectionVh = 100 - navBarVh; //Calculate the size of the remain view of the screen
    setSectionHeight(propertySectionVh)
  }, [navHeight]);

  return (
    <section 
      style = {{height: `${sectionHeight}vh`}}
      className='property-container'>
        {/* <img className='property-image' src={p1} alt=''/> */}
    </section>
  )
}

export default SingleProperty

SingleProperty.propTypes = {
  navHeight: PropTypes.number
}