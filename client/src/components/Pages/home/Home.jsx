import React, { useState, lazy, Suspense } from 'react'
import './Home.css'
// import heroVideo from '../../../assets/home/placeholder-hero.mp4'
import hv2 from '../../../assets/home/act-place.mp4'
import Button from "../../Buttons/Button"
import { ConciergeMoments } from './concierge-moments/ConciergeMoments'

// Lazy load BookBtnSidebar
const BookBtnSidebar = lazy(() => import('../../BookBtnSidebar/BookBtnSidebar'));

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const heroVideoControls = () => {
    const heroVideo = document.getElementById('homepage-hero-video');

    setIsVideoPlaying(!isVideoPlaying);

    if (isVideoPlaying) {
      heroVideo.pause();
    } else {
      heroVideo.play();
    }
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('concierge-moments-section');
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div id='home-page' className='pages'>
      <section id="hero-section" className='page-sections'>
        <video autoPlay loop muted={true} id='homepage-hero-video'>
          <source src={hv2} type="video/mp4" />
        </video>
        <div className="overlay-screen">
          <div id='homepage-hero-content'>
            <h1 id="slogan"> &quot;Short Term Travel... Redefined.&quot;</h1>
            <Button btnIdName={'cta-hero-btn'} displayName='BOOK YOUR JOURNEY' btnAction={toggleSidebar} /> 
          </div>
          <button id="video-control-container" onClick={heroVideoControls}>
            {isVideoPlaying ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
          </button>
          <button id='home-auto-scroll-container' onClick={scrollToNextSection}>
            <i className="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </section>
      <ConciergeMoments id="pic-banner" />
      
      {/* Lazy load BookBtnSidebar */}
      <Suspense fallback={null}>
        {isSidebarOpen && <BookBtnSidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />}
      </Suspense>
    </div>
  );
}

export default Home;
