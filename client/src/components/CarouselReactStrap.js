import React from 'react';
import { Slide } from 'react-slideshow-image';
import './CarouselReactStrap.css'

import img1 from './images/présentation.jpg'
import img2 from './images/image1.png'
import img3 from './images/image2.png'

const CarouselReactStrap = () => {

  const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  }

  return(
    <div>
      <Slide {...proprietes}>
        <div className='containerSlide'>
          <div className="each-child">
            <div>
              <img src={img1} alt="img1"/>
            </div>
          </div>
          <div className="each-child">
            <div>
              <img src={img2} alt="img2"/>
            </div>
          </div>
          <div className="each-child">
            <div>
              <img src={img3} alt="img3"/>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default CarouselReactStrap;