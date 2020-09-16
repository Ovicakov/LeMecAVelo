import React from 'react'

import './Carousel.css'

import img1 from './images/présentation.jpg'
import img2 from './images/image1.png'
import img3 from './images/image2.png'
import img5 from './images/image5.jpg'
import img10 from './images/image10.jpg'
import img13 from './images/image13.jpg'
import img4 from './images/image4.png'

const Carousel = () => {
  return (
    <div className='titleCarousel'>
      <div className='carouselContainer'>
        <img className="img1" src={img1} alt='image1' />
        <img className="img2" src={img2} alt='image2' />
        <img className="img3" src={img3} alt='image3' />
        <img className="img5" src={img5} alt='image4' />
        <img className='img10' src={img10} alt='image5' />
        <img className='img13' src={img13} alt='image6' />
        <img className='img4' src={img4} alt='image7' />
      </div>
    </div>
  )
}

export default Carousel