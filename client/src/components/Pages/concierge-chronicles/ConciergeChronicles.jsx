import React from 'react';
import PropTypes from 'prop-types';
import ChroniclesData from './ChroniclesData';
import './ConciergeChronicles.css'

const ConciergeChronicles = ({ navHeight }) => {
    return (
        <div
            style={{ marginTop: `${navHeight}px` }}
            className='pages'
        >
            <h1>ConciergeChronicles</h1>
            <div className="chronicles-container">
                {ChroniclesData.map((article, index) => (
                    <div className="chronicle-card" key={index}>
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
        </div>
    )
}

export default ConciergeChronicles

ConciergeChronicles.propTypes = {
    navHeight: PropTypes.number
}
