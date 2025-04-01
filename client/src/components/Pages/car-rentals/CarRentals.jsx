import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CarRentalsData from './CarRentalsData';
import Buttons from '../../Buttons/Button';
import './CarRentals.css';

const CarRentals = ({ navHeight }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filterHeight, setFilterHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const filterRef = useRef(null);
    const carCardContainerRef = useRef(null); // Reference to the car card container
    const dropdownRef = useRef(null); // Reference to the dropdown container

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

    // Detect screen size changes (both portrait and landscape)
    useEffect(() => {
        const handleResize = () => {
            const isPortraitMobile = window.innerWidth < 767;
            const isLandscapeMobile = window.innerWidth < 950 && window.matchMedia("(orientation: landscape)").matches;

            setIsMobile(isPortraitMobile || isLandscapeMobile);
        };

        handleResize(); // Run on mount to set the initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const mainCategories = ['Luxury Rentals', 'Chauffeur Rentals'];
    const filteredRentals = selectedCategory === 'All'
        ? CarRentalsData
        : CarRentalsData.filter(article => article.category === selectedCategory);

    // Function to close dropdown menu options when category selection and container scrolling 
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setDropdownOpen(false);

        if (carCardContainerRef.current) {
            const offsetTop = carCardContainerRef.current.offsetTop - filterHeight - navHeight;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <div style={{ marginTop: `${navHeight}px` }} className='pages'>
            <section
                ref={filterRef} id='car-rentals-hero-container'
                style={{ position: 'fixed', top: `${navHeight}px` }}
            >
                <h1 id='car-rentals-title'>Car Rentals</h1>
                {/* Filter Buttons */}
                <div id='car-rentals-filter-buttons-container' className="filter-buttons-container">
                    {isMobile ? (
                        // Dropdown for smaller screens
                        <div
                            className={`dropdown ${dropdownOpen ? 'open' : ''}`}
                            ref={dropdownRef}
                        >
                            <button className="dropdown-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                {selectedCategory} ▼
                            </button>
                            {dropdownOpen && (
                                <div className="dropdown-menu">
                                    {mainCategories.map(category => (
                                        <button
                                            key={category}
                                            className="dropdown-item"
                                            onClick={() => handleCategoryClick(category)}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        // Regular buttons for larger screens
                        <div id='car-rentals-filter-buttons' className="filter-buttons">
                            {mainCategories.map(category => (
                                <Buttons
                                    key={category}
                                    displayName={category}
                                    btnClassName={selectedCategory === category ? 'active' : ''}
                                    btnAction={() => handleCategoryClick(category)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Display Filtered Articles */}
            <section
                ref={carCardContainerRef}
                className="car-rentals-container"
                style={{ paddingTop: `${filterHeight}px` }}
            >
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
        </div>
    );
};

export default CarRentals;

CarRentals.propTypes = {
    navHeight: PropTypes.number
};
