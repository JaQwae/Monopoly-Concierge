import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import './BookBtnSidebar.css'

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
              <img src="https://th.bing.com/th/id/OIP.6biXsVHLMu8Zd7GHhviDRQHaCx?rs=1&pid=ImgDetMain" alt='property image placeholder' />
              <h4>Properties</h4>
            </div>
          </NavLink>
          <NavLink to='/charters'>
            <div className='book-btn-services'>
              <img src="https://th.bing.com/th/id/OIP.Jh8daKibT-xEv_VtiQgVuQHaFj?rs=1&pid=ImgDetMain" alt='jet charter image placeholder' />
              <h4>Jet Charters</h4>
            </div>
          </NavLink>
          <NavLink to='/rentals'>
            <div className='book-btn-services'>
              <img src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/11/2pic-7.jpg" alt='car rental image placeholder' />
              <h4>Car Rentals</h4>
            </div>
          </NavLink>
          <NavLink to='/services'>
            <div className='book-btn-services'>
              <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='concierge services image placeholder' />
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



