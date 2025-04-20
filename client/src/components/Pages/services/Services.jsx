import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import services from '../../../data/servicesData';
import Buttons from '../../Buttons/Button';
import Tooltip from '@mui/material/Tooltip';
import CategoryModal from '../../CategoryModal/CategoryModal';
import FormModal from '../../Forms/FormModal'
import './Services.css';

const ConciergeServices = ({ navHeight }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filterHeight, setFilterHeight] = useState(0);
  const filterRef = useRef(null);
  const servicesRef = useRef(null);
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

  const allCategories = ['All', ...[...new Set(services.map(service => service.category))].sort()];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(service => service.category === selectedCategory);

  useEffect(() => {
    window.scrollTo({ top: servicesRef.current?.offsetTop - filterHeight - navHeight, behavior: 'smooth' });
  }, [selectedCategory, filterHeight, navHeight]);

  return (
    <div style={{ marginTop: `${navHeight}px` }} className='pages'>
      <section
        ref={filterRef}
        id='services-filter-btn-container'
        className="filter-buttons-container"
        style={{ position: 'fixed', top: `${navHeight}px` }}
      >
        <h1 id='services-title'>Services</h1>
        <div id="services-filter-button-modal-container">
          <Buttons
            displayName={<i className="fa-solid fa-sliders"></i>}
            btnAction={handleOpen}
            btnIdName={'filter-button-modal'}>Open modal
          </Buttons>
        </div>
      </section>

      <section ref={servicesRef} className="services-container" style={{ paddingTop: `${filterHeight}px` }}>
        {filteredServices.map((service, index) => (
          <div
            className={`service-card ${index % 2 === 0 ? 'large-card' : 'small-card'}`}
            key={service.title}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            {service.requiresTwoWeekBooking && (
              <Tooltip title="2 week notice required " arrow>
                <button className='clock-container'>
                  <i className="fa-regular fa-clock" ></i>
                </button>
              </Tooltip>
            )}
            <p className='service-title-before-hover'>{service.title}</p>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <FormModal
                pageForm='services'
                btnIdName='service-book-btn'
                displayName='Book'
              />
            </div>
          </div>
        ))}
      </section>

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

export default ConciergeServices;

ConciergeServices.propTypes = {
  navHeight: PropTypes.number
};