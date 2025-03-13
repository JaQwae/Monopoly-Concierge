import React from 'react'
import PropTypes from 'prop-types'

const ConciergeChronicles = ({ navHeight }) => {
    return (
        <div
            style={{ marginTop: `${navHeight}px` }}
            className='pages'
        >
            <h1>ConciergeChronicles</h1>
        </div>
    )
}

export default ConciergeChronicles

ConciergeChronicles.propTypes = {
    navHeight: PropTypes.number
}