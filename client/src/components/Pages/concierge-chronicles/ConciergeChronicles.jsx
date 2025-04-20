import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ChroniclesData from '../../../data/ChroniclesData';
import altLogo2 from '../../../assets/logos/alt-logo-1-black.png';
import Buttons from '../../Buttons/Button';
import CategoryModal from '../../CategoryModal/CategoryModal'; 
import './ConciergeChronicles.css';

const ConciergeChronicles = ({ navHeight }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filterHeight, setFilterHeight] = useState(0);
    const filterRef = useRef(null);
    const chroniclesRef = useRef(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    const allCategories = ['All', ...new Set(ChroniclesData.map(article => article.category))].sort();
    const mainCategories = ['All', 'TIPS', 'JOURNEYS', 'CULTURE'];
    const filteredArticles = selectedCategory === 'All'
        ? ChroniclesData
        : ChroniclesData.filter(article => article.category === selectedCategory);

    useEffect(() => {
        window.scrollTo({ top: chroniclesRef.current?.offsetTop - filterHeight - navHeight, behavior: 'smooth' });
    }, [selectedCategory, filterHeight, navHeight]);

    return (
        <div style={{ marginTop: `${navHeight}px` }} className='pages'>
            {/* Filter Buttons */}
            <div ref={filterRef} id='chronicles-filter-btn-container' className="filter-buttons-container" style={{ position: 'fixed', top: `${navHeight}px` }}>
                <div id="chronicles-filter-button-modal-container">
                    <Buttons 
                        displayName={<i className="fa-solid fa-sliders"></i>} 
                        btnAction={handleOpen} 
                        btnIdName={'chronicles-filter-button-modal'}
                    >
                        Open modal
                    </Buttons>
                </div>
                <div id='chronicles-filter-buttons' className="filter-buttons">
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
            <div ref={chroniclesRef} className="chronicles-container" style={{ paddingTop: `${filterHeight}px` }}>
                {filteredArticles.map((article) => (
                    <div className="chronicle-card" key={article.title}>
                        <div className='chronicle-image-container'>
                            <img src={altLogo2} alt='Concierge Chronicles Logo' className='chronicle-logo' />
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

            {/* Filter Button Modal */}
            <CategoryModal open={open} handleClose={handleClose}>
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
            </CategoryModal>
        </div>
    );
};

ConciergeChronicles.propTypes = {
    navHeight: PropTypes.number
};

export default ConciergeChronicles;
