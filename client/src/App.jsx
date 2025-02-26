import './App.css'
import NavBar from './components/Navigation/NavBar'
import React, { useState, useEffect } from 'react';
import Loading from './components/Loading/Loading'

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

  return <NavBar />;
}

export default App;