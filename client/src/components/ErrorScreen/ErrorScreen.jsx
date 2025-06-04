import * as React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useMediaQuery, useTheme } from '@mui/material';
import './ErrorScreen.css';

export default function ErrorScreen({ isOpen, handleClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="error-dialog-title"
      id="error-dialog-container"
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="error-dialog-title">
        Unexpected Stop On Your Route
      </DialogTitle>
      <DialogContent id="error-dialog-content">
        <DialogContentText id="error-dialog-message">
          Something went wrong while connecting to our services. Please try again later.
        </DialogContentText>
      </DialogContent>
      <DialogActions id="error-dialog-btn-container">
        <button className="error-dialog-btns" onClick={handleClose}>
          Close
        </button>
      </DialogActions>
    </Dialog>
  );
}

ErrorScreen.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
