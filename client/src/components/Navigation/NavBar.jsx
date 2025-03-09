// import Loading from '../Loading/Loading.jsx'
import React, { useState, useEffect, useRef} from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import primaryLogo from '../../assets/navbar/primary-logo-black.png';
import primaryLogoWhite from '../../assets/navbar/primary-logo-white.png'
import Button from '../Buttons/Button.jsx';
import BookBtnSidebar from '../BookBtnSidebar/BookBtnSidebar.jsx'
import './NavBar.css';



// NavBar Component
const NavBar = () => {
    const [toggleDisplay, setToggleDisplay] = useState(false); // Navbar toggle state
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width
    const navRef = useRef(null);
    const location = useLocation();
    const [isHomePage, setIsHomePage] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for BookBtnSidebar visibility

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
    }, []);

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

    // Runs every time the user navigates to a different page
    useEffect(() => {
        closeMobileNav();
        verifyHomePage();
    }, [location.pathname]);

    // Automatically closes nav bar when navigating to a new tab    
    const closeMobileNav = () => {
        const isMobileView = window.innerWidth <= 1024;

        if (isMobileView && toggleDisplay) {
            setToggleDisplay(!toggleDisplay)
        }
    }

    // Checks to see if user is on homepage
    const verifyHomePage = () => {
        if (location.pathname != '/') {
            setIsHomePage(false);
        } else {
            setIsHomePage(true);
        }
    }

     // Toggle the sidebar visibility for the nav book button
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
            <nav ref={navRef}
            style={{
                backgroundColor: isHomePage ? 'transparent' : '#FFFDF5'
            }}
            >
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
                            src= {isHomePage ? primaryLogoWhite: primaryLogo}
                            alt="The word Monopoly Concierge with a top over it"
                        />
                    </NavLink>

                    {/* Call-to-Action Button */}
                    <Button btnIdName={'nav-cta-btn'} displayName='BOOK' btnAction={toggleSidebar}/>
                </div>

                {/* Navbar Tabs */}
                <ul
                    id="nav-tab-container"
                    style={{
                        display: toggleDisplay ? 'flex' : 'none', // Dynamic display based on screen size
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
                <BookBtnSidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
            </nav>
    );
};

export default NavBar;
