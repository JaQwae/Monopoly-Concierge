import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import './BookBtnSidebar.css'

// Images
import propertySideBarImage from '../../assets/book-btn-sidebar/propertySideBarImage.jpeg'
import servicesSideBarImage from '../../assets/book-btn-sidebar/servicesSideBarImage.jpg'
import carRentalSideBarImage from '../../assets/book-btn-sidebar/carRentalSideBarImage.jpg'
import jetCharterSideBarImage from '../../assets/book-btn-sidebar/jetCharterSideBarImage.jpg'

const BookBtnSidebar = ({ isOpen, closeSidebar, screenSize }) => {

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={closeSidebar}
    >
      <Box
        sx={{
          width: screenSize < 1024 ? '100%' : 500
        }}

        aria-hidden="true"
        onClick={closeSidebar}
        onKeyDown={closeSidebar}
        id='book-btn-services-tab'
      >
        <div id='sidebar-heading'>
          <button onClick={closeSidebar}><CloseIcon id='sidebar-x-icon' /></button>
          <h3>Your Journey Starts Here</h3>
        </div>
        <section id='book-btn-services-container'>
          <NavLink to='/properties'>
            <div className='book-btn-services'>
              <img src={propertySideBarImage} alt='an orange chair in the corner in front of decor' />
              <h4>Properties</h4>
            </div>
          </NavLink>
          <NavLink to='/charters'>
            <div className='book-btn-services'>
              <img src={jetCharterSideBarImage} alt='front outside view of a private jet' />
              <h4>Jet Charters</h4>
            </div>
          </NavLink>
          <NavLink to='/rentals'>
            <div className='book-btn-services'>
              <img src={carRentalSideBarImage} alt='dashboard interior of a lamborghini' />
              <h4>Car Rentals</h4>
            </div>
          </NavLink>
          <NavLink to='/services'>
            <div className='book-btn-services'>
              <img src={servicesSideBarImage} alt='four people in a field doing yoga' />
              <h4>Concierge Services</h4>
            </div>
          </NavLink>
        </section>
      </Box>
    </Drawer>
  );
};

BookBtnSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func,
  screenSize: PropTypes.number
}

export default BookBtnSidebar;



