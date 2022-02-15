import React from 'react';
import Slideshow from '../carousel';
import Navigator from '../navbar';

function Home() {
  return (
    <div className='home'>
      <Navigator/>
      <Slideshow />
    </div> 
  )
}

export default Home;