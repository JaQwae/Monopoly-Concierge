import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

const Home = lazy(() => import('../Pages/home/Home.jsx'));
const Properties = lazy(() => import('../Pages/properties/Properties.jsx'));
const JetCharters = lazy(() => import('../Pages/jet-charters/JetCharters.jsx'));
const CarRentals = lazy(() => import('../Pages/car-rentals/CarRentals.jsx'));
const Services = lazy(() => import('../Pages/services/Services.jsx'));
const ConciergeChronicles = lazy(() => import('../Pages/concierge-chronicles/ConciergeChronicles.jsx'));

const NavBar = () => {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/properties">Properties</NavLink>
                    </li>
                    <li>
                        <NavLink to="/charters">Jet Charters</NavLink>
                    </li>
                    <li>
                        <NavLink to='/rentals'>Car Rentals</NavLink>
                    </li>
                    <li>
                        <NavLink to='/services'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/chronicles">Concierge Chronicles</NavLink>
                    </li>
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