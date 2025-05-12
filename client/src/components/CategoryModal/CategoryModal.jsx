import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import './CategoryModal.css'

const CategoryModal = ({ open, handleClose, children }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                backgroundColor: "rgba(0, 0, 0, 0.7)", // Change backdrop color
                backdropFilter: "blur(15px)" // Add blur effect
            }}
        >
            <Box className="modal-box">
                <button id='modal-close-btn' onClick={handleClose}><CloseIcon id='modal-x-icon' /></button>
                <div className="modal-content">
                    {children}
                </div>
            </Box>
        </Modal>
    );
};

CategoryModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    children: PropTypes.node
};

export default CategoryModal;
