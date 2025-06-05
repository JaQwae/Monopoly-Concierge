import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ChroniclesData from '../../../data/ChroniclesData';
import altLogo2 from '../../../assets/logos/alt-logo-1-black.png';
import Buttons from '../../Buttons/Button';
import CategoryModal from '../../CategoryModal/CategoryModal';
import ArticleDialogBox from '../../ArticleDialogBox/ArticleDialogBox';
import ErrorScreen from '../../ErrorScreen/ErrorScreen';
import './ConciergeChronicles.css';

const ConciergeChronicles = ({ navHeight }) => {
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [filterHeight, setFilterHeight] = useState(0);
    const filterRef = useRef(null);
    const chroniclesRef = useRef(null);
    const [open, setOpen] = useState(false); //Handles display for category modals
    const [isArticleOpen, setIsArticleOpen] = useState(false); //Handles display for articles
    const [articleData, setArticleData] = useState(null);
    const [isErrorScreen, setIsErrorScreen] = useState(false);

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

    const allCategories = ['ALL', ...new Set(ChroniclesData.map(article => article.category))].sort();
    const mainCategories = ['ALL', 'CAR RENTALS', 'CONCIERGE SERVICES', 'PRIVATE JET TRAVEL', 'PROPERTIES'];
    const filteredArticles = selectedCategory === 'ALL'
        ? ChroniclesData
        : ChroniclesData.filter(article => article.category === selectedCategory);

    useEffect(() => {
        window.scrollTo({ top: chroniclesRef.current?.offsetTop - filterHeight - navHeight, behavior: 'smooth' });
    }, [selectedCategory, filterHeight, navHeight]);


    // Displays the full content of a single article
    const displayFullArticle = async (articleID) => {
        const url = `${import.meta.env.VITE_BACKEND_URL}/chronicles/api/${articleID}`
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            
            let data = await response.json();
            setArticleData(data);
            setIsArticleOpen(true)
            
        } catch {
            setIsErrorScreen(true)
        }
    }

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
                            <button
                                className="chronicle-link"
                                onClick={() => displayFullArticle(article.id)}
                            >Learn More &#10148;</button>
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

            {/* Article Display Box */}
            {articleData && isArticleOpen && (
                <ArticleDialogBox
                    isOpen={isArticleOpen}
                    handleArticleView={setIsArticleOpen}
                    article={articleData}
                />
            )}

            {/* Error Screen */}
            {isErrorScreen && (
                <ErrorScreen
                    isOpen={isErrorScreen}
                    handleClose={() => setIsErrorScreen(false)}
                />
            )}
        </div>
    );
};

ConciergeChronicles.propTypes = {
    navHeight: PropTypes.number
};

export default ConciergeChronicles;
