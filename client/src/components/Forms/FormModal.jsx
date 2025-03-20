import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '../Buttons/Button';
import './FormModal.css';
import PropTypes from 'prop-types';
import primaryLogo from '../../assets/navbar/primary-logo-black.png';
import bentleyFormImage from '../../assets/form/form-image-bentley.jpg';
import SingleFormContent from './single-form-content/SingleFormContent';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  boxShadow: 24,
};

function MultiPageForm({ pageForm, btnIdName, displayName }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    sessionStorage.removeItem(pageForm); // Clear session storage when closing
  };

  return (
    <div>
      <Button displayName={displayName} btnIdName={btnIdName} btnAction={handleOpen} />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className='modal-form-container'>
            <div className='modal-form-image-container'>
              <img className="modal-form-logo" src={primaryLogo} alt="" />
              <img className='modal-form-image' src={bentleyFormImage} alt='' />
            </div>

            <Box component="form" noValidate autoComplete="off" id="modal-form-container">
              <SingleFormContent pageForm={pageForm} />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

MultiPageForm.propTypes = {
  pageForm: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  btnIdName: PropTypes.string,
};

export default MultiPageForm;


