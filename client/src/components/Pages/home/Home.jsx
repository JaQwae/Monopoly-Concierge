import React, { useState } from 'react'
import './Home.css'
// import heroVideo from '../../../assets/home/placeholder-hero.mp4'
import hv2 from '../../../assets/home/act-place.mp4'
import Button from "../../Buttons/Button"
import { ConciergeMoments } from './concierge-moments/ConciergeMoments'

const Home = () => {

  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const heroVideoControls = () => {
    const heroVideo = document.getElementById('homepage-hero-video');

    // Switches between the start and pause icon;
    setIsVideoPlaying(!isVideoPlaying);

    // Handles video start and pause functionality
    if (isVideoPlaying) {
      heroVideo.pause()
    } else {
      heroVideo.play();
    }
  }

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('concierge-moments-section');
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: 'smooth'
      });
    }
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
            <Button btnIdName={'cta-hero-btn'} displayName='BOOK YOUR JOURNEY'/>
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
    </div>
  )
}

export default Home