import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import monopolyConciergeHeroVideo from '../../../assets/home/monopolyConciergeHeroVideo.webm';
import monopolyConciergeHeroVideoMobile from '../../../assets/home/monopolyConciergeHeroVideoMobile.webm';
import Button from "../../Buttons/Button";
import { ConciergeMoments } from './concierge-moments/ConciergeMoments';
import './Home.css';

const BookBtnSidebar = lazy(() => import('../../BookBtnSidebar/BookBtnSidebar'));

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768 && window.innerHeight > window.innerWidth);
  const conciergeMomentsSection = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768 && window.innerHeight > window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const heroVideoControls = () => {
    const heroVideo = document.getElementById('homepage-hero-video');
    setIsVideoPlaying(!isVideoPlaying);
    isVideoPlaying ? heroVideo.pause() : heroVideo.play();
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
        <video
          key={isMobile ? 'mobile' : 'desktop'}
          autoPlay
          loop
          muted
          playsInline
          id="homepage-hero-video"
        >
          <source
            src={isMobile ? monopolyConciergeHeroVideoMobile : monopolyConciergeHeroVideo}
            type="video/webm"
          />
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

      <ConciergeMoments ref={conciergeMomentsSection} />

      <Suspense fallback={null}>
        {isSidebarOpen && <BookBtnSidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />}
      </Suspense>
    </div>
  );
};

export default Home;
