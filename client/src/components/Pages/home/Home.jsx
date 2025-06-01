import React, { useState, lazy, Suspense, useRef } from 'react';
import monopolyConciergeHeroVideo from '../../../assets/home/monopolyConciergeHeroVideo.webm';
import Button from "../../Buttons/Button";
import './Home.css';

const ConciergeMoments = lazy(() => import('./concierge-moments/ConciergeMoments')
  .then(module => ({ default: module.ConciergeMoments })));
const BookBtnSidebar = lazy(() => import('../../BookBtnSidebar/BookBtnSidebar'));

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const conciergeMomentsSection = useRef(null);

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
    if (conciergeMomentsSection.current) {
      window.scrollTo({
        top: conciergeMomentsSection.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div id="home-page" className="pages">
      <section id="hero-section" className="page-sections">
        <video autoPlay loop muted playsInline id="homepage-hero-video">
          <source src={monopolyConciergeHeroVideo} type="video/webm" />
        </video>
        <div className="overlay-screen">
          <div id="homepage-hero-content">
            <h1 id="slogan">&ldquo;Short Term Travel... Redefined.&rdquo;</h1>
            <Button btnIdName="cta-hero-btn" displayName="BOOK YOUR JOURNEY" btnAction={toggleSidebar} />
          </div>
          <button id="video-control-container" onClick={heroVideoControls}>
            {isVideoPlaying ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
          </button>
          <button id="home-auto-scroll-container" onClick={scrollToNextSection}>
            <i className="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </section>

      <Suspense fallback={null}>
        <ConciergeMoments ref={conciergeMomentsSection} />
      </Suspense>

      <Suspense fallback={null}>
        {isSidebarOpen && <BookBtnSidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />}
      </Suspense>
    </div>
  );
};

export default Home;
