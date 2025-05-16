import React from 'react';
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import SuccessfulSubmission from '../../Forms/successful-submission/SuccessfulSubmission';
import './FooterDialogBox.css'

const FooterDialogBox = ({ isOpen, closeDialog, formCompleted }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={closeDialog}
            aria-labelledby="responsive-dialog-title"
            id={`dialog-box-${formCompleted}`}
        >
            {formCompleted ? (
                <SuccessfulSubmission handleClose={closeDialog} onFooter={true}/>
            ) : (
                <section>
                    <DialogActions>
                        <CloseIcon autoFocus onClick={closeDialog}/>
                    </DialogActions>
                    <DialogTitle id="responsive-dialog-title">
                        {"Invalid Submission"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out all the required fields
                        </DialogContentText>
                    </DialogContent>
                </section>
            )}
        </Dialog>
    );
}

export default FooterDialogBox;

FooterDialogBox.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired,
    formCompleted: PropTypes.bool.isRequired
}