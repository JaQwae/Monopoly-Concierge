import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ChroniclesData from './ChroniclesData';
import Buttons from '../../Buttons/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './ConciergeChronicles.css';
import altLogo2 from '../../../assets/concierge-chronicles/alt-logo-1-black.png';

const ConciergeChronicles = ({ navHeight }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filterHeight, setFilterHeight] = useState(0);
    const filterRef = useRef(null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Calculate the height of the filter container
    useEffect(() => {
        const updateHeight = () => {
            if (filterRef.current) {
                setFilterHeight(filterRef.current.offsetHeight);
            }
        };

        updateHeight();
        const observer = new ResizeObserver(updateHeight);
        if (filterRef.current) observer.observe(filterRef.current);

        return () => observer.disconnect();
    }, []);

    const allCategories = ['All', ...[...new Set(ChroniclesData.map(article => article.category))].sort()];
    const mainCategories = ['All', 'TIPS', 'JOURNEYS', 'CULTURE'];
    const filteredArticles = selectedCategory === 'All'
        ? ChroniclesData
        : ChroniclesData.filter(article => article.category === selectedCategory);

    return (
        <div style={{ marginTop: `${navHeight}px` }} className='pages'>
            {/* Filter Buttons */}
            <div ref={filterRef} className="filter-buttons-container" style={{ position: 'fixed', top: `${navHeight}px` }}>
                <div id="filter-button-modal-container">
                    <Buttons 
                        displayName={<i className="fa-solid fa-sliders"></i>} 
                        btnAction={handleOpen}
                        btnIdName={'filter-button-modal'}>Open modal</Buttons>
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
            <div className="chronicles-container" style={{ paddingTop: `${filterHeight}px` }}>
                {filteredArticles.map((article) => (
                    <div className="chronicle-card" key={article.title}>
                        <div className='chronicle-image-container'>
                            <img 
                                src={altLogo2} 
                                alt='a top hat in the middle of a circle with monopoly concierge around it'
                                className='chronicle-logo'    
                            />
                            <img src={article.image} alt={article.alt} className="chronicle-image" />
                        </div>
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
