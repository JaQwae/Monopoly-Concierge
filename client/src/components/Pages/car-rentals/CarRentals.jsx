import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CarRentalsData from './CarRentalsData';
import Buttons from '../../Buttons/Button';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
import './CarRentals.css';
// import altLogo2 from '../../../assets/concierge-chronicles/alt-logo-1-black.png';
// import CloseIcon from '@mui/icons-material/Close';
// import carRentalHeroImage from '../../../assets/car-rentals/carRentalHeroImage.jpg'

const CarRentals = ({ navHeight }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filterHeight, setFilterHeight] = useState(0);
    const filterRef = useRef(null);
    // const [open, setOpen] = useState(false);
    // const handleClose = () => setOpen(false);

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

    // const allCategories = ['All', ...[...new Set(CarRentalsData.map(article => article.category))].sort()];
    const mainCategories = ['Luxury Rentals', 'Chauffeur Rentals'];
    const filteredRentals = selectedCategory === 'All'
        ? CarRentalsData
        : CarRentalsData.filter(article => article.category === selectedCategory);

    return (
        <div style={{ marginTop: `${navHeight}px` }} className='pages'>
            <section 
                ref={filterRef} id='car-rentals-hero-container' 
                style={{ position: 'fixed', top: `${navHeight}px` }}
            >
                <h1 id='car-rentals-title'>Car Rentals</h1>
                {/* Filter Buttons */}
                <div 
                    id='car-rentals-filter-buttons-container' 
                    className="filter-buttons-container" >
                    <div 
                        id='car-rentals-filter-buttons'
                        className="filter-buttons"
                    >
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
            </section>

            {/* Display Filtered Articles */}
            <section className="car-rentals-container" style={{ paddingTop: `${filterHeight}px` }}>
                <div className="car-rentals-grid">
                    {filteredRentals.map((car) => (
                        <div key={car.title} className="car-card">
                            <img src={car.imageUrl} alt={car.title} className="car-image" />
                            <div className="car-details">
                                <h2 className="car-title">{car.title}</h2>
                                <div className="rental-description">
                                    <div className='price-container'>
                                        <p className="price-label">Price Starting At:</p>
                                        <p className="price-value">{car.price}</p>
                                    </div>
                                    <Buttons
                                        displayName={'Reserve Now'}
                                        btnClassName={"reserve-button"}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Filter Btn Modal */}
            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)", // Change backdrop color
                    backdropFilter: "blur(5px)" // Add blur effect
                }}
            >
                <Box className="modal-box">
                <button id='modal-close-btn' onClick={handleClose}><CloseIcon id='modal-x-icon' /></button>
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
            </Modal> */}
        </div>
    );
};

export default CarRentals;

CarRentals.propTypes = {
    navHeight: PropTypes.number
};
