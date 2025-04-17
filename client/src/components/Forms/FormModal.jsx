import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '../Buttons/Button';
import './FormModal.css';
import PropTypes from 'prop-types';
import primaryLogo from '../../assets/navbar/primary-logo-black.png';
import SingleFormContent from './single-form-content/SingleFormContent';

// Form Images
import propertyFormImage from '../../assets/form/placeholders/form-image-property.jpg';
import carFormImage from '../../assets/form/form-image-bentley.jpg';
import jetFormImage from '../../assets/form/placeholders/form-image-pj.jpg';
import servicesFormImage from '../../assets/form/placeholders/form-image-women-products.jpg';
import footerFormImage from '../../assets/form/placeholders/form-image-boat.jpg';

// Form Content Data
import {
  baseSteps,
  serviceFormSteps,
  carReservationSteps,
  charterFormSteps,
  footerFormSteps
} from './formSteps';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  boxShadow: 24,
};

function MultiPageForm({ pageForm, btnIdName, displayName, widgetData }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    sessionStorage.removeItem(pageForm);
  };

  const isPriveForm = pageForm === 'properties';

  let steps;
  let formImage;
  let formImageAlt;

  switch (pageForm) {
    case 'services':
      steps = serviceFormSteps;
      formImage = servicesFormImage;
      formImageAlt = '';
      break;
    case 'rentals':
      steps = carReservationSteps;
      formImage = carFormImage;
      formImageAlt = '';
      break;
    case 'charters':
      steps = charterFormSteps;
      formImage = jetFormImage;
      formImageAlt = '';
      break;
    case 'properties':
      steps = isPriveForm ? [{ key: 'priveIntro', title: '', fields: [] }, ...baseSteps] : baseSteps;
      formImage = propertyFormImage;
      formImageAlt = '';
      break;
    default:
      steps = footerFormSteps;
      formImage = footerFormImage;
      formImageAlt = '';
  }

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
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Fade in={open}>
          <Box sx={style} className="modal-form-container">
            <div className="modal-form-image-container">
              <img className="modal-form-logo" src={primaryLogo} alt="" />
              <img className="modal-form-image" src={formImage} alt={`${formImageAlt}` }/>
            </div>

            <Box component="form" noValidate autoComplete="off" id="modal-form-container">
              <SingleFormContent
                pageForm={pageForm}
                handleClose={handleClose}
                prefillData={widgetData}
                steps={steps}
              />
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
  widgetData: PropTypes.object,
};

export default MultiPageForm;