import React, {useState} from 'react'
import './Home.css'
import heroVideo from '../../../assets/home/placeholder-hero.mp4'
import Button from "../../Buttons/Button"

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

  return (
    <div id='home-page' className='pages'>
      <section id="hero-section" className='page-sections'>
        <video autoPlay loop muted={true} id='homepage-hero-video'>
          <source src={heroVideo} type="video/mp4"/>
        </video>
        <div className="overlay-screen">
          <div id='homepage-hero-content'>
            <h1 id="slogan"> &quot;Short Term Travel... Redefined.&quot;</h1>
            {/* <button id="cta-hero-btn" className='btn'><span>Book Your Journey</span></button> */}
            <Button btnIdName={'cta-hero-btn'} displayName='BOOK YOUR JOURNEY'/>
          </div>
          <button id="video-control-container" onClick={heroVideoControls}>
            {isVideoPlaying ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
          </button>
          <button id='home-auto-scroll-container'>
            <i className="fa-solid fa-angle-down"></i>
          </button>
          
        </div>
      </section>
    </div>
  )
}

export default Home