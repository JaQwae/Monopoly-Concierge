import React from 'react'
import './Home.css'
import heroVideo from '../../../assets/home/placeholder-hero.mp4'

const Home = () => {
  return (
    <div id='home-page' className='pages'>
      <section id="hero-section" className='page-sections'>
        <video autoPlay loop muted='true' id='homepage-hero-video'>
          <source src={heroVideo} type="video/mp4"/>
        </video>
        <div className="overlay-screen">
          <div id='homepage-hero-content'>
            <h1 id="slogan"> &quot;Short Term Travel... Redefined.&quot;</h1>
            <button id="cta-hero-btn" className='btn'><span>Book Your Journey</span></button>
          </div>
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </section>
    </div>
  )
}

export default Home