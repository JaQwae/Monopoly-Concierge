import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Loading from './components/Loading/Loading'
import NavBar from './components/Navigation/NavBar'
import Footer from './components/Footer/footer';
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  // Lazy-loaded components
  const Home = lazy(() => import('./components/Pages/home/Home.jsx'));
  const Properties = lazy(() => import('./components/Pages/properties/Properties.jsx'));
  const JetCharters = lazy(() => import('./components/Pages/jet-charters/JetCharters.jsx'));
  const CarRentals = lazy(() => import('./components/Pages/car-rentals/CarRentals.jsx'));
  const Services = lazy(() => import('./components/Pages/services/Services.jsx'));
  const ConciergeChronicles = lazy(() => import('./components/Pages/concierge-chronicles/ConciergeChronicles.jsx'));

  return (
        <BrowserRouter>
          <NavBar />
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
            <Footer />
        </BrowserRouter>
  )
}

export default App;