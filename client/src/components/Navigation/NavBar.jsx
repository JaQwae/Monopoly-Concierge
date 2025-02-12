import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import primaryLogo from '../../assets/navbar/primary-logo.png'
const Home = lazy(() => import('../Pages/home/Home.jsx'));
const Properties = lazy(() => import('../Pages/properties/Properties.jsx'));
const JetCharters = lazy(() => import('../Pages/jet-charters/JetCharters.jsx'));
const CarRentals = lazy(() => import('../Pages/car-rentals/CarRentals.jsx'));
const Services = lazy(() => import('../Pages/services/Services.jsx'));
const ConciergeChronicles = lazy(() => import('../Pages/concierge-chronicles/ConciergeChronicles.jsx'));
import './NavBar.css'

const NavBar = () => {
    return (
        <BrowserRouter>
            <nav>
                <div id='upper-nav-container'>
                    <NavLink to="/">
                        <img
                            id='nav-logo'
                            src={primaryLogo}
                            alt='The word Monopoly Concierge with a top over it'
                        />
                    </NavLink>
                    <button>BOOK</button>
                </div>
                <ul id='nav-tab-container'>                   
                    <NavLink to="/properties" className='nav-links'>
                        <li className='nav-tabs'>Properties</li>
                    </NavLink>
                    <NavLink to="/charters" className='nav-links'>
                        <li className='nav-tabs'>Jet Charters</li>
                    </NavLink>
                    <NavLink to='/rentals' className='nav-links'>
                        <li className='nav-tabs'>Car Rentals</li>
                    </NavLink>
                    <NavLink to='/services' className='nav-links'>
                        <li className='nav-tabs'>Services</li>
                    </NavLink>
                    <NavLink to="/chronicles" className='nav-links'>
                        <li className='nav-tabs'>Concierge Chronicles</li>
                    </NavLink>
                </ul>
            </nav>

            <Suspense fallback={<div>Loading...</div>}>
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
    )
}

export default NavBar