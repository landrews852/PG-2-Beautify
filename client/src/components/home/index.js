import React from 'react';
import Slideshow from '../carousel';
import Navigator from '../navbar';

function Home() {
  return (
    <div className='home'>
      <Navigator />
      <h1>Hola Mundo</h1>
      <Slideshow />
    </div> 
  )
}

export default Home;