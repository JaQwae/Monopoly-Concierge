import React, { useState, useEffect } from 'react';
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

  return (
    <>
      <NavBar />
      <Footer />
    </>
  )
}

export default App;