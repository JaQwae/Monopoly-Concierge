import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChroniclesData from './ChroniclesData';
import Buttons from '../../Buttons/Button'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './ConciergeChronicles.css';

const ConciergeChronicles = ({ navHeight }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Extract unique categories for filtering options
    const allCategories = ['All', ...[...new Set(ChroniclesData.map(article => article.category))].sort()];


    // Main 4 buttons (adjust these to fit your needs)
    const mainCategories = ['All', 'TIPS', 'JOURNEYS', 'CULTURE'];

    // Filter articles based on selected category
    const filteredArticles = selectedCategory === 'All'
        ? ChroniclesData
        : ChroniclesData.filter(article => article.category === selectedCategory);

    return (
        <div style={{ marginTop: `${navHeight}px` }} className='pages'>
            <h1>Concierge Chronicles</h1>

            {/* Filter Buttons */}
            <div className="filter-buttons-container">
                <div id="filter-button-modal-container">
                    <Buttons displayName={<FilterAltIcon />} btnAction={handleOpen}>Open modal</Buttons>
                </div>
                <div className="filter-buttons">
                    {mainCategories.map(category => (
                        <Buttons
                            key={category}
                            displayName={category}
                            btnClassName={selectedCategory === category ? 'active' : ''}
                            btnAction={() => setSelectedCategory(category)}
                        />
                    ))}
                </div>
            </div>

            {/* Display Filtered Articles */}
            <div className="chronicles-container">
                {filteredArticles.map((article) => (
                    <div className="chronicle-card" key={article.title}>
                        <img src={article.image} alt={article.alt} className="chronicle-image" />
                        <div className="chronicle-content">
                            <h3 className="chronicle-title">{article.title}</h3>
                            <p className="chronicle-description">{article.description}</p>
                            <a href={article.link} target="_blank" rel="noopener noreferrer" className="chronicle-link">
                                Read More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filter Btn Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal-box">
                    <div className="modal-categories">
                        {allCategories.map(category => (
                            <Buttons
                                key={category}
                                displayName={category}
                                btnClassName={selectedCategory === category ? 'active' : ''}
                                btnAction={() => {
                                    setSelectedCategory(category);
                                    handleClose();
                                }}
                            />
                        ))}
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default ConciergeChronicles;

ConciergeChronicles.propTypes = {
    navHeight: PropTypes.number
};
