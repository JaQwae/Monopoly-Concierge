import React, { useState, useEffect } from 'react';
import { Box, IconButton, Slide, Stack } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import articles from '../concierge-chronicles/ChroniclesData';
import altLogo2 from '../../../assets/concierge-chronicles/alt-logo-1-black.png';
import './JetArticlesCarousel.css';

const JetArticlesCarousel = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [slideDirection, setSlideDirection] = useState('left');
    const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 767);

    function getCardsPerPage() {
        const width = window.innerWidth;
        if (width <= 767) return 1;
        if (width <= 1024) return 2;
        return 3;
    }

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 767);
            setCardsPerPage(getCardsPerPage());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const filteredCards = articles.filter(
        (card) => card.category === 'JETS' || card.category === 'TIPS'
    );

    const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

    const handleNext = () => {
        setSlideDirection('left');
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handleBack = () => {
        setSlideDirection('right');
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const startIndex = currentPage * cardsPerPage;
    const visibleCards = filteredCards.slice(startIndex, startIndex + cardsPerPage);

    return (
        <Box className="carousel-container">
            <IconButton onClick={handleBack} className="carousel-nav-btn left">
                <NavigateBeforeIcon className="carousel-icon" />
            </IconButton>

            <Slide direction={slideDirection} in mountOnEnter unmountOnExit>
                <Stack
                    direction="row"
                    spacing={5}
                    justifyContent="center"
                    className="carousel-stack"
                >
                    {visibleCards.map((card) => (
                        <Box key={card.title} className="jet-article-card">
                            <Box className="jet-article-image-container">
                                <img
                                    className="jet-article-logo"
                                    src={altLogo2}
                                    alt="Top hat logo"
                                />
                                <img
                                    className="jet-article-image"
                                    src={card.image}
                                    alt={card.alt}
                                />
                            </Box>
                            <Box className="jet-article-content">
                                <h3 className="jet-article-title">{card.title}</h3>
                                <p className="jet-article-description">{card.description}</p>
                                <a
                                    className="jet-article-link"
                                    href={card.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read More →
                                </a>
                            </Box>
                        </Box>
                    ))}
                </Stack>
            </Slide>

            <IconButton onClick={handleNext} className="carousel-nav-btn right">
                <NavigateNextIcon className="carousel-icon" />
            </IconButton>

            {/* Conditional Pagination Display */}
            <Box className="carousel-pagination-container">
                {isLargeScreen ? (
                    // Ellipses for larger screens
                    <Box className="carousel-dots-container">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <Box
                                key={index}
                                className={`carousel-dot ${currentPage === index ? 'active' : ''}`}
                                onClick={() => setCurrentPage(index)}
                            />
                        ))}
                    </Box>
                ) : (
                    // Page number format for smaller screens
                    <Box className="carousel-page-indicator">
                        <span>{currentPage + 1} / {totalPages}</span>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default JetArticlesCarousel;
