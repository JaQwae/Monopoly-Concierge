import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div id='loading-screen'>
      <h2 className='loading-screen-title'>Loading...</h2>
      <div className="loader"></div>
    </div>
  )
}

export default Loading