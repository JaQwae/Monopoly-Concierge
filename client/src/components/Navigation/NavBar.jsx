import Loading from '../Loading/Loading.jsx'
import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import primaryLogo from '../../assets/navbar/primary-logo.png';
import Button from '../Buttons/Button.jsx';
import './NavBar.css';

// Lazy-loaded components
const Home = lazy(() => import('../Pages/home/Home.jsx'));
const Properties = lazy(() => import('../Pages/properties/Properties.jsx'));
const JetCharters = lazy(() => import('../Pages/jet-charters/JetCharters.jsx'));
const CarRentals = lazy(() => import('../Pages/car-rentals/CarRentals.jsx'));
const Services = lazy(() => import('../Pages/services/Services.jsx'));
const ConciergeChronicles = lazy(() => import('../Pages/concierge-chronicles/ConciergeChronicles.jsx'));

// NavBar Component
const NavBar = () => {
    const [toggleDisplay, setToggleDisplay] = useState(false); // Navbar toggle state
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width
    const navRef = useRef(null);

    // Effect to monitor window size and handle navbar display
    useEffect(() => {
        const handleResize = () => {
            const currentWidth = window.innerWidth; // Use window.innerWidth directly
            setWindowWidth(currentWidth); // Update window width state
    
            // Dynamically determine if it's a mobile view
            if (currentWidth <= 1024) {
                setToggleDisplay(false);
            } else {
                setToggleDisplay(true);
            }
        };
    
        // Attach resize event listener
        window.addEventListener('resize', handleResize);
    
        // Initial call to handle the current window size
        handleResize();
    
        // Cleanup: Remove the resize event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures the effect runs once on mount

    // Close navbar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const currentWidth = window.innerWidth;

            if (currentWidth <= 1024 && toggleDisplay && navRef.current && !navRef.current.contains(event.target)) {
                setToggleDisplay(false); // Close the navbar
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    });

    // Automatically closes nav bar when navigating to a new tab    
    const closeMobileNav = () => {
        const isMobileView = window.innerWidth <= 1024;

        if (isMobileView && toggleDisplay) {
            setToggleDisplay(!toggleDisplay)
        }
    }




    return (
        <BrowserRouter>
            <nav ref={navRef}>
                {/* Upper Navbar */}
                <div id="upper-nav-container">
                    {/* Navbar Toggle Button */}
                    <button id="nav-toggle-btn" onClick={() => setToggleDisplay(!toggleDisplay)}>
                        {toggleDisplay ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                    </button>

                    {/* Logo */}
                    <NavLink to="/" onClick={() => closeMobileNav()}>
                        <img
                            id="nav-logo"
                            src={primaryLogo}
                            alt="The word Monopoly Concierge with a top over it"
                        />
                    </NavLink>

                    {/* Call-to-Action Button */}
                    <Button btnIdName={'nav-cta-btn'} displayName='BOOK' />
                </div>

                {/* Navbar Tabs */}
                <ul
                    id="nav-tab-container"
                    style={{
                        display: toggleDisplay ? 'flex' : 'none', // Dynamic display based on toggle state
                    }}
                >
                    <NavLink to="/properties" className="nav-links" onClick={() => closeMobileNav()}>
                        <li className="nav-tabs">Properties</li>
                    </NavLink>
                    <NavLink to="/charters" className="nav-links" onClick={() => closeMobileNav()}>
                        <li className="nav-tabs">Jet Charters</li>
                    </NavLink>
                    <NavLink to="/rentals" className="nav-links" onClick={() => closeMobileNav()}>
                        <li className="nav-tabs">Car Rentals</li>
                    </NavLink>
                    <NavLink to="/services" className="nav-links" onClick={() => closeMobileNav()}>
                        <li className="nav-tabs">Services</li>
                    </NavLink>
                    <NavLink to="/chronicles" className="nav-links" onClick={() => closeMobileNav()}>
                        <li className="nav-tabs">Concierge Chronicles</li>
                    </NavLink>
                </ul>
            </nav>

            {/* Routes for Lazy-loaded Pages */}
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/properties" element={<Properties />} />
                    <Route path="/charters" element={<JetCharters />} />
                    <Route path="/rentals" element={<CarRentals />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/chronicles" element={<ConciergeChronicles />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default NavBar;
