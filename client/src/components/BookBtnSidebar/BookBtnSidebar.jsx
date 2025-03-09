import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const BookBtnSidebar = ({ isOpen, closeSidebar }) => {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={closeSidebar}
    >
      <Box
        sx={{ width: 500 }}
        role="presentation"
        onClick={closeSidebar}
        onKeyDown={closeSidebar}
      >

        <button onClick={closeSidebar}>Close</button>
      </Box>
    </Drawer>
  );
};

BookBtnSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func
}

export default BookBtnSidebar;



