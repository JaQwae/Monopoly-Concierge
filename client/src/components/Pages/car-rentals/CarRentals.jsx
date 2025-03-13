import React from 'react'
import PropTypes from 'prop-types'

const CarRentals = ({ navHeight }) => {
    return (
        <div
            style={{ marginTop: `${navHeight}px` }}
            className='pages'
        >
            <h1>CarRentals</h1>
        </div>
    )
}

export default CarRentals

CarRentals.propTypes = {
    navHeight: PropTypes.number
}